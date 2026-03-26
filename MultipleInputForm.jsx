import React, { useState } from "react";

function App() {
  
  const [formData, setFormData] = useState({name: "", email: "", marks: 0});
  const [showData, setShowData] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(formData);
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Multiple input form</h1>
        <input
          name="name"
          type="text" 
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br/>
        <input
          name="email"
          type="email" 
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br/>
        <input
          name="marks"
          type="number" 
          placeholder="Marks"
          value={formData.marks}
          onChange={handleChange}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
      <p>
        helllooo {showData.name}
      </p>
    </div>
    )
}

export default App;
