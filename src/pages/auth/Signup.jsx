import { useNavigate,Form,Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import { basicFetch } from "../../utils/basicFetch";
import joinErrors from "../../utils/joinErrors";


export default function Signup(){
    const {dispatch} = useAuthContext();
    const [disabled,setDisabled] = useState(false);
    const navigate = useNavigate();
    const [error,setError] = useState();

    //disable sign up if passwords not matching

    

    const handleSubmit = async(e)=>{
        e.preventDefault();
        //check that confirm password and password are align
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        if (password!=confirm_password){
            setError("• "+"Passwords do not match")
            return;
        }

        setDisabled(true);
        try{
            const response = await basicFetch("/auth/signup",{
                method:"POST",
                body:JSON.stringify({
                    username:e.target.username.value,
                    password,
                    confirm_password
                })
            })
            const data = await response.json();
            setDisabled(false);

            if (!response.ok){
                data?.error && setError("• "+data?.error)
                data?.errors && setError(joinErrors(data.errors))
            }
            else{
                const {token,username} = data;
                dispatch({type:"LOGIN",payload:{token,username}})
                localStorage.setItem("user",JSON.stringify({token,username}));
                navigate("/user")
            }
        } catch(err){
            console.log(err);
            setError(err.message)
            setDisabled(false)
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-form-container">
                <p>Sign up</p>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        name="username" 
                        minLength="2" 
                        required 
                        type="text" 
                        pattern="^[a-zA-Z0-9_.]*$" 
                        autoComplete="new-password"
                        placeholder="Eg. JohnAppleseed" 
                        title="Username must be alphanumeric, and may contain periods or underscore"
                        />
                    <label htmlFor="username">Password</label>
                    <input 
                        name="password"
                        minLength="2" 
                        required 
                        type="password" 
                        placeholder="********"
                        />
                    <label htmlFor="username">Confirm Password</label>
                    <input 
                        name="confirm_password" 
                        minLength="2" 
                        required 
                        type="password" 
                        placeholder="********"
                        />                    
                    {error &&
                    <p className="error-msg">
                        {error}
                    </p>}
                    <button disabled={disabled} type="submit">Log in</button>
                    <p>
                        <span>Already have  an account? </span>
                        <Link to="/auth/login">Sign up</Link>
                    </p>                     

                </Form>
            </div>
        </div>
    )
}