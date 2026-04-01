const TICKER_TEXT =
  "★ HAPPY APRIL FOOLS DAY ★ YOU JUST GOT RICKROLLED ★ NEVER GONNA GIVE YOU UP ★ NEVER GONNA LET YOU DOWN ★ NEVER GONNA RUN AROUND AND DESERT YOU ★ ";

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <span className="ticker-inner">{TICKER_TEXT.repeat(3)}</span>
    </div>
  );
}
