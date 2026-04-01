export default function HeroSection({ rickrolled }) {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        🗓 April 1st, 2026 — Official Prank HQ
      </div>

      <div className="hero-title">
        <span className="hero-line1">You Got</span>
        <span className="hero-line2">Rickroll'd</span>
        <span className="hero-line3">
          <span className="spin-star">★</span>
          &nbsp;Never gonna give you up&nbsp;
          <span className="spin-star">★</span>
        </span>
      </div>

      {rickrolled && (
        <div className="rickrolled-badge">
          🎵 You clicked it, didn't you?
        </div>
      )}
    </section>
  );
}
