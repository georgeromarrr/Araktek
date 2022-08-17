import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  const showDate = new Date();
  const showDateToday = showDate.toDateString();
  const showTime = dateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const showDateTime = showDateToday + " " + showTime;

  useEffect(() => {
    setInterval(() => {
      const dateToday = new Date();
      setDateTime(dateToday);
    }, 1000);
  }, []);
  return (
    <div className="my-3 mx-1">
      <p className="p-3 bg-inherit rounded-md shadow-lg text-center bg-gray-200 ">
        {showDateTime}
      </p>
    </div>
  );
};

export default DateTime;
