import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authFetch } from "../../utils/authFetch";
import { useAuthContext } from "../../hooks/useAuthContext";
import File from "../../components/File/File";

export default function Folder(){
    const {folderId} = useParams();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState();
    const [files,setFiles] = useState([])
    const [folder,setFolder] = useState({});
    
    const {user} = useAuthContext();
    const navigate = useNavigate();

    console.log("FID is",folderId);


    useEffect(()=>{
        //we want to retreive files 
        const loadData = async()=>{
            try{
                const response = await authFetch(`/folders/${folderId}/files`,user)
                const data = await response.json();
                setLoading(false);
                if (!response.ok){
                    setError("Something went wrong.")
                } else{
                    const {files,folder} = data;
                    console.log("FILES: ",files);
                    setFiles(files);
                    setFolder(folder)
                }


            } catch(err){
                console.log(err);
                setError(err.message)
                setLoading(false);
            }

        }
        loadData()

    },[])

    return (
        <div className="content folder-page">
            {loading?<p>Loading blah</p>:
                <>
                    <div className="page-header">
                        <p className="p-lg">{folder.name}</p>
                        <span 
                            class="material-symbols-outlined"
                            onClick={()=>(navigate('new'))}
                        >
                        upload_file
                        </span>
                    </div>
                    
                    <div className="file-list">
                        {files.map(file=>(
                            <File
                                key={file.id}
                                file={file}
                            />
                        ))}
                    </div>
                </>

            }
        </div>
    )
}