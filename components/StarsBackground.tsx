"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationType: number;
  brightness: "bright" | "medium" | "dim";
  color: string;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
}

export const StarsBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starColors = [
        "#ffffff", // white
        "#f0f8ff", // alice blue
        "#e6f3ff", // light blue
        "#fffacd", // lemon chiffon
        "#ffe4e1", // misty rose
      ];

      for (let i = 0; i < 150; i++) {
        const brightness =
          Math.random() < 0.1
            ? "bright"
            : Math.random() < 0.3
              ? "medium"
              : "dim";
        const size =
          brightness === "bright"
            ? Math.random() * 3 + 2
            : brightness === "medium"
              ? Math.random() * 2 + 1.5
              : Math.random() * 1.5 + 1;

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size,
          opacity:
            brightness === "bright"
              ? Math.random() * 0.3 + 0.7
              : brightness === "medium"
                ? Math.random() * 0.4 + 0.4
                : Math.random() * 0.5 + 0.2,
          animationDelay: Math.random() * 8,
          animationType: Math.floor(Math.random() * 5) + 1, // 1-5 animation types
          brightness,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
      setStars(newStars);
    };

    const generateShootingStars = () => {
      const newShootingStars: ShootingStar[] = [];
      for (let i = 0; i < 3; i++) {
        newShootingStars.push({
          id: i,
          startX: Math.random() * 120 - 10, // Start slightly off-screen
          startY: Math.random() * 30, // Top third of screen
          endX: Math.random() * 120 + 10, // End slightly off-screen
          endY: Math.random() * 30 + 70, // Bottom part of screen
          duration: Math.random() * 2 + 1, // 1-3 seconds
          delay: Math.random() * 15 + 5, // Every 5-20 seconds
        });
      }
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();

    // Regenerate shooting stars periodically
    const interval = setInterval(() => {
      generateShootingStars();
    }, 20000); // Every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = (type: number) => {
    switch (type) {
      case 1:
        return "star-float-1";
      case 2:
        return "star-float-2";
      case 3:
        return "star-float-3";
      case 4:
        return "star-float-4";
      case 5:
        return "star-float-5";
      default:
        return "star-float-1";
    }
  };

  const getTwinkleClass = (brightness: string) => {
    switch (brightness) {
      case "bright":
        return "star-twinkle-bright";
      case "medium":
        return "star-twinkle-medium";
      case "dim":
        return "star-twinkle-dim";
      default:
        return "star-twinkle-dim";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Nebula Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-900/8 to-pink-900/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "25s", animationDelay: "5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-900/6 to-blue-900/6 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "30s", animationDelay: "10s" }}
        />
      </div>

      {/* Regular Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${getAnimationClass(star.animationType)} ${getTwinkleClass(star.brightness)}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            boxShadow:
              star.brightness === "bright"
                ? `0 0 ${star.size * 2}px ${star.color}40`
                : "none",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={`shooting-${shootingStar.id}`}
          className="absolute star-shooting"
          style={
            {
              left: `${shootingStar.startX}%`,
              top: `${shootingStar.startY}%`,
              width: "2px",
              height: "2px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              boxShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff",
              animationDelay: `${shootingStar.delay}s`,
              animationDuration: `${shootingStar.duration}s`,
              "--end-x": `${shootingStar.endX - shootingStar.startX}%`,
              "--end-y": `${shootingStar.endY - shootingStar.startY}%`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
