import { useState } from "react";
import "./App.css";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="togglebtn"
      >
        {show ? "go to student list" : "Add a new student"}
      </button>
      {show ? <AddStudent /> : null}
      {show ? null : <ShowStudents />}

      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
