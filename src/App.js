import React, { useState } from "react";

function App() {
  const [color, setcolor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3
        bg-white px-3 py-2 rounded-3xl "
        >
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 
          rounded-full text-black  shadow-lg font-bold"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("Blue")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setcolor("olive")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setcolor("Maroon")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "Maroon" }}
          >
            Maroon
          </button>
          <button
            onClick={() => setcolor("white")}
            className="outline-none px-4 py-1 
          rounded-full text-black shadow-lg font-bold"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setcolor("gray")}
            className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg font-bold"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
