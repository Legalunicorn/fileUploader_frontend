import { useState } from "react"
import "./folder.scss"
import { useNavigate } from "react-router-dom";

export default function FolderCard({
    folder
}){
    //takes in folder object
    const navigate = useNavigate();
    const openFolder =()=>{
        navigate(`folders/${folder.id}`)
    }

    const [isEdit,setIsEdit] = useState(false);
    return (
        <div className="folder-card">
            <span 
                className="card-thumbnail material-symbols-outlined"
                onClick={openFolder}
                >
            folder
            </span>
            <div className="folder-meta">
                {isEdit?
                    <input type="text" onChange={handleChange} value={folder.name}/>
                    :
                    <p>{folder.name}</p>
                }
                <span class="material-symbols-outlined">
                more_vert
                </span>

            </div>
        </div>
    )



}


//folder information etc are all extra utility,
// dont really need them to be honest 

/*

Folder ICON
NAME ":" <- options

*/