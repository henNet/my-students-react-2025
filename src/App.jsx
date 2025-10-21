import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import { Riple } from "react-loading-indicators";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Função que é chamada ao final da renderização do componente */
  useEffect(() => {
    async function fetchData() {
      var response = await fetch(
        "https://randomuser.me/api/?results=1500&nat=br&inc=name,dob,picture"
      );

      var data = await response.json();
      console.log(data.results);
      setStudents(data.results);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading == true) {
    return (
      <div>
        {/* import { Riple } from "react-loading-indicators"; */}
        <Riple color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="all-cards">
        {students.map((student) => (
          <Card
            name={student.name.first}
            age={student.dob.age}
            picture={student.picture.large}
          />
        ))}
        {/* <Card name="Ana Paula" age="22" />
        <Card name="Lais da Silva" age="21" />
        <Card name="Bruno Alex" age="23" /> */}
      </div>
    </>
  );
}

export default App;
