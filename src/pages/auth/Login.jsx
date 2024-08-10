import { useEffect,useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useNavigate,Form,Link } from "react-router-dom";
import {basicFetch} from "../../utils/basicFetch"
import joinErrors from "../../utils/joinErrors";
import "./auth.scss"

export default function Login(){
    const {user,dispatch} = useAuthContext();
    const [disabled,setDisabled] = useState(false)
    const navigate = useNavigate();
    const [error,setError] = useState();

    useEffect(()=>{
        //check if user is logged in 
        if (user){
            console.log("redirected from login: ",user);
            navigate('/user');
        }
    },[])


    const handleSubmit = async(e) =>{
        setDisabled(true);
        e.preventDefault();
        try{
            const response = await basicFetch("/auth/login",{
                method:"POST",
                body:JSON.stringify({
                    username:e.target.username.value,
                    password: e.target.password.value
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
                localStorage.setItem('user',JSON.stringify({token,username}))
                navigate("/user")
            }
        } catch(err){
            console.log(err);
            setError(err.message);
            setDisabled(false);
        }

    }

    return (
        <div className="auth-page"> 
            <div className="auth-form-container">
                <p>Log In</p>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        name="username"
                        minLength="2" 
                        required type="text" 
                        autoComplete="new-password"
                        placeholder="Eg. JohnAppleseed"
                        pattern="^[a-zA-Z0-9_.]*$"
                        title="Username must be alphanumeric, and may periods or underscores"
                        />
                    <label htmlFor="username">Password</label>
                    <input name="password" minLength="2" required type="password" placeholder="********"/>
                    {error &&
                    <p className="error-msg">
                        {error}
                    </p>}
                    <button disabled={disabled} type="submit">Log in</button>
                    <p>
                        <span>Don't have  an account? </span>
                        <Link to="/auth/signup">Sign in</Link>
                    </p>  
                </Form>
            </div>
        </div>

    )


}

/*
-> auth page : to center the form
fomr -container: to hold the entire box with the form
form element
form form
*/


/*

- If use is logged in -> redirect to /user
- 


FLOW 
-> submit login form
-> http POST request
-> get response:
    STATUS : 200x
    -> redirect to
*/