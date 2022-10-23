import { useEffect, useState } from "react";
import { AddNote, Note } from "../../components/AddNote";

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
    </div>
  );
}

export { Home };
