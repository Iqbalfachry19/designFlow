'use client';

import { useState, MouseEvent, useEffect, useRef } from 'react';
import Rectangle from './Rectangle';
import { useFigmaStore } from '@/store/figmaStore';

function Canvas() {
  const [rectangles, setRectangles] = useState<{ x: number; y: number }[]>([]);
  const activeIndex = useFigmaStore((state: any) => state.activeIndex);
  const [selectedRectangleIndex, setSelectedRectangleIndex] = useState<
    number | null
  >(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const handleRectangleClick = (index: number) => {
    if (activeIndex === 1) {
      if (selectedRectangleIndex === index) {
        // Clicked on the currently selected rectangle, do nothing
        return;
      } else {
        // Clicked on a different rectangle, select it
        setSelectedRectangleIndex(index);
        return;
      }
    }
  };
  const handleCanvasClick = (event: MouseEvent<HTMLDivElement>) => {
    if (activeIndex === 1) {
      if (selectedRectangleIndex !== null) {
        const clickedRectangleIndex = rectangles.findIndex(
          (_, index) => index === selectedRectangleIndex,
        );

        if (
          clickedRectangleIndex === -1 ||
          event.target === canvasRef.current
        ) {
          // Clicked outside the selected rectangle or on the canvas background, remove the blue border

          setSelectedRectangleIndex(null);
        }
      }
      return;
    }
    if (activeIndex === 3) {
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
        setSelectedRectangleIndex(rectangles.length);
        useFigmaStore.setState({ activeIndex: 1 });
      }
    }
  };

  const getCanvasCursor = () => {
    return activeIndex === 3 ? 'crosshair' : 'url(/figmacursor.svg), auto';
  };
  return (
    <div className="relative">
      <div
        ref={canvasRef}
        className="bg-[#1e1e1e] z-0 h-screen"
        style={{ cursor: getCanvasCursor() }}
        onClick={handleCanvasClick}
      >
        {rectangles.map((rectangle, index) => (
          <Rectangle
            key={index}
            style={{
              position: 'absolute',
              left: `${rectangle.x}px`,
              top: `${rectangle.y}px`,
              border:
                selectedRectangleIndex === index ? '2px solid blue' : 'none',
            }}
            onClick={() => handleRectangleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
