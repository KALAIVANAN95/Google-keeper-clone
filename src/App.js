
import { useState } from 'react';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import './App.css';



function App() {

const [notes,setNotes]=useState([]);

function addNote(newNote){
  setNotes((prevNotes)=>{
    return[...prevNotes,newNote]
  })
}

function deleteNote(id){
  setNotes((prevNotes)=>{
    return prevNotes.filter((_, index)=>{
      return index !==id;
    })
  })
}
  return (
  <>
  <Header />
  <CreateArea onAdd={addNote}/>
  {
  notes.map((noteItem, index)=>{
    return(
      <Note 
      key={index}
      title={noteItem.title}
      content={noteItem.content}
      id={index}
      onDelete={deleteNote}
      
      />
    )
  })
  }
  <Footer />
  </>
  );
}

export default App;
