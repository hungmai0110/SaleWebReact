import React, {useEffect, useState} from "react";

function CountDown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

    // Get today's date and time
    let now = new Date().getTime();

    let interval = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(`0${hours}`.slice(-2));
      setMinutes(`0${minutes}`.slice(-2));
      setSeconds(`0${seconds}`.slice(-2));

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="timer d-flex justify-content-between text-white">
      <div className="day bg-dark text-center rounded">
        <p>{days}</p>
        <p>Ngày</p>
      </div>
      <div className="hour bg-dark text-center rounded">
        <p>{hours}</p>
        <p>Giờ</p>
      </div>
      <div className="minute bg-dark text-center rounded">
        <p>{minutes}</p>
        <p>Phút</p>
      </div>
      <div className="second bg-dark text-center rounded">
        <p>{seconds}</p>
        <p>Giây</p>
      </div>
    </div>
  );
}

export default CountDown;
