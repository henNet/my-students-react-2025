import "./Button.css";

export default function Button(props) {
  function makeAlert() {
    alert("Cliquei aqui ...");
  }

  return (
    <div>
      <button onClick={makeAlert}>{props.status}</button>
      <span>20</span>
    </div>
  );
}
