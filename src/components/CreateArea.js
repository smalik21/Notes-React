import { useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    if (note.title === "" && note.content === "") {
      note.title = "sample title";
      note.content = "sample text";
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="CreateArea">
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take your note."
          rows="3"
        />
        <button onClick={handleClick}>
          <AddCircleRoundedIcon className="icon" />
        </button>
      </form>
    </div>
  );
}
