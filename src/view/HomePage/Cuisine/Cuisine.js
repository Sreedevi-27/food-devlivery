import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cuisine.css";

function Cuisine() {
  const [info, setInfo] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append(
    "token",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJST0xFIjoiVFVUT1IiLCJpc3MiOiJhdXRoMCJ9.r_MkoxBJAMCjbaszMZnpDJi8GVujjs0hWfnifsaOAUE"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    mode: "cors",
    credentials: "include",
  };

  useEffect(function () {
    fetch("http://localhost:4000/cuisine", requestOptions)
      .then((response) => response.text())
      .then((result) => setInfo(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="cuisine">
      <h2> Our Cuisine</h2>
      <div className="cuisine-items">
        {info.map((m) => (
          <div className="items" key={m.name}>
            <Link to={`/${m.name}`}>
              <img src={m.link} alt={m.name} />
            </Link>
            <h3 className="name">{m.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuisine;
