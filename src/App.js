import React, { useState } from "react";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => {setVisible(!visible)}}>{visible ? "Hide" : "Show"}</button>
      <hr />
      {visible && <Info />}
    </>
  );
}

export default App;
