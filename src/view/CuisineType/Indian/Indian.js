import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Indian.css";

function Indian() {
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
    fetch("http://localhost:4000/indian", requestOptions)
      .then((response) => response.text())
      .then((result) => setInfo(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="indian">
      <h2> Indian Main Food dishes</h2>
      <div className="indian-foods">
        {info.map((m) => (
          <div className="items" key={m.foodName}>
            <Link to={`/Indian/${m.foodName}`}>
              <img src={m.foodImage} alt="image" />
            </Link>
            <h3 className="name">{m.foodName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Indian;
