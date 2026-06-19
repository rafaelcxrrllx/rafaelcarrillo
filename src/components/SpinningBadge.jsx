const WORDS = "• LEADER • RESEARCHER • PROBLEM-SOLVER • WITH LOVE SINCE 2001 • SOUTH CENTRAL LA •";

export default function SpinningBadge() {
  // Repeat the text to fill the circle evenly
  const text = WORDS;
  const chars = text.split('');

  return (
    <div className="spin-badge">
      <div className="spin-badge-rotor">
        <svg viewBox="0 0 200 200" className="spin-badge-svg">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="spin-badge-text">
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        <div className="spin-badge-center">✦</div>
      </div>
    </div>
  );
}