import React from "react";
import ReducerInfo from "./ReducerInfo";


const App = () => {
  return <ReducerInfo />
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