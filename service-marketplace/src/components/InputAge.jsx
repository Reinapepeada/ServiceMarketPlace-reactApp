import React, { useState, useEffect } from "react";

export default function Input() {
    const [edad, setEdad] = useState(0);
    let actual = edad;
    useEffect(() => {
      console.log("se ejecuta el useEffect");
    }, []);
  
    return (
      <div>
        <h2>Input de prueba + {edad} </h2>
        <div>
          <input
            onChange={(e) => {
              actual = e.target.value;
            }}
          ></input>
          <button
            onClick={() => {
              setEdad(actual);
            }}
          >
            guardar
          </button>
        </div>
      </div>
    );
  }