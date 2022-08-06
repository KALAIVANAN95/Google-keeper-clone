import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

const CreateArea = (props) => {
  const [isExpended, setIsExpened] = useState(false);

  const [note,setNote]=useState({
    title:'',
  content:'',
 });

 function handleChange(event){
  const name=event.target.name;
  const value=event.target.value;


  setNote((prevNote)=>{
    return{
      ...prevNote,
      [name]:value,
    }
        
  })
 }

  const expend = () => {
    setIsExpened(true);
  };

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:"",
    })
  }
  return (
    <div>
      <form className="create-note">
        {isExpended && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          rows={isExpended ? 3 : 1}
          placeholder="Take a note.. .."
          onClick={expend}
          value={note.content}
          onChange={handleChange}
        ></textarea>

        <Zoom in={isExpended}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
