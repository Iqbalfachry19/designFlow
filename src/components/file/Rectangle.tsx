import React from 'react';

const Rectangle = ({ style }) => {
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
