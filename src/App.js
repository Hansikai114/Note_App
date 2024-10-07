import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const addNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index) => {
    const newNote = prompt("Edit your note:", notes[index]);
    if (newNote) {
      setNotes(notes.map((note, i) => (i === index ? newNote : note)));
    }
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <input
        type="text"
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        placeholder="Enter your note here"
      />
      <button onClick={addNote}>Add Note</button>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button onClick={() => editNote(index)}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
