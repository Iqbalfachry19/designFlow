'use client';

import { useState, MouseEvent } from 'react';
import Rectangle from './Rectangle';

function Canvas() {
  const [rectangles, setRectangles] = useState<{ x: number; y: number }[]>([]);

  const handleCanvasClick = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    const canvasRect = event.currentTarget.getBoundingClientRect();
    const offsetX = clientX - canvasRect.left;
    const offsetY = clientY - canvasRect.top;
    // Check if the new rectangle intersects with any existing rectangles
    const intersects = rectangles.some((rectangle) => {
      const xOverlap = Math.abs(offsetX - rectangle.x) < 100; // rectangle width is 100px
      const yOverlap = Math.abs(offsetY - rectangle.y) < 100; // rectangle height is 100px
      return xOverlap && yOverlap;
    });

    if (!intersects) {
      const newRectangle = {
        x: offsetX - 50,
        y: offsetY - 50,
      };
      setRectangles([...rectangles, newRectangle]);
    }
  };

  return (
    <div className="relative">
      <div
        className="bg-[#1e1e1e] z-0 h-screen cursor-crosshair"
        onClick={handleCanvasClick}
      >
        {rectangles.map((rectangle, index) => (
          <Rectangle
            key={index}
            style={{
              position: 'absolute',
              left: `${rectangle.x}px`,
              top: `${rectangle.y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
