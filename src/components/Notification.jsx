import { useEffect, useRef } from "react";

export default function Notification({ onClaim, onDismiss }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.animation = "none";
      void boxRef.current.offsetWidth;
      boxRef.current.style.animation = "";
    }
  }, []);

  return (
    <div className="notif-overlay">
      <div className="notif-box" ref={boxRef}>
        <div className="notif-header">
          <span className="notif-header-title">
            ⚠ System Notification — April 1, 2026
          </span>
          <button className="notif-close" onClick={onDismiss} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="notif-body">
          <div className="notif-emoji">🎉</div>
          <h2 className="notif-title">
            Happy
            <br />
            <span className="notif-title-highlight">April Fools!</span>
          </h2>
          <p className="notif-sub">
            You've been selected for a <strong>VERY IMPORTANT</strong> free
            gift.
            <br />
            Click below to claim your prize! 🏆
          </p>
          <button className="notif-btn" onClick={onClaim}>
            🎁 &nbsp;CLAIM YOUR PRIZE
          </button>
          <button className="notif-dismiss" onClick={onDismiss}>
            No thanks, I hate prizes
          </button>
        </div>
      </div>
    </div>
  );
}
