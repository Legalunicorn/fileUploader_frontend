//for fetches that will have bearer as part in headers


import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export const authFetch =  async(url,user,options)=>{
    const {user} = useAuthContext();
    const navigate = useNavigate();

    const response = await fetch(API_URL+url,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${user.token}`
            },
            mode:"cors",
            ...options
        }

    )

    return response
}