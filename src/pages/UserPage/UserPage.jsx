import { useEffect, useState } from "react"
import "./userPage.scss"
import {authFetch} from "../../utils/authFetch"
import { useAuthContext } from "../../hooks/useAuthContext"
import FolderCard from "../../components/Folder/FolderCard";
import { useNavigate } from "react-router-dom";

export default function UserPage(){
    const {user} = useAuthContext();
    const [loading,setLoading] = useState(true);
    const [folders,setFolders] = useState([]);
    const [error,setError] = useState();
    const navigate = useNavigate();
    //get folders of user 
    // else show loading shit

    //each folder needs a component 
    //handle patching it etc


    useEffect(()=>{
        const loadPage = async ()=>{
            try{
                const response = await authFetch("/folders",user) //default method get;
                const data = await response.json();
                setLoading(false);
    
                if (!response.ok){
                    console.log("Wtf")
                    setError("We are unable to retrieve resource at this time. Please try again")
                } else{
                    console.log(data.folders)
                    setFolders(data.folders);
                }
            } catch(err){
                console.log(err);
                setError(err.message)
                setLoading(false);
            }
        }
        loadPage();
    },[])

    return(
        <div className="content user-page">
            <div className="page-header">
                <p className="p-lg">Folders</p>
                <span className="material-symbols-outlined"
                onClick={()=>{navigate("new")}}
                >
                create_new_folder
                </span>
            </div>
            
            {loading?
                <p>Loading</p>
                :
                <div className="folders-list">
                    {folders.map(folder=>(
                        <FolderCard
                            key={folder.id}
                            folder={folder}
                        />
                    ))}
                </div>

            }
        </div>
    )

    // return(

    // )
}