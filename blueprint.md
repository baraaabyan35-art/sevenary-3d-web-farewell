
# Project Blueprint: 3D Graduation Experience

## 1. Overview

This project is an interactive 3D website celebrating a junior high school graduation. It aims to provide a touching and memorable experience for the user by combining a personalized narrative with a playful and symbolic 3D scene.

## 2. Core Features & Design

### a. Initial Interaction
- **Personalization:** A clean, modern overlay prompts the user to enter their name.
- **Seamless Transition:** Upon entering a name, the overlay smoothly fades out, revealing the main 3D experience and a dialogue UI.

### b. 3D Scene
- **Central Element:** A stylized, cartoon-like Earth at the center, representing the world of opportunities ahead.
- **Symbolic Character:** A cute, toy-like robot character constantly orbits the Earth, symbolizing the user's ongoing journey. The character has a playful hopping animation.
- **Atmosphere:** The scene is set against a soft pastel blue background with a subtle, floating star-like particle system, creating a dreamlike and hopeful mood.
- **Lighting:** A combination of ambient and directional light creates a bright, cheerful, and inviting environment.
- **Interactivity:** Users can rotate the camera using `OrbitControls` to view the scene from different angles, but with gentle zoom restrictions to maintain focus.

### c. Narrative System
- **UI:** A semi-transparent RPG-style dialogue box is overlaid at the bottom of the screen.
- **Dynamic Content:** The dialogue incorporates the user's name, making the narrative deeply personal.
- **Teletype Effect:** Text is rendered character-by-character to build anticipation and control the narrative pace.
- **Emotional Arc:** The dialogue follows a touching sequence reflecting on past memories and looking forward to the future, ending on a hopeful note.

## 3. Technical Implementation

- **Structure:** The application is built with vanilla HTML, CSS, and JavaScript.
- **Dependencies:** Three.js and its `OrbitControls` are loaded via a standard `importmap` from a CDN for simplicity and reliability.
- **Modularity:** Code is organized into `index.html` (structure), `style.css` (presentation), and `main.js` (logic), following modern web standards.
- **Responsiveness:** The 3D canvas and UI elements are designed to be responsive and adapt gracefully to different screen sizes.

## 4. Current Plan

1. **Create `index.html`:**
   - Set up the HTML structure with the welcome overlay, canvas container, and dialogue box UI.
   - Include the `importmap` for Three.js dependencies.
   - Link the CSS and JS files.

2. **Create `style.css`:**
   - Design the aesthetic for all UI elements, including the overlays, buttons, and text.
   - Implement the fade-out transition for the welcome screen.
   - Ensure the layout is responsive.

3. **Create `main.js`:**
   - Handle the initial form submission and transition.
   - Set up the entire Three.js scene: renderer, camera, lighting, and controls.
   - Create the 3D models for the Earth and the orbiting character.
   - Implement the character's orbital and hopping animation logic.
   - Build the dialogue system with the teletype effect and narrative sequence.
   - Add the window resize handler to ensure the scene adapts correctly.
