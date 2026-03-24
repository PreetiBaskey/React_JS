import React, {useState} from "react";

function App() {
  const [student, setStudent] = useState({
    name: "Preeti",
    grade: "A",
    city: "Delhi"
  });
  
  const handleCity = () => {
    setStudent({...student, city: "Sydney"});
  }
  
  return (
      <div>
        <h1>student data  demo</h1>   
        <p>student details:
        </p>
        <p>Name : {student.name}</p>
        <p>Grade: {student.grade}</p>
        <p>City: {student.city}</p>
        <button onClick={handleCity}>change city</button>
      </div>
    )
}

export default App;
