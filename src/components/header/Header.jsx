import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext"
import "./header.scss"

export default function Header(){

    const {user} = useAuthContext();
    const navigate = useNavigate();
    return(
        <>

            <div className="header">
                <span 
                    class="material-symbols-outlined"
                    onClick={()=>navigate("/user")}
                    >
                    home
                </span>
                {user && <p> Welcome {user.username}</p>}



                {user?
                    <Link to="/auth/logout">logout</Link>
                :
                    <>
                        <Link to="/auth/login">Login</Link>
                        <Link to="/auth/signup">Signup</Link>
                    </>

                }
            </div>

        </>
    )
}