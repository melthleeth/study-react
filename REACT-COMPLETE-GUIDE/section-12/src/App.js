import React, { useState, useCallback } from "react";

import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const [allowToggle, setAllowToggle] = useState();

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle)
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  console.log("APP RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
