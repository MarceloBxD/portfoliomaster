import React from "react";

type IconProps = {
  fill?: string;
};

const HamburgerIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" height="3em" width="3em">
      <path
        fill={fill}
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12 21h40M12 33h40M12 45h40"
      />
    </svg>
  );
};

export default HamburgerIcon;
