# 🎉 April Fools Rickroll Site

A neo-brutalist April Fools prank site built with React + Vite.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173 — send the link to your victims! 🎣

## Build for Production

```bash
npm run build
npm run preview
```

## File Structure

```
src/
├── App.jsx                    # Root component & state
├── main.jsx                   # Entry point
├── index.css                  # All neo-brutalist styles
└── components/
    ├── Notification.jsx       # The rickroll popup
    ├── HeroSection.jsx        # Main heading area
    ├── FactCards.jsx          # Fun fact cards
    ├── Ticker.jsx             # Bottom scrolling ticker
    └── DecorativeShapes.jsx   # Floating colored shapes
```

## How It Works

1. Page loads with a 600ms delay, then the notification pops up
2. User clicks "CLAIM YOUR PRIZE" → opens YouTube rickroll in new tab
3. If they dismiss without clicking, the "Get Rickrolled Again" button reopens the popup
4. Scrolling ticker at the bottom repeats the Rick Astley lyrics forever
