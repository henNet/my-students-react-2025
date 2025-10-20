import Button from "../button/Button";
import "./Card.css";
import likeImg from "../../assets/like.svg";
import dislikeImg from "../../assets/dislike.svg";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img src={props.picture} />
        <span>{props.name}</span>
        <span>{props.age}</span>
        <div className="btn-container">
          <Button status={likeImg} color="G" />
          <Button status={dislikeImg} color="R" />
        </div>
      </div>
    </>
  );
}

export default Card;
