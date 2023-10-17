import React, { useState } from "react";
import "./kalkylatorstyle.css";
import RandomNumber from "./randomNumber";

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
    <div id="maxmin" className="bg-[#eae2d8] text-gray-600">
      <RandomNumber />
    </div>
  );
};

export default MaxMin;
