import { useParams,Form, useNavigate } from "react-router-dom";
import { authFetch } from "../../utils/authFetch";
import { useAuthContext } from "../../hooks/useAuthContext";


export default function UploadFile(){
    const {folderId} = useParams();
    const navigate = useNavigate();
    const {user} = useAuthContext();

    const handleSubmit = async(e)=>{
        const data = new FormData();
        data.append("image",e.target.image.files[0]);
        data.append('folderId',folderId);
        const response = await authFetch(`/files`,user,{
            method:"POST",
            body:data,
            headers:{
                // "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${user.token}`
            }
        }) 
        const json = await response.json();
        if (!response.ok){
            console.log(json);
            console.log("ERROR")
        }
        else{
            console.log(json)
            navigate(`/user/folders/${folderId}`);

        }

    }

    return(
        <div className="content">
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* <input type="text" name="filename" /> */}
                <input type="file" name="image" />
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}