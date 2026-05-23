import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let userName = '';
let dialogueIndex = 0;

const dialogue = [
    "Time really flies. It feels like just yesterday we stepped into junior high school together.",
    "Three beautiful years filled with laughter, unforgettable stories, and shared tears are now etched into every corner of our school.",
    "Thank you so much for being an irreplaceable part of this precious journey. Every beautiful chapter eventually comes to a close.",
    "But remember, [Name], this isn't the final goodbye. It's just the spectacular beginning of your next big adventure. Wishing you the absolute best in high school, my friend. Friends forever! 🌟",
];

/* ========================================
   DOM ELEMENTS
   ======================================== */

const homeScreen = document.getElementById('home-screen');
const formScreen = document.getElementById('form-screen');
const experienceScreen = document.getElementById('experience-screen');

const startButton = document.getElementById('start-button');
const backButton = document.getElementById('back-button');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('nameInput');
const enterButton = document.getElementById('enterButton');

const dialogueBox = document.getElementById('dialogue-box');
const dialogueText = document.getElementById('dialogue-text');
const nextButton = document.getElementById('next-button');

/* ========================================
   SCREEN NAVIGATION
   ======================================== */

function showScreen(screen) {
    homeScreen.classList.remove('active');
    formScreen.classList.remove('active');
    experienceScreen.classList.remove('active');
    
    screen.classList.add('active');
}

startButton.addEventListener('click', () => {
    showScreen(formScreen);
    nameInput.focus();
});

backButton.addEventListener('click', () => {
    showScreen(homeScreen);
    nameInput.value = '';
    dialogueIndex = 0;
});

/* ========================================
   THREE.JS SCENE SETUP
   ======================================== */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f4f8);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

camera.position.set(0, 8, 30);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/* ========================================
   EARTH
   ======================================== */

const earthGeometry = new THREE.SphereGeometry(10, 64, 64);

const earthMaterial = new THREE.MeshStandardMaterial({
    color: 0x22c55e,
    roughness: 0.8,
    metalness: 0.1
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.receiveShadow = true;
scene.add(earth);

const oceanGeometry = new THREE.SphereGeometry(10.15, 64, 64);

const oceanMaterial = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    transparent: true,
    opacity: 0.5,
    emissive: 0x1d4ed8,
    emissiveIntensity: 0.2
});

const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);
scene.add(ocean);

/* ========================================
   CHARACTER
   ======================================== */

const character = new THREE.Group();

const whiteMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.4,
    metalness: 0.2
});

const blueMaterial = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    roughness: 0.4,
    metalness: 0.3
});

const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.7,
    metalness: 0.1
});

const orangeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffb000,
    emissive: 0xff8800,
    emissiveIntensity: 0.4
});

const glowMaterial = new THREE.MeshStandardMaterial({
    color: 0x7dd3fc,
    emissive: 0x38bdf8,
    emissiveIntensity: 2
});

// BODY
const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 3.2, 2),
    whiteMaterial
);

body.castShadow = true;
body.position.y = 0;
character.add(body);

// BODY LIGHT
const bodyLight = new THREE.Mesh(
    new THREE.TorusGeometry(0.35, 0.12, 16, 100),
    orangeMaterial
);

bodyLight.rotation.x = Math.PI / 2;
bodyLight.position.set(0, -0.7, 1.05);
character.add(bodyLight);

// HEAD
const head = new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 64, 64),
    whiteMaterial
);

head.scale.y = 0.9;
head.position.y = 2.9;
head.castShadow = true;
character.add(head);

// VISOR
const visor = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 64, 64, 0, Math.PI),
    darkMaterial
);

visor.scale.set(1, 0.7, 0.4);
visor.rotation.z = Math.PI;
visor.position.set(0, 2.8, 1.1);
character.add(visor);

// EYES
const leftEye = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 16, 16),
    glowMaterial
);

leftEye.position.set(-0.3, 2.9, 1.45);
character.add(leftEye);

const rightEye = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 16, 16),
    glowMaterial
);

rightEye.position.set(0.3, 2.9, 1.45);
character.add(rightEye);

// SMILE
const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.22, 0.03, 16, 50, Math.PI),
    glowMaterial
);

smile.rotation.z = Math.PI;
smile.position.set(0, 2.6, 1.42);
character.add(smile);

// TOP PANEL
const topPanel = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.2, 0.3),
    blueMaterial
);

topPanel.position.set(0, 4.15, 0);
character.add(topPanel);

// LEFT ARM
const leftShoulder = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 32, 32),
    blueMaterial
);

leftShoulder.position.set(-1.6, 0.8, 0);
character.add(leftShoulder);

const leftArm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.18, 1.1, 8, 16),
    whiteMaterial
);

