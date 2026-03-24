import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  
  return (
      <div>
        <input type="input" value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <p>hello : {name || "Guest"}</p>
      </div>
    )
}

export default App;
