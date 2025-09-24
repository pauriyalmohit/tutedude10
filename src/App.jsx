import React,{useContext} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { NotesContext } from "./NotesContext";


// function App() {
//   const {notes,setNotes}=useContext(NotesContext);

//   function addNote(newNote){
//    setNotes((prevNotes)=>[...prevNotes,newNote]);
//    }

//   function editNote(id,updateNote){
//     setNotes (prevNotes =>
//       prevNotes.map((noteItem,index)=>
//       index===id? updateNote :noteItem
//       )
//   );
// }

//   function deleteNote(id){
//     setNotes((prevNotes)=>
//       prevNotes.filter((_,index) => index !== id)
//     );
//   }

  function App() {
    const {notes,editNote,addNote,deleteNote} = useContext(NotesContext);
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index)=> (
          <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onEdit={editNote}
          />
      ))}
        <Footer/>
        </div>
      );
}
export default App;
