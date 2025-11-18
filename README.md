# Hospital Surgery Mini-Games

A collection of three interactive surgery-themed mini-games built with HTML5 Canvas and JavaScript.

## 🎮 Games Included

### 1. Appendix Removal (game1.html)
- **Objective:** Click to remove infected organs while avoiding healthy ones
- **Controls:** Mouse click
- **Scoring:** +100 points for infected organs, -50 for healthy ones
- **Time limit:** 60 seconds

### 2. Wound Stitching (game2.html)
- **Objective:** Click along the wound line to stitch it closed
- **Controls:** Mouse click
- **Scoring:** Based on accuracy and speed
- **Features:** Accuracy meter, precision scoring
- **Time limit:** 90 seconds

### 3. Heart Rhythm (game3.html)
- **Objective:** Press keys in rhythm to match heartbeat patterns
- **Controls:** A, S, D, F keys
- **Scoring:** Combo system with multipliers
- **Features:** Health bar, combo meter
- **Gameplay:** Endless until health depletes

## 📁 File Structure
```
hospital-game/
├── index.html          # Main menu
├── game1.html          # Appendix Removal
├── game2.html          # Wound Stitching
├── game3.html          # Heart Rhythm
├── css/
│   └── style.css       # Shared styles (optional)
└── README.md           # This file
```

## 🚀 Deployment to Render

### Method 1: Static Site

1. Push code to GitHub repository
2. Go to [Render.com](https://render.com)
3. Click "New" → "Static Site"
4. Connect your GitHub repo
5. Set build command: (leave empty)
6. Set publish directory: `.` (root)
7. Click "Create Static Site"

### Method 2: Web Service (if you add backend)

1. Add a simple `server.js` file:
```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'));

app.listen(port, () => {
    console.log(`Game server running on port ${port}`);
});
```

2. Add `package.json`:
```json
{
  "name": "hospital-surgery-games",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

3. Deploy as Web Service on Render

## 🎨 Features

- **Responsive Design:** Works on desktop and mobile
- **Local Storage:** High scores persist between sessions
- **No Dependencies:** Pure HTML5, CSS3, and Vanilla JavaScript
- **Sound Effects:** Web Audio API for game sounds
- **Canvas Graphics:** Smooth animations at 60 FPS

## 🏆 Scoring System

- **Game 1:** 100 pts per infected organ, time bonus
- **Game 2:** Accuracy-based scoring, combo multipliers
- **Game 3:** Rhythm matching with combo system

High scores are saved automatically in browser localStorage.

## 📱 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Touch-enabled

## 👩‍💻 Development

No build process required! Just open `index.html` in a browser.

For local development:
```bash
python3 -m http.server 8000
# or
npx serve
```

Then visit `http://localhost:8000`

## 📝 License

Free to use for educational purposes.

## 🎓 Educational Value

This project demonstrates:
- HTML5 Canvas API
- JavaScript game loops
- Event handling (mouse/keyboard)
- localStorage API
- Web Audio API
- Object-oriented programming
- Game design patterns

Perfect for computer science/engineering projects!
