import React, { useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

export type Note = {
  title: string
  text: string
}
interface AddNoteProps {
  onAddNote: (note: Note) => void
}

export function AddNote({onAddNote}: AddNoteProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const note = {
      title: title,
      text: text
    }

    onAddNote(note);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FiCheckSquare />
      </div>
      <div>
        <textarea
          name="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}
