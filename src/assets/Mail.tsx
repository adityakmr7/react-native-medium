import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Mail() {
  return (
    <Svg width={25} height={25} viewBox="0 0 64 64">
      <Path
        fill="black"
        stroke="black"
        d="M64 12H0v39h64V12zm-4.395 2L32 31.81 4.395 14h55.21zM2 49V14.835L32 34.19l30-19.355V49H2z"
      />
    </Svg>
  );
}

export default Mail;
