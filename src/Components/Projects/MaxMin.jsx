import React, { useState } from 'react'
import "./kalkylatorstyle.css";


const MaxMin = () => {
    const [inputMin, setInputMin] = useState("");
    const [inputMax, setInputMax] = useState("");
    const [max, setMax] = useState("");
    const [min, setMin] = useState("");

    const findmaxNumber = (numbers) => {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > max) {
            max = numbers[i];
          }
        }
        return max;
      };
    
      const handleMaxClick = () => {
        const inputNumbers = inputMax.split("").map(Number);
        const maxNumber = findmaxNumber(inputNumbers);
        setMax("Det största talet är: " + maxNumber);
        setInputMax(""); // Rensa inmatningsfältet
      };
    
      const findMinNumber = (numbers) => {
        let min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] < min) {
            min = numbers[i];
          }
        }
        return min;
      };
    
      const handleMinClick = () => {
        const inputNumbers = inputMin.split("").map(Number);
        const minNumber = findMinNumber(inputNumbers);
        setMin("Det minsta talet är: " + minNumber);
        setInputMin(""); // Rensa inmatningsfältet
      };

  return (
    <div id="maxmin" className="bg-[#0a192f] text-gray-600">
        <div className="kalk">
            <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop: 20, color: "white"}}>skriv in olika tal och hitta max och minsta numret</h1>
        <div className="max">
          <input
            type="text"
            className="numberinput"
            value={inputMax}
            onChange={(e) => setInputMax(e.target.value)}
          />
          <button id="button" onClick={handleMaxClick}>
            Visa största talet
          </button>
          <p style={{ marginLeft: 20 }}>{max}</p>
        </div>
        <div className="min">
          <input
            type="text"
            className="numberinput"
            value={inputMin}
            onChange={(e) => setInputMin(e.target.value)}
          />
          <button id="button" onClick={handleMinClick}>
            Visa minsta talet
          </button>
          <p style={{ marginLeft: 20 }}>{min}</p>
        </div>
      </div>
      
    </div>
  )
}

export default MaxMin
