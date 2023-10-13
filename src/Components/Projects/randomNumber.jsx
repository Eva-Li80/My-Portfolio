import React, { useState } from 'react';

function RandomNumber() {
  const [randomSiffra, setRandomSiffra] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function reloadRandomNumber() {
    const newRandomSiffra = generateRandomNumber();
    setRandomSiffra(newRandomSiffra);
  }

  return (
    <div className='randomcontainer'>
        <h2>Få ett random nummer mellan 1-100</h2>
      <p className="random">{randomSiffra}</p>
      <button className='ladda' onClick={reloadRandomNumber}>Nytt nummer</button>
    </div>
  );
}

export default RandomNumber;
