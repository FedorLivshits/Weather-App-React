import React from "react";
import './App.css';
import WeatherApp from "./Components/WeatherApp";

function App() {
  return (
     <WeatherApp/>
  );
}

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = true
    if(a){
      resolve("result")
    }else{
      reject("error")
    }
  }, 3000)
} )

promise.then(
    result => {console.log("good")},
    error => {console.log("bad")}
)
console.log("me at first")

export default App;
