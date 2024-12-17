import Svg, { Path } from "react-native-svg";

export default function SaveFilledSvg({ style, fill, height, width }) {
  return (
    <Svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width ? width : undefined}
      height={height ? height : undefined}
      viewBox="0 0 50 50"
    >
      <Path
        fill={fill}
        d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"
      ></Path>
    </Svg>
  );
}
