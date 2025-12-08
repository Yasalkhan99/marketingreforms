"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

// Random start position anywhere around the edges
const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;
  switch (side) {
    case 0: // top
      return { x: offset, y: 0 };
    case 1: // right
      return { x: window.innerWidth, y: offset };
    case 2: // bottom
      return { x: offset, y: window.innerHeight };
    case 3: // left
      return { x: 0, y: offset };
    default:
      return { x: 0, y: 0 };
  }
};

// Generate a random angle in degrees (0–360)
const getRandomAngle = () => Math.random() * 360;

export const ShootingStars = ({
  starColor = "#ffffffff",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  starsCount,
  minSpeed = 10,
  maxSpeed = 20,
  className,
}) => {
  const [stars, setStars] = useState([]);
  const svgRef = useRef(null);

  // Initialize stars
  useEffect(() => {
    const initialStars = Array.from({ length: starsCount }).map(() => {
      const { x, y } = getRandomStartPoint();
      return {
        id: Math.random(),
        x,
        y,
        angle: getRandomAngle(), // ⭐ random direction
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
        scale: 1,
      };
    });
    setStars(initialStars);
  }, [starsCount, minSpeed, maxSpeed]);

  // Animate stars
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
          let newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
          let newDistance = star.distance + star.speed;
          let newScale = 1 + newDistance / 100;

          // Respawn star if it leaves the viewport
          if (newX < -50 || newX > window.innerWidth + 50 || newY < -50 || newY > window.innerHeight + 50) {
            const { x, y } = getRandomStartPoint();
            return {
              ...star,
              x,
              y,
              angle: getRandomAngle(), // new random direction
              distance: 0,
              scale: 1,
              speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
            };
          }

          return { ...star, x: newX, y: newY, distance: newDistance, scale: newScale };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [minSpeed, maxSpeed]);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
