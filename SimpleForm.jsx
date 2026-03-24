import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUpdatedName(name);
    setUpdatedEmail(email);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>simple react js form</h1>
        <label>Name : </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
        <br/><br/>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/> <br/>
        <button type="submit">Submit</button>
      </form> <br/> <br/>
      <p>Name : {updatedName}</p> 
      <p>Email : {updatedEmail}</p>
    </div>
    )
}

export default App;
