import React,{useEffect,useState} from 'react' 

export default function Counter() {
    const [estado, setCounter] = useState(0);
    useEffect(() => {
      console.log("se ejecuta el useEffect");
    }, [estado ]);
    return (
      <>
        <h2>Counter {estado}</h2>
        <button
          onClick={() => {
            setCounter(estado + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter(estado - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          reiniciar
        </button>
      </>
    );
  }