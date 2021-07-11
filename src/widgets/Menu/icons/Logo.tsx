import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 240 45" {...props}>
      <image
        width="240"
        height="45"
        href={isDark ? "/images/common/LogoTextNewDark.png" : "/images/common/LogoTextNewWhite.png"}
      />
    </Svg>
  );
};

export default Logo;
