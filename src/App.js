import React from "react";
import Average from "./Average";


const App = () => {
  return <Average />
}

export default App;


/* useEffect practice
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
*/