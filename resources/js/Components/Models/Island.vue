<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

const canvasRef = ref(null);
const PerspectiveCamera = ref(null);



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
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;





    if (camera) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }


  }

  //current

  // Load GLTF Model
  function loadModel() {
    const loader = new GLTFLoader();
    loader.load('/assets/models/main/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      console.log('gltf', gltf);

      // GLTF Camera
      let gltfCamera = gltf.cameras[0];



      camera = new THREE.PerspectiveCamera();

      gsap.to(camera.position, {
        duration: 1,
        x: gltfCamera.position.x,
        y: gltfCamera.position.y,
        z: gltfCamera.position.z,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(model.position);
        }

      });

      // const helper = new THREE.CameraHelper(camera);
      // scene.add(helper);

      // gsap to camera to gltf camera position




      scene.add(camera)

      let controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.01;

      //min and max distance
      controls.minDistance = 1;
      controls.maxDistance = 50;

      //don't angle below horizon
      controls.minPolarAngle = 0;
      controls.maxPolarAngle = Math.PI / 2;

      controls.enableZoom = true;
      controls.zoomSpeed = 1;

      // controls.screenSpacePanni/ng = true; //this is for panning on the screen


      //
      controls.minAzimuthAngle = 0;
      controls.maxAzimuthAngle = Math.PI / 2;


      scene.castShadow = true;


      // GLTF Animations
      mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => mixer.clipAction(clip).play());



      //LIGHTS
      let pointLight = {
        get color() {
          let color = "#FFFFFF";
          return parseInt(color.replace('#', ''), 16);
        },
        intensity: 100,
        distance: 100,
      }


      let worldLight = new THREE.PointLight(pointLight.color, pointLight.intensity, pointLight.distance);
      worldLight.position.set(0, 50, 0);
      scene.add(worldLight);

      // hemi light
      let hemiLight = {
        get skyColor() {
          let skyColor = "#FFFFFF";
          return parseInt(skyColor.replace('#', ''), 16);
        },
        get groundColor() {
          let groundColor = "#000000";
          return parseInt(groundColor.replace('#', ''), 16);
        },
        intensity: 1
      }



      // HemisphereLight(skyColor, groundColor, intensity)
      hemiLight = new THREE.HemisphereLight(hemiLight.skyColor, hemiLight.groundColor, hemiLight.intensity);
      scene.add(hemiLight);


      updateRendererSize();

    });
  }

  // Initialize Animation Loop
  function animate() {
    const clock = new THREE.Clock();
    const tick = () => {
      if (mixer) {
        mixer.update(clock.getDelta())
      };
      if (controls) {
        controls.update();
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


                    