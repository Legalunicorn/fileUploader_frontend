import {Navigate,Outlet} from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";


//TODO 
export const ProtectedRoute =()=>{
    const {loading,user} = useAuthContext();
    console.log("in protrected",loading)
    console.log(user);
    return (
        loading?
            <p>Loading</p>
            :
            user?
                <Outlet/>
                :
                <Navigate to="/auth/login"/>
    )
}