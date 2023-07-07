import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "./CountdownFunction";
import CountdownView from "./CountdownView";
import "animate.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <CountdownView
        waktu={timeLeft[interval]}
        interval={interval}
        key={index}
      />
    );
  });
  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max animate__animated animate__slideInUp animate__slower">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <CountdownView waktu={0} interval={0} />
        )}
      </div>
    </>
  );
}

export default Countdown;
