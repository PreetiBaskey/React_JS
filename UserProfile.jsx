import React, {useState} from "react";

function App() {
  const [name, setName] = useState("Sumitra");
  const [mark, setMark] = useState(100);
  
  const handleName = () => {
    setName("Preeti");
  }
  
  const handleMark = () => {
    setMark(mark + 1);
  }
  
  return (
      <div>
        <h1>used profile demo</h1>
        <p>update name : {name}, updated mark : {mark}</p>
        <button onClick={handleName}>change name</button>
        <button onClick={handleMark}>change mark</button>
      </div>
    )
}

export default App;
