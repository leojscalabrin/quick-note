import { useEffect, useState } from "react";
import { AddNote, Note } from "../../components/AddNote";
import { NotesList } from "../../components/NotesList";

function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleAddNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <div>
      <AddNote onAddNote={handleAddNote} />
      <NotesList notes={notes}/>
    </div>
  );
}

export { Home };
