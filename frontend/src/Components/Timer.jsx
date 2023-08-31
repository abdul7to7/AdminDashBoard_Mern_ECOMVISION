import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <>
      Please wait free hosting might take some time to load data approx-:
      {seconds} seconds
    </>
  );
}

export default Timer;
