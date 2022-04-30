import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const notesVal = JSON.parse(localStorage.getItem('notes')) !== [];
  const [notes, setNotes] = useState(notesVal ? JSON.parse(localStorage.getItem('notes')) :[]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const editNote = (id) => {
    setNotes(prevNotes => {
      let item = prevNotes[id];
      item.isEditMode = !item.isEditMode;
      prevNotes[id] = item;
    return [...prevNotes];
    });
  }
  const saveNote = (id,editedNote) => {
    setNotes(prevNotes => {
      prevNotes[id] = editedNote;

    return [...prevNotes];
    });
  }

  localStorage.setItem('notes', JSON.stringify(notes));

  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note key={index} id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
            onSave={saveNote}
            editMode={noteItem.isEditMode}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
