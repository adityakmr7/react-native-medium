import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function FaceBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={25} height={25} viewBox="0 0 48 48">
      <Path
        d="M25.638 48H2.65a2.65 2.65 0 01-2.649-2.65V2.65A2.649 2.649 0 012.651 0h42.701a2.649 2.649 0 012.649 2.65v42.7A2.65 2.65 0 0145.352 48H33.12V29.412h6.24l.934-7.244H33.12v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48z"
        fill="#4460A0"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default FaceBook;
