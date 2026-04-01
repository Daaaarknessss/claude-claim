import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import HeroSection from "./components/HeroSection";
import FactCards from "./components/FactCards";
import Ticker from "./components/Ticker";
import DecorativeShapes from "./components/DecorativeShapes";

export default function App() {
  const [showNotif, setShowNotif] = useState(false);
  const [rickrolled, setRickrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotif(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClaim = () => {
    setRickrolled(true);
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    setTimeout(() => setShowNotif(false), 500);
  };

  const handleReopen = () => {
    setShowNotif(true);
    setRickrolled(false);
  };

  return (
    <div className="app">
      <div className="bg-grid" />
      <DecorativeShapes />
      {showNotif && (
        <Notification
          onClaim={handleClaim}
          onDismiss={() => setShowNotif(false)}
        />
      )}
      <main className="page">
        <HeroSection rickrolled={rickrolled} />
        <FactCards />
        <button className="big-btn" onClick={handleReopen}>
          <span className="spin-star">★</span>
          Get Rickrolled Again
          <span className="spin-star">★</span>
        </button>
      </main>
      <Ticker />
    </div>
  );
}
