import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { Notes } from "@material-ui/icons";

const Note = (props) => {

  const [note, setNote] = useState({
    title: props.title,
    content: props.content,
    isEditMode: true
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const handleClick = () => {
    props.onDelete(props.id);
  }

  const handleEdit = () => {
    props.onEdit(props.id);
  }

  const handleSave = () => {
    note.isEditMode = false
    props.onSave(props.id, note);
  }

  return (
    <div className="note">
    { !props.editMode ? <strong>{props.title}</strong> :  <input name="title" onChange={handleChange}   value={note.title}/>}
     { !props.editMode ? <p>{props.content}</p> : <textarea name="content" onChange={handleChange}  value={note.content}/>}
    
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button>
      {!props.editMode ?<EditIcon onClick={handleEdit} /> :<SaveIcon onClick={handleSave} />}
      </button>
    </div>
  );
}

export default Note;
