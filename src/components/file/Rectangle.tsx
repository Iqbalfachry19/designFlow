import React, { CSSProperties } from 'react';
interface RectangleProps {
  style?: CSSProperties;
}
const Rectangle: React.FC<RectangleProps> = ({ style }) => {
  return (
    <div
      className="z-10 border"
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#d9d9d9',
        ...style,
      }}
    />
  );
};

export default Rectangle;
