import "../styles.css";
import { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";

export default function App() {
  const [list, setList] = useState([]);

  function handleClick(newNote) {
    setList((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNode(id) {
    setList((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={handleClick} />
      <div className="Notes">
        {list.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNode}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
