import { useEffect, useState } from "react";
import { PositionSvg } from "../../components/PositionSvg/PosistionSvg.jsx";
import { Link } from "react-router-dom";

export function CustomSerie() {
  const [response, setResponse] = useState();
  const [customSerie, setCustomSerie] = useState([]);
  const [nameToStorage, setNameToStorage] = useState({
    nameStorage: "",
  });

  const [nameToRetrieve, setNameToRetrieve] = useState({
    nameRetrieve: "",
  });

  const onChangeNameToStorage = (event) => {
    setNameToStorage({
      [event.target.id]: event.target.value,
    });
  };

  const onChangeNameToRetrieve = (event) => {
    setNameToRetrieve({
      [event.target.id]: event.target.value,
    });
  };

  function fetchResponse() {
    fetch("https://yoga-api-nzy4.onrender.com/api/yoga/poses")
      .then((response) => response.json())
      .then((result) => setResponse([...result]))
      .catch((error) => console.log(error));
  }

  function addPosition(id) {
    let item = response.items.find((element) => element.id === id);
    setCustomSerie((customSerie) => [...customSerie, item]);
  }

  function removePosition(id) {
    let items = customSerie.filter((element) => element.id !== id);
    setCustomSerie(items);
  }

  function storageCustomSerie() {
    window.localStorage.setItem(
      nameToStorage.nameStorage,
      JSON.stringify(customSerie)
    );
    setCustomSerie([]);
  }

  function retrieveCustomSerie() {
    if (window.localStorage.getItem(nameToRetrieve.nameRetrieve)) {
      setCustomSerie(
        JSON.parse(window.localStorage.getItem(nameToRetrieve.nameRetrieve))
      );
      alert("Serie loaded");
    }
  }

  let listItems =
    response !== undefined &&
    response.map((element, idx) => {
      return (
        <li className="link__item__custom" key={idx}>
          <PositionSvg id={element.id} />
          {element.sanskrit_name}
          <div className="pose__btn__wrapper">
            <button onClick={() => addPosition(element.id)}>+</button>
            <button onClick={() => removePosition(element.id)}>-</button>
          </div>
        </li>
      );
    });

  console.log(response);
  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <div>
      <div className="wrapper__search">
        <div className="storage">
          <input
            className="input"
            type="text"
            id="nameStorage"
            value={nameToStorage.nameStorage}
            onChange={onChangeNameToStorage}
            placeholder="New serie name"
            required
            minLength="4"
          />
          <button
            onClick={() => {
              if (nameToStorage.nameStorage && customSerie.length !== 0) {
                storageCustomSerie();
                alert("Serie saved");
              }
            }}
          >
            Save
          </button>
        </div>

        <div className="retrieve">
          <input
            className="input"
            type="text"
            id="nameRetrieve"
            value={nameToRetrieve.nameRetrieve}
            onChange={onChangeNameToRetrieve}
            placeholder="Serie to load"
            required
            minLength="4"
          />
          <button onClick={() => retrieveCustomSerie()}>Load</button>
        </div>
        <Link
          to={customSerie.length > 0 ? `/serie` : "/customSerie"}
          state={customSerie}
        >
          {" "}
          Start serie{" "}
        </Link>
      </div>
      <ul className="list__links__custom">{listItems}</ul>
    </div>
  );
}
