import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="all-cards">
        <Card name="Ana Paula" age="22" />
        <Card name="Lais da Silva" age="21" />
        <Card name="Bruno Alex" age="23" />
      </div>
    </>
  );
}

export default App;
