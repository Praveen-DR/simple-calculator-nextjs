"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0","C","=","+",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="bg-slate-700 p-6 rounded-lg shadow-md w-80 border-2">
        <h1 className="text-2xl font-bold text-center mb-4 text-yellow-400">Calculator</h1>
        <input
          className="w-full p-2 mb-4 text-right border rounded bg-amber-50"
          type="text"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-yellow-500 text-white p-4 rounded hover:bg-red-600 transition"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
