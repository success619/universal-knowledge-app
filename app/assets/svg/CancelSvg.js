import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function CancelSvg({ fill, style }) {
  return (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <Path
        fill={fill}
        d="M5.5 4 L9 7.5 12.5 4 14 5.5 10.5 9 14 12.5 12.5 14 9 10.5 5.5 14 4 12.5 7.5 9 4 5.5 Z"
      />
    </Svg>
  );
}
