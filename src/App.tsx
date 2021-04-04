import React, { useState } from "react";
import "./css/App.css";
// import { Slide } from "react-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState<any>([
    { title: "Do homework", content: "" },
    { title: "Call hausmeister", content: "" },
    { title: "Make Hapflichtversicherung", content: "" },
  ]);

  return (
    <div className="App">
      <header className="bg-light py-3 mb-3 border-bottom">
        <div
          className="container d-grid gap-3 align-items-center"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <a className="brand-logo" href="#">
            Logo
          </a>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>

      <div className="wrapper container-fluid">
        <div className="row px-3 content-wrap">
          {notes.map((note, key) => {
            return <Note note={note} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
