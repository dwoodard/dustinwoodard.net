<script setup>
//onmounted
import { defineProps, onMounted } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



import * as dat from 'dat.gui';
import { gsap } from 'gsap';

const props = defineProps({
  message: String,
});

// onmounted
onMounted((e) => {

  console.log('mounted');

  //Debug
  // Create dat.GUI for lights




  const gui = new dat.GUI();






  // Canvas
  const canvas = document.querySelector('#webgl');

  // Scene
  const scene = new THREE.Scene();

  // Objects
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

  // Materials
  // const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });
  const material = new THREE.MeshStandardMaterial();

  // #E72E2E
  material.metalness = 0.7;
  material.color = new THREE.Color(0xE72E2E);

  // Mesh
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  // GLTFLoader
  const loader = new GLTFLoader();
  let mixer;

  loader.load('/assets/models/main/scene.gltf', (gltf) => {
    const model = gltf.scene;

    scene.add(model);
    mixer = new THREE.AnimationMixer(model);

    console.log(gltf.animations);

    // gltf.animations.forEach((clip) => {
    //   mixer.clipAction(clip).play();
    // });

    //rather than looping through all animations create a click event for each object
    //and play the animation for that object
    // const actions = {};
    // gltf.animations.forEach((clip) => {
    //   actions[clip.name] = mixer.clipAction(clip);
    // });

    // console.log(actions);

    // const action = mixer.clipAction(gltf.animations[0]);
    // action.play();
  }

  );

  // Lights
  const light = new THREE.PointLight(0xffffff, 0.5);
  light.position.x = 2;
  light.position.y = 13;
  light.position.z = 4;
  scene.add(light);

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
  const camera = new THREE.PerspectiveCamera(20, sizes.width / sizes.height, 0.8, 1000)

  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 2
  scene.add(camera)

  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.enableZoom = true
  controls.enablePan = true
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 0.5;

  //limit rotation controls
  controls.minPolarAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI / 2;



  controls.update();
  camera.position.set(0, 50, 100);

  controls.target = new THREE.Vector3(0, 0, 0);
  controls.update();

  // Renderer
  console.log(canvas);
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  })


  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  /**
   * Animate
   */

  const clock = new THREE.Clock()

  //we need to give tick access to MouseMove event
  const tick = () => {


    // Check if the mixer is defined before using it
    if (mixer) {
      mixer.update(0.05); // Update the animation mixer
    }

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    torus.rotation.y = Math.sin(elapsedTime * 0.5)
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
});

</script>

<template>
  <canvas id="webgl" class=" w-screen h-screen fixed top-0 left-0 -z-10"></canvas>
</template> 



<style scoped></style>