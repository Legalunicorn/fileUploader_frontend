const API_URL = import.meta.env.VITE_API_URL;

export const basicFetch= async(url,options)=>{
    const response = await fetch(API_URL+url,{
        headers:{
            "Content-Type":"application/json"
        },
        ...options
    })
    return response;
}