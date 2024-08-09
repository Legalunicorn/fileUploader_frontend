import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () =>{
    const context = useContext(AuthContext);
    if (!context){
        //throw error idk how this is managed 
        throw Error("Auth context accessed outside of scope")
        //this wont happen because Authcontext wraps our entire app
    }
    return context;
}