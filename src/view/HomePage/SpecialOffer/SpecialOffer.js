import { Link } from "react-router-dom";
import "./SpecialOffer.css";

function SpecialOffer() {
  return (
    <div className="special-offer">
      <h1 className="today-special"> Today Special Food </h1>
      <div className="special-dish">
        <Link to="/special-offer">
          <div className="special-dish image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SkBNl2EL2cYT4C_BjAFJJ8dPwqiqIaAlqQ&usqp=CAU"
              alt="special-dish"
            />
          </div>
        </Link>
        <div className="special-dish name"> Chicken Briyani</div>
      </div>
    </div>
  );
}

export default SpecialOffer;
