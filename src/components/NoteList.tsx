import React from 'react'
import Note from './Note'
import '../App.css'

interface NoteListProps {
  notes: { id: string; text: string }[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete, onEdit }) => {
  return (
    <div className='note-list'>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default NoteList
