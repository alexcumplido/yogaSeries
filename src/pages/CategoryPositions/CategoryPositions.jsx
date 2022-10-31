import { useLocation, Link } from "react-router-dom";
import { PositionSvg } from "../../components/PositionSvg/PosistionSvg.js";

export function CategoryPositions() {
  let location = useLocation();
  let listItems =
    location.state.yoga_poses &&
    location.state.yoga_poses.map((element, idx) => {
      return (
        <li className="link__item__poses" key={idx}>
          <PositionSvg id={element.id} />
          {element.sanskrit_name}
        </li>
      );
    });

  return (
    <>
      <div className="category__description">
        <h3>{location.state.name}</h3>
        <p>{location.state.description}</p>
        <Link to={`/serie`} state={location.state.yoga_poses}>
          {" "}
          Start serie{" "}
        </Link>
      </div>

      <ul className="list__links__poses">{listItems}</ul>
    </>
  );
}
