import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import axios from 'axios';

interface Note {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/data");
      setData(response.data.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleCreateNote = (text: string) => {
    setNotes([...notes, { id: Date.now().toString(), text }]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (id:string) => {
    // your code here
  }

  return (
    <div>
      <NoteForm onSubmit={handleCreateNote} />
      <NoteList notes={notes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
    </div>
  );
};

export default App;
