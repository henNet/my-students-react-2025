import Button from "../button/Button";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src="" />
        <span>{props.name}</span>
        <span>{props.age}</span>
        <Button status="Like"/>
        <Button status="DisLike"/>
      </div>
    </>
  );
}

export default Card;
