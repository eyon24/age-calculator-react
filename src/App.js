import { useState } from "react";
import icon from "./icon-arrow.svg";
import "./App.css";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "day") {
      setDay(e.target.value);
    }
    if (e.target.name == "month") {
      setMonth(e.target.value);
    }
    if (e.target.name == "year") {
      setYear(e.target.value);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="date">
          <form className="date__input">
            <label>DAY</label>
            <input
              type="text"
              name="day"
              value={day}
              pattern="[0-9]*"
              placeholder="DD"
              maxLength={2}
              onChange={handleChange}
            />
          </form>
          <div className="date__input">
            <label>MONTH</label>
            <input
              type="text"
              name="month"
              value={month}
              placeholder="MM"
              maxLength={2}
              onChange={handleChange}
            />
          </div>
          <div className="date__input">
            <label>YEAR</label>
            <input
              type="text"
              name="year"
              value={year}
              placeholder="YYYY"
              maxLength={4}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="divider">
          <div className="line"></div>
          <div className="icon__container">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="time">
          <span>years</span>
          <span>months</span>
          <span>days</span>
        </div>
      </div>
    </div>
  );
}

export default App;
