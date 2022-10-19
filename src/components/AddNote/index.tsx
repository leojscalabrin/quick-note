import { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

export function AddNote() {
  const [title, setTitle] = useState("");

  return (
    <div>
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
        <textarea name="text"></textarea>
      </div>
    </div>
  );
}
