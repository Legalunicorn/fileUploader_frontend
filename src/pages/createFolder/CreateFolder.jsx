import { useNavigate,Form } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import {authFetch} from "../../utils/authFetch";

export default function CreateFolder(){
    const {user} = useAuthContext();
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        const response = await authFetch("/folders",user,{
            method:"POST",
            body:JSON.stringify({name:e.target.name.value})
        })
        const data= await response.json();
        if (!response.ok){
            console.log(data);
        }
        else{
            console.log(data)
            navigate("/user")
        }

    }

    return (
        <div className="content">
            <Form onSubmit={handleSubmit}>
                Enter Folder name:
                <input type="text" name="name" required/>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}