<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

const canvasRef = ref(null);



onMounted(() => {
  // Declare variables
  let mixer, camera, renderer, controls;
  const scene = new THREE.Scene();

  // Initialize Renderer
  function initRenderer(canvas) {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.value,
      alpha: true,

    });

    updateRendererSize();
    window.addEventListener('resize', updateRendererSize);
  }



  // Update Renderer Size
  function updateRendererSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.physicallyCorrectLights = true
    renderer.gammaOutput = true

    if (camera) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }


  }

  // Load GLTF Model
  function loadModel() {
    const loader = new GLTFLoader();
    loader.load('/assets/models/main/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      console.log('gltf', gltf);
      console.log('parser', gltf.parser);




      // GLTF Camera
      let gltfCamera = gltf.cameras[0];


      camera = new THREE.PerspectiveCamera();

      camera.position.set(gltfCamera.position.x, gltfCamera.position.y, gltfCamera.position.z);
      camera.rotation.set(gltfCamera.rotation.x, gltfCamera.rotation.y, gltfCamera.rotation.z);
      camera.scale.set(gltfCamera.scale.x, gltfCamera.scale.y, gltfCamera.scale.z);


      scene.add(camera)



      // scene.castShadow = true;


      // GLTF Animations
      mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => mixer.clipAction(clip).play());

      //add Lights
      let light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      let light2 = new THREE.PointLight(0xffffff, 1);
      // rotate and position the light at cube
      // get cube position
      let cubePos = model.position;
      light2.position.set(cubePos.x, cubePos.y, cubePos.z);


      scene.add(light2);







    });
  }

  // Initialize Animation Loop
  function animate() {
    const clock = new THREE.Clock();
    const tick = () => {
      if (mixer) {
        mixer.update(clock.getDelta())
      };
      if (camera) {
        renderer.render(scene, camera)

      };


      window.requestAnimationFrame(tick);

    };
    tick();
  }



  // Initialization
  initRenderer(canvasRef.value);

  loadModel();
  animate();
});
</script>

<template>
  <canvas ref="canvasRef" class="w-screen h-screen fixed top-0 left-0 -z-10"></canvas>
</template> 

<style scoped></style>


                    