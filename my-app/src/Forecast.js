import React from "react";

export default function Forecast() {
  let tempHigh = `Temperature is 96℉`;
  let tempLow = `Temperature is 25℉`;
  return (
    <div className="col-12">
      <ul>
        <li>Future Forecast Days</li>
        <li>{tempHigh}</li>
        <li>{tempLow}</li>
        <li>Image</li>
      </ul>
    </div>
  );
}
