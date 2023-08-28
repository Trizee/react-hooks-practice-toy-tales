import React,{useEffect,useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData ,setToyData}) {

  const toyArray = toyData.map(individualToy => <ToyCard key={individualToy.name} toyData={individualToy} setToyData={setToyData} renderDelete={renderDelete}/>)
  function renderDelete(id){
    setToyData(toyData.filter(toy => toy.id !== id))
  }

  return (
    <div id="toy-collection">{toyArray}</div>
  );
}

export default ToyContainer;
