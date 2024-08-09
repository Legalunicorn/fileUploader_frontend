import { useEffect,useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useNavigate,Form } from "react-router-dom";
import "./auth.scss"

export default function Login(){
    const {user,dispatch} = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        //check if user is logged in 
        if (user){
            console.log("redirected from login: ",user);
            navigate('/user');
        }
    },[])

    const handleSubmit = () =>{
        //Submit logic for login form
    }

    return (
        <div className="auth-page"> 
            <div className="auth-form-container">
                <p>MyFiles</p>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" minLength="2" required type="text" placeholder="Eg. JohnAppleseed"/>
                    <label htmlFor="username">Password</label>
                    <input name="password" minLength="2" required type="password"/>
                    <button type="submit">Log in</button>
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