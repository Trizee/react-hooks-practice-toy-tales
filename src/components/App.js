import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToyData(data))
  },[])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToyData={setToyData} toyData={toyData}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} setToyData={setToyData}/>
    </>
  );
}

export default App;
