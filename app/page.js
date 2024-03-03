"use client"
import React, { useRef, useState } from 'react'

const page = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lap, setLap] = useState([]);

  let timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleLap=()=>{
    if (!isRunning) return;
    const min=minutes;
    const sec=seconds;
    const mil=milliseconds;
    setLap([...lap, {min, sec, mil}]);
  }

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
    setLap([]);
  };

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 6000).toString().padStart(2, "0");
    const seconds = Math.floor((timer / 100) % 60).toString().padStart(2, "0");
    const milliseconds = (timer % 100).toString().padStart(2, "0");

    return { minutes, seconds, milliseconds };
  };

  let renderLap=lap.map((l,i)=>{
      return(
        <li key={i} className='flex flex-col py-3 text-3xl'>
          <div className='flex flex-row justify-around px-5'> 
            <div>
              <p>#{i+1}</p>
            </div>
            <div className='flex flex-row'>
              <p>{l.min}</p>
              <span>:</span>
              <p>{l.sec}</p>
              <span>:</span>
              <p>{l.mil}</p>
            </div>
          </div>
        </li> 
      );
    });

  const { minutes, seconds, milliseconds } = formatTime(timer);


  return (
    <div className='flex flex-col h-auto w-auto text-center pt-16 gap-5 text-white '>
      <div>
        <h1 className='text-7xl font-semibold'>STOPWATCH</h1>
      </div>
      <div className='clock flex mx-auto text-9xl justify-center'>
        <h1>{minutes}</h1>
        <span className='colon'>:</span>
        <h1>{seconds}</h1>
        <span className='colon'>:</span>
        <h1>{milliseconds}</h1>
      </div>
      <div className='button flex flex-row mx-auto text-3xl'>
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>PAUSE</button>
        <button onClick={handleLap}>LAP</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <hr/>
      <div>
        <h1 className='text-5xl'>LAP TIME</h1>
        <ul>
          {renderLap}
        </ul>
      </div>

    </div>
  )
}

export default page