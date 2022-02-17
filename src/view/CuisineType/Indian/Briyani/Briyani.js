import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Briyani.css";

function Briyani() {
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
    fetch("http://localhost:4000/indian/briyani", requestOptions)
      .then((response) => response.text())
      .then((result) => setInfo(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="briyani">
      <h2> Briyani </h2>
      <div className="briyani-items">
        {info.map((m) => (
          <div className="items" key={m.name}>
            <img src={m.image} alt={m.name} />
            <h4 className="name">{m.name}</h4>
            <h5 className="price"> Price : {m.price} </h5>
            <h5 className="rating"> Rating : {m.rating}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Briyani;
