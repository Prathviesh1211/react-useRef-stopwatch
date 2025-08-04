import React, { useRef, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);
  const [isRunning,setIsRunning]=useState(false);

  const startTimer = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setIsRunning(false)
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime(0);
    setIsRunning(false)
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Helper to pad single-digit numbers with a leading zero
    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 p-4">
      <div className="bg-zinc-500 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-100">Stopwatch</h2>
        <h1 className="text-6xl font-mono mb-8 text-center text-gray-100">{formatTime(time)}</h1>
        <div className="flex space-x-4">
          <button
            onClick={startTimer}
            disabled={isRunning}
            className="px-6 py-3 rounded-md bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            disabled={!isRunning}
            className="px-6 py-3 rounded-md bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
