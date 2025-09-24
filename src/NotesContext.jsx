import React, {createContext, useState, useEffect } from "react";
 

export const NotesContext = createContext();

export function NotesProvider({children}){
    const [ notes, setNotes] = useState([]);

    useEffect(() =>{
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);

    function addNote(newNote){
        setNotes((prevNotes) => [...prevNotes,newNote]);
    }

    function editNote(id,updatedNote) {
        setNotes((prevNotes) =>
          prevNotes.map((note,index) =>(index === id ? updatedNote: note))
    );
    }
    
    function deleteNote(id) {
        setNotes((prevNotes) => prevNotes.filter((_,index) => index !==id));
    }

    return (
        <NotesContext.Provider value={{ notes,addNote,editNote,deleteNote}}>
            {children}
        </NotesContext.Provider>
    );
}

export default NotesContext;