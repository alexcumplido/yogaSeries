import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Categories() {
  const [response, setResponse] = useState();

  function getCategories() {
    // getCategories({ ...categoryPoses });
    // console.log("hello");
    fetch("https://yoga-api-nzy4.onrender.com/api/yoga/categories")
      .then((response) => response.json())
      .then((result) => setResponse([...result]))
      .catch((error) => console.log(error));
  }

  let list =
    response !== undefined &&
    response.map((element, idx) => {
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
    getCategories();
    // getPoses();
    // async function getPoses() {
    //   console.log(homePoses);
    // }
  }, []);

  return <ul className="list__links">{list}</ul>;
}
