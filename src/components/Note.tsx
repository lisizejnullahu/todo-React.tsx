import React from 'react';
import "../App.css"


interface NoteProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const Note: React.FC<NoteProps> = ({ id, text, onDelete, onEdit }) => {
  return (
    <div className="note">
      <div className="note-text">{text}</div>
      <button className="note-delete" onClick={() => onDelete(id)}>Delete</button>
      <button className="note-edit" onClick={() => onEdit(id)}>Edit</button>
    </div>
  );
};

export default Note;
