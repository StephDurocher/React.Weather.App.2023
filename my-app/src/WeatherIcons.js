import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {};

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="red"
      size={26}
      animate={true}
    />
  );
}
