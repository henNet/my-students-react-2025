import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";

function App() {

  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    async function fetchingData() {
      var response = await fetch("https://randomuser.me/api/?results=5&nat=br&inc=name,nat,dob,picture");
    
      var data = await response.json();
      console.log(data.results);
      setStudents(data.results);
    }

    fetchingData();
  }, []);

  return (
  <>
    <Header />
    <div className="all-cards">
      {students.map((students) =>
        <Card name={students.name.first} age={students.dob.age} picture={students.picture.large}/>
      )}
    </div>
  </>
  );
}

export default App;
