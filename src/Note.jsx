import React, {useState, useContext} from "react";
import "./style1.css";
import {NotesContext} from "./NotesContext";

function Note({id,title:initialTitle,content:initialContent}) {
    const [isEditing,setIsEditing] = useState(false);
    const [title,setTitle] =useState(initialTitle);
    const [content,setContent] =useState(initialContent);
    const {deleteNote,editNote} = useContext(NotesContext);

    function handleDelete(){
        if(window.confirm("are you sure")){
         deleteNote(id);
    }
}

    function handleSave(){
        editNote(id,{title,content});
        setIsEditing(false);
    }
    return (
        <div className="note">
            {isEditing ?(
                <>
                <input
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Title"
                />
                <textarea
                value={content}
                onChange={(e)=> setContent(e.target.value)}
                placeholder="Content"
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancle</button>
                </>
            ):(
                <>
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={()=> setIsEditing(true)}>Edit</button>
                </>
            )}
        </div>
        );

    }
   
export default Note;