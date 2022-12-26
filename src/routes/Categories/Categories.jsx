import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import categoryPoses from "../../assets/dataCategories.json";

export function Categories() {
  const [response, setResponse] = useState();

  function getPostures() {
    setResponse({ ...categoryPoses });
    console.log("hello");
    // fetch("../../assets/dataCategories.json")
    //   .then((response) => response.json())
    //   .then((result) => setResponse({ ...result }))
    //   .catch((error) => console.log(error));
  }

  let list =
    response &&
    response.items.map((element, idx) => {
      return (
        <Link to={`/categoryPositions`} state={element} key={idx}>
          <li className="link__item" key={idx}>
            <p className="category__name"> {element.name} </p>
            <p className="category__quantity">
              {element.yoga_poses.length} poses
            </p>
          </li>
        </Link>
      );
    });

  useEffect(() => {
    getPostures();
    // getPoses();
    // async function getPoses() {
    //   console.log(homePoses);
    // }
  }, []);

  return <ul className="list__links">{list}</ul>;
}
