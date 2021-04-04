import React, { useState } from "react";

function Note({ note, key }) {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const itemClasses = checked
    ? "col col-sm-6 col-lg-3 item checked"
    : "col col-sm-6 col-lg-3 item";
  console.log(note.note);
  return (
    <article className={itemClasses} key={key}>
      {!isDown && (
        <div className="item-cover">
          <a href="#" onClick={() => setIsDown(!isDown)}>
            {note.title}
          </a>
        </div>
      )}
      <div className="item-title">
        <input type="text" defaultValue={note.title} />
      </div>
      <div className="item-content">
        <textarea defaultValue={note.content} />
      </div>
      <div className="d-flex gap-2 mt-2">
        <button
          type="button"
          className="btn btn-sm btn-light btn-hover d-flex align-items-center close-details"
          onClick={() => setIsDown(!isDown)}
        >
          <i className="material-icons"> arrow_back </i>
        </button>

        <button
          className="btn btn-sm btn-light btn-hover d-flex align-items-center check-btn check-action"
          onClick={() => setChecked(true)}
        >
          <i className="material-icons"> check_circle_outline </i>
        </button>
      </div>
      <svg className="svg-check" x="0px" y="0px" viewBox="0 0 135 110">
        <rect
          className="box"
          x="5"
          y="5"
          width="100"
          height="100"
          transform="rotate(90 55 55)"
        />
        <path className="check" d="M126.8,14L55.7,85.1L29.2,63.4" />
      </svg>
    </article>
  );
}

export default Note;
