import React, { useState } from "react";
import "./kalkylatorstyle.css"; // Importera din egen CSS-fil
import MaxMin from "./MaxMin";

const Kalcylator = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operator, setOperator] = useState("add");
  const [result, setResult] = useState(0);



  const calculate = () => {
    let calculation;
    if (operator === "add") {
      calculation = value1 + value2;
    } else if (operator === "minus") {
      calculation = value1 - value2;
    } else if (operator === "delat") {
      calculation = value1 / value2;
    } else if (operator === "gångra") {
      calculation = value1 * value2;
    }
    setResult(calculation);

    setValue1(0);
    setValue2(0);
    setOperator("add");
  };

  

  return (
    <div id="kalkylator" className="fix w-full h-screen">
      
      <h1 style={{marginRight: 25, fontSize: 18, marginTop: 25 }}>Små enkla test projekt..😊</h1>
      <form>
        <h3 className="rubrik">Skriv in två tal:</h3>
        Tal 1:{" "}
        <input
          id="value1"
          type="text"
          value={value1}
          onChange={(e) => setValue1(parseInt(e.target.value) || 0)}
        />{" "}
        Tal 2:
        <input
          id="value2"
          type="text"
          value={value2}
          onChange={(e) => setValue2(parseInt(e.target.value) || 0)}
        />
        <h3>Välj operator:</h3>
        <select
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="add">Plus</option>
          <option value="minus">Minus</option>
          <option value="delat">Delat</option>
          <option value="gångra">Gångra</option>
        </select>
      </form>
      <div id="buttoncontainer">
        Tryck för att visa summan:{" "}
        <button type="button" onClick={calculate}>
          Summa
        </button>
        <div id="result">{result}</div>
      </div>
       <MaxMin/>
    </div>
  );
};

export default Kalcylator;
