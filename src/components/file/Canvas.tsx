"use client";

import { useState, MouseEvent, useEffect, useRef } from "react";
import Rectangle from "./Rectangle";
import { useDesignFlowStore } from "@/store/designFlowStore";

function Canvas() {
  const [rectangles, setRectangles] = useState<{ x: number; y: number }[]>([]);
  const activeIndex = useDesignFlowStore((state: any) => state.activeIndex);
  const [selectedRectangleIndex, setSelectedRectangleIndex] = useState<
    number | null
  >(null);
  const [hoveredRectangleIndex, setHoveredRectangleIndex] = useState<
    number | null
  >(null);
  const handleRectangleHover = (index: number) => {
    if (activeIndex === 1) {
      if (hoveredRectangleIndex === index) {
        // Already hovering over the rectangle, do nothing
        return;
      } else {
        // Hovering over a different rectangle, update the hovered rectangle index
        setHoveredRectangleIndex(index);
      }
    }
  };

  const handleRectangleLeave = () => {
    if (activeIndex === 1) {
      // Stop hovering over the rectangle, clear the hovered rectangle index
      setHoveredRectangleIndex(null);
    }
  };
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
          (_, index) => index === selectedRectangleIndex
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
        useDesignFlowStore.setState({ activeIndex: 1 });
      }
    }
  };

  const getCanvasCursor = () => {
    return activeIndex === 3 ? "crosshair" : "url(/designflowcursor.svg), auto";
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
              position: "absolute",
              left: `${rectangle.x}px`,
              top: `${rectangle.y}px`,
              border:
                selectedRectangleIndex === index ||
                hoveredRectangleIndex === index
                  ? "3px solid #0c8ce9"
                  : "none",
            }}
            onClick={() => handleRectangleClick(index)}
            onMouseEnter={() => handleRectangleHover(index)}
            onMouseLeave={handleRectangleLeave}
          />
        ))}
      </div>
    </div>
  );
}

export default Canvas;
