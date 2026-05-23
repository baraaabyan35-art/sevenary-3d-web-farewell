# 🌟 Sevenary - Graduation Celebration

A modern, interactive 3D web experience celebrating graduation with personalized dialogue, stunning animations, and heartfelt messages.

## ✨ Features

### 🏠 **Home Page**
- Modern hero section with gradient title
- Feature cards showcasing the experience
- Smooth fade-in animations
- Responsive call-to-action button

### 📝 **Form Screen**
- Clean, minimalist design
- Personalized name input
- Back button for navigation
- Modern focus states and validation

### 🎮 **3D Experience Screen**
- Interactive Three.js 3D scene
- Animated character orbiting Earth
- Realistic lighting and shadows
- Dialogue box with typewriter effect
- Next/Finish button navigation

### 🎨 **Design System**
- **Light Mode Theme** - Clean white backgrounds
- **Blue Accents** - Primary (#2563eb) and Secondary (#0ea5e9) colors
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Smooth Animations** - Transitions and hover effects throughout
- **Accessibility** - Focus states and semantic HTML

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **JavaScript (ES6+)** - Module imports and async handling
- **Three.js** - 3D graphics and animations
- **OrbitControls** - Camera control system

## 📁 Project Structure

```
sevenary-3d-web-farewell/
├── index.html          # Main HTML with 3-screen structure
├── style.css           # Complete design system & styling
├── main.js             # Three.js scene & screen navigation
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - it's a static web app!

### Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/baraaabyan35-art/sevenary-3d-web-farewell.git
cd sevenary-3d-web-farewell
```

2. **Start a local server:**

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server
```

**Live Server (VS Code):**
- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

3. **Open in browser:**
```
http://localhost:8000
```

## 🎯 User Flow

1. **Home Screen** → User clicks "Start Your Journey"
2. **Form Screen** → User enters their name
3. **Experience Screen** → 3D scene loads with personalized dialogue
4. **Back Button** → Navigate back to Home at any time

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-primary: #2563eb;        /* Primary blue */
    --color-secondary: #0ea5e9;      /* Secondary sky blue */
    --color-accent: #f59e0b;         /* Accent warm amber */
}
```

### Dialogue Messages
Edit the `dialogue` array in `main.js`:
```javascript
const dialogue = [
    "Your message here...",
    "Another message...",
    // Add more as needed
];
```

### 3D Scene
Modify Three.js objects in `main.js`:
- Character geometry and materials
- Earth and ocean styling
- Lighting and camera settings
- Animation speeds

## 📱 Responsive Breakpoints

- **Desktop**: Full experience with all features
- **Tablet** (768px): Optimized layout, single-column features
- **Mobile** (480px): Touch-friendly buttons, adjusted spacing

## ⚡ Performance

- **Optimized** Three.js rendering
- **Smooth animations** at 60 FPS
- **Fast loading** - No heavy dependencies
- **Lightweight** - CSS variables reduce file size

## 🔧 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📦 Dependencies

- **Three.js** (v0.158.0) - Loaded via CDN
- **OrbitControls** - Included with Three.js

## 🎓 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 🚀 Deployment

### Deploy to GitHub Pages
```bash
# Push to main branch
git push origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch
```

### Deploy to Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Deploy to Netlify
- Connect GitHub repo to Netlify
- Auto-deploys on push to main

## 📝 Recent Updates

### v2.0.0 - Complete Redesign
- ✨ Added modern home landing page
- 🎨 Converted to light mode theme with blue accents
- 🔄 Implemented screen navigation system
- 📐 Created comprehensive design system with CSS variables
- ♿ Enhanced accessibility and responsive design
- 🎬 Added smooth animations and transitions

## 👥 Authors

- **Baraa Abyan** - [@baraaabyan35-art](https://github.com/baraaabyan35-art)
- **Dedicated to Sevenary** 🎊

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💬 Support

For issues, questions, or suggestions, please open an [issue](https://github.com/baraaabyan35-art/sevenary-3d-web-farewell/issues) on GitHub.

## 🌐 Live Demo

Visit the live project: [Sevenary](https://baraaabyan35-art.github.io/sevenary-3d-web-farewell/)

---

**Made with ❤️ for a special graduation celebration**
