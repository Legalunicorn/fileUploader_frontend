import { useState } from "react"
import "./file.scss"

export default function File({file}){

    const [imgSrc,setImgSrc] = useState(file.path)

    return (
        <div className="file-card">
            <img 
                onError={()=>setImgSrc("https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png")}
                className="file-thumbnail"
                src={imgSrc} 
                alt="No Image Available" 
            />
            <div className="file-meta">
                <p>{file.name}</p>
                <span class="material-symbols-outlined">
                more_vert
                </span>
                {/* <a href={file.downloadLink}>Download</a> */}
            </div>
        </div>
    )
}