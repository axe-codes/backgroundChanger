import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 h-96"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row justify-center gap-2 m-3 bg-cyan-200 h-8 w-full rounded-3xl">
        <button
          type="button"
          className="rounded-3xl m-1 bg-black px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black h-6"
          onClick={() => setColor("black")}
        >
          black
        </button>
        <button
          type="button"
          className="rounded-3xl m-1 bg-yellow-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 h-6"
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          type="button"
          className="rounded-3xl m-1 bg-red-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 h-6"
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          type="button"
          className="rounded-3xl m-1 bg-green-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 h-6"
          onClick={() => setColor("green")}
        >
          green
        </button>
      </div>
    </div>
  );
}

export default App;
