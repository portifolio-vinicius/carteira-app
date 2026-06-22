import Svg, { Path, Polygon, Circle, Text as SvgText, G } from "react-native-svg";
import { colors } from "../../config/tokens";

export function LogoSvg({ size = 50 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 1000 1000">
      <G transform="translate(500, 500)">
        <Path
          fill={colors.successGreen}
          d="M -131,-342 
             A 365,365 0 0,0 -347,-114
             A 365,365 0 0,0 -344,124 
             L -301,84 
             A 310,310 0 0,1 -303,-97
             A 310,310 0 0,1 -121,-291 
             Z"
        />
        <Polygon
          fill={colors.successGreen}
          points="-301,84 -400,125 -325,-1"
        />

        <Path
          fill={colors.successGreen}
          d="M 131,342 
             A 365,365 0 0,0 347,114
             A 365,365 0 0,0 344,-124 
             L 301,-84 
             A 310,310 0 0,1 303,97
             A 310,310 0 0,1 121,291 
             Z"
        />
        <Polygon
          fill={colors.successGreen}
          points="301,-84 400,-125 325,1"
        />

        <Circle cx="0" cy="0" r="230" fill="#F4C400" />
        <Circle cx="0" cy="0" r="212" fill="#FFD924" />
        <Circle cx="0" cy="0" r="185" fill="#E5A900" />
        <Circle cx="0" cy="0" r="176" fill="#FFE246" />
        <Path fill="#E5A900" d="M 0,-176 A 176,176 0 0,1 0,176 Z" />
        <Circle cx="0" cy="0" r="148" fill="#FFE246" />

        <SvgText x="0" y="5" fill="#D69700" fontFamily="Arial" fontWeight="900" fontSize="200" textAnchor="middle">
          $
        </SvgText>
      </G>
    </Svg>
  );
}
