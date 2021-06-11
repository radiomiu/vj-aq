import React, {useState} from "react";

export default function SelectableUnit(props) {
  
  let noInfo = {
    name: "No city is selected",
    aqi: "No data is available",
    cigg: false
  };
  
  let data = props.props ? props.props : noInfo;

  const { name, aqi, cigg } = data;
  
  return (
    <div className="m-3 w-full h-full text-md text-bold text-left pt-2">
      <p className="py-2">City: {name}</p>
      <p className="pb-2">AQI: {aqi}</p>
      <p className={`${cigg ? "cig" : ""} cig-${cigg ? cigg : 0}`} id={`selected-city_${name}`}>
        { cigg ? "" : "You didn't smoke any cigarettes so far!"} </p>
    </div>
  )
}