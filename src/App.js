import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    let words = text.trim().split(/\s+/);
    return words.length;
  };

  let wordCount = countWords(text); // Move this line inside the component

  return (
    <>
      <div className="container">
        <h1>Responsive Paragraph word counter</h1>
        <textarea
          value={text}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Enter text here..."
        />
        <p>Word count: {wordCount}</p>
      </div>
    </>
  );
}

export default App;

