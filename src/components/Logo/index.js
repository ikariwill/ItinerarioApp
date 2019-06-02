import React from 'react';
import Svg, {
  G, Text, TSpan, Ellipse, Path,
} from 'react-native-svg';

const Logo = props => (
  <Svg width="1em" height="1em" viewBox="0 0 217 41" {...props}>
    <G data-name="Group 30">
      <Text
        data-name="Itiner\xE1rio Cotia"
        transform="translate(130 31)"
        fill="#af81ff"
        fontSize={26}
        fontFamily="Roboto-Medium, Roboto"
        fontWeight={500}
      >
        <TSpan x={-86.404} y={0}>
          {'Itiner\xE1rio Cotia'}
        </TSpan>
      </Text>
      <G data-name="placeholder (1)">
        <Ellipse
          data-name="Ellipse 1"
          cx={20.5}
          cy={5.655}
          rx={20.5}
          ry={5.655}
          transform="translate(0 29.69)"
          fill="#282727"
        />
        <Path
          data-name="Path 1"
          d="M29.46 3.764a12.85 12.85 0 0 0-18.171 0c-4.522 4.521-5.03 13.036-1.194 18.15l10.284 14.845 10.274-14.845C34.49 16.8 33.979 8.285 29.46 3.764zm-8.961 13.2a4.241 4.241 0 1 1 4.241-4.241 4.241 4.241 0 0 1-4.24 4.243z"
          fill="#af81ff"
        />
      </G>
    </G>
  </Svg>
);

export default Logo;
