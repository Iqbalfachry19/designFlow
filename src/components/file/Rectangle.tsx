import React, { CSSProperties } from 'react';

interface RectangleProps {
  style?: CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Rectangle: React.FC<RectangleProps> = ({
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="z-10 border"
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#d9d9d9',
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default Rectangle;
