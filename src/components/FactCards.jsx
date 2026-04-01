const facts = [
  {
    label: "Did You Know",
    text: '"Never Gonna Give You Up" was released in 1987. It never gets old. 👴',
  },
  {
    label: "Rickroll Score",
    text: "You are the 1,000,000,000th person to be rickrolled. Congratulations. 🏆",
  },
  {
    label: "Fun Fact",
    text: 'Rick Astley is 5\'11". The song is 3\'33". You have been fooled 100%. 🎵',
  },
];

export default function FactCards() {
  return (
    <div className="card-grid">
      {facts.map((fact, i) => (
        <div className="fact-card" key={i}>
          <span className="card-label">{fact.label}</span>
          <p className="card-text">{fact.text}</p>
        </div>
      ))}
    </div>
  );
}
