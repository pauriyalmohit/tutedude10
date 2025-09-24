 import React, { useState, useContext } from "react";
 import {NotesContext} from "./NotesContext";
 

function CreateArea(){
    const {addNote} = useContext(NotesContext);
    const [note,setNote]= useState({title:"", content:""});
 
    function handleChange(e) {
        const{name,value}= e.target;
        setNote((prevNote) => ({
            ...prevNote,[name]: value
    }));
}

    function submitNote(e) {
        e.preventDefault();

        if(!note.title.trim() || !note.content.trim()){
            alert("Both Title and Content are required!");
            return;
            
        }
        addNote(note);
        setNote({title:"", content:""});

    }
    
    return (
        <div>
            <form onSubmit={submitNote}>
                <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
               />
               <textarea
               name="content"
               onChange={handleChange}
               value={note.content}
               placeholder="Take a note...."
               rows="3"
               />
               <button type="submit">+</button>
            </form>
        </div>
    );
}
export default CreateArea;