leftArm.rotation.z = Math.PI / 5;
leftArm.position.set(-2.2, 0.3, 0);
character.add(leftArm);

// RIGHT ARM
const rightShoulder = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 32, 32),
    blueMaterial
);

rightShoulder.position.set(1.6, 0.8, 0);
character.add(rightShoulder);

const rightArm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.18, 1.1, 8, 16),
    whiteMaterial
);

rightArm.rotation.z = -Math.PI / 2.8;
rightArm.position.set(2.15, 0.8, 0);
character.add(rightArm);

// LEGS
const leftLeg = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.22, 1.2, 8, 16),
    whiteMaterial
);

leftLeg.position.set(-0.55, -2.1, 0);
character.add(leftLeg);

const rightLeg = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.22, 1.2, 8, 16),
    whiteMaterial
);

rightLeg.position.set(0.55, -2.1, 0);
character.add(rightLeg);

// FEET
const leftFoot = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 32, 32),
    blueMaterial
);

leftFoot.scale.z = 1.5;
leftFoot.position.set(-0.55, -3, 0.25);
character.add(leftFoot);

const rightFoot = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 32, 32),
    blueMaterial
);

rightFoot.scale.z = 1.5;
rightFoot.position.set(0.55, -3, 0.25);
character.add(rightFoot);

character.scale.set(0.9, 0.9, 0.9);
scene.add(character);

/* ========================================
   LIGHTING
   ======================================== */

const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(10, 15, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

const blueLight = new THREE.PointLight(0x3b82f6, 20, 100);
blueLight.position.set(0, 20, 20);
scene.add(blueLight);

const orangeLight = new THREE.PointLight(0xff8800, 10, 50);
orangeLight.position.set(0, -10, 10);
scene.add(orangeLight);

/* ========================================
   STARS
   ======================================== */

const starGeometry = new THREE.BufferGeometry();
const starVertices = [];

for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}

starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starVertices, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

/* ========================================
   ORBIT CONTROLS
   ======================================== */

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.05;
orbitControls.minDistance = 20;
orbitControls.maxDistance = 50;

/* ========================================
   TYPEWRITER EFFECT
   ======================================== */

function typeWriter(text, i) {
    if (i < text.length) {
        dialogueText.innerHTML =
            text.substring(0, i + 1) +
            '<span aria-hidden="true"></span>';
        setTimeout(() => typeWriter(text, i + 1), 40);
    } else {
        nextButton.disabled = false;
    }
}

function showDialogue() {
    if (dialogueIndex < dialogue.length) {
        nextButton.disabled = true;
        nextButton.textContent = dialogueIndex === dialogue.length - 1 ? 'Finish' : 'Next';

        let currentDialogue = dialogue[dialogueIndex];

        if (currentDialogue.includes('[Name]')) {
            currentDialogue = currentDialogue.replace(
                '[Name]',
                userName
            );
        }

        typeWriter(currentDialogue, 0);
    } else {
        dialogueBox.classList.add('hidden');
    }
}

/* ========================================
   ANIMATION LOOP
   ======================================== */

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;
    const radius = 14;

    // Character orbital movement
    character.position.x = Math.cos(time * 0.6) * radius;
    character.position.z = Math.sin(time * 0.6) * radius;
    character.position.y = Math.sin(time * 2) * 0.4;

    // Look at earth
    character.lookAt(earth.position);
    character.rotation.y += Math.PI / 2;
    character.rotation.z = Math.sin(time * 2) * 0.05;

    // Arm animation
    leftArm.rotation.x = Math.sin(time * 3) * 0.1;
    rightArm.rotation.x = -Math.sin(time * 3) * 0.1;

    // Earth rotation
    earth.rotation.y += 0.002;
    ocean.rotation.y += 0.003;

    // Stars rotation
    stars.rotation.y += 0.0002;

    orbitControls.update();
    renderer.render(scene, camera);
}

/* ========================================
   WINDOW RESIZE HANDLER
   ======================================== */

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

/* ========================================
   FORM SUBMISSION
   ======================================== */

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value.trim();

    if (nameValue !== '') {
        userName = nameValue;
        dialogueIndex = 0;
        nextButton.textContent = 'Next';
        
        // Show experience screen
        showScreen(experienceScreen);
        
        // Small delay before starting dialogue
        setTimeout(() => {
            dialogueBox.classList.remove('hidden');
            showDialogue();
        }, 500);
    } else {
        alert('Please enter your name!');
        nameInput.focus();
    }
});

/* ========================================
   DIALOGUE NAVIGATION
   ======================================== */

nextButton.addEventListener('click', () => {
    dialogueIndex++;
    showDialogue();
});

/* ========================================
   START ANIMATION
   ======================================== */

animate();
