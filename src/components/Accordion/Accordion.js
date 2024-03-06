import React, { useState } from "react";
import data from "./AccordionData";


const Accordion = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const toggleSelection = (id) => {
    if (enableMultiSelection) {
      setSelected((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id)
          : [...prevSelected, id]
      );
    } else {
      setSelected((prevSelected) => (prevSelected[0] === id ? [] : [id]));
    }
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={() => toggleSelection(item.id)}
                className={`title ${selected.includes(item.id) ? "active" : ""}`}
              >
                <h4>{item.question}</h4>
                <span>+</span>
              </div>
              {selected.includes(item.id) && (
                <div className="content">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
