import React, { useState } from 'react';
import "../App.css"


interface NoteFormProps {
  onSubmit: (text: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
    <input 
      className="note-form-input"
      type="text" 
      value={text} 
      onChange={e => setText(e.target.value)} 
      placeholder="Enter your note here" 
    />
    <button className="note-form-submit" type="submit">Add Note</button>
  </form>
  
  );
};

export default NoteForm;

