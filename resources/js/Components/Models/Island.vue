<template>
  <canvas id="webgl" class=" w-screen h-screen fixed top-0 left-0 z-0"></canvas>
</template> 

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import * as dat from 'dat.gui';
import { gsap } from 'gsap';

//Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.SphereBufferGeometry(.5, 64, 64);

// Materials
const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });

// #2E31E7
material.color = new THREE.Color(0x2E31E7);

// Mesh
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Lights
const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


// Camera

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})


renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()
const tick = () => {

  const elapsedTime = clock.getElapsedTime()

  // Update objects
  sphere.rotation.y = .5 * elapsedTime

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
</script>

<style scoped></style>