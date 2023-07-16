import './style.css';
import * as THREE from 'three';

/* `const scene = new THREE.Scene();` is creating a new scene object in Three.js. A scene is a
container that holds all the objects, lights, and cameras that will be rendered. It acts as a
virtual world where all the elements of the 3D scene are placed and organized. */
const scene = new THREE.Scene();

// Red cube
/* This code is creating a red cube in a Three.js scene. */
/* The code `const geometry = new THREE.BoxGeometry(1, 1, 1);` is creating a box geometry with
dimensions of 1 unit in each direction (width, height, and depth). */

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

/* `scene.add(mesh);` is adding the `mesh` object (which represents the red cube) to the `scene`. This
means that the cube will be rendered and displayed in the scene when the scene is rendered. */
scene.add(mesh);

// Sizes
const sizes = {
  width: 600,
  height: 400,
};

// Camera
/* This code is creating a camera object in the Three.js scene. */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 2;
camera.position.y = 1;
scene.add(camera);

/* This code is selecting the HTML element with the class name "webgl" using the
`document.querySelector()` method and assigning it to the `canvas` variable. */
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

/* `renderer.render(scene, camera);` is rendering the scene using the specified camera. It takes the
scene and camera as parameters and displays the rendered output on the canvas. */
renderer.render(scene, camera);
