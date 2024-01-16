<script setup>
import { onMounted, ref, defineProps, watch } from 'vue'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

// canvas
let canvasRef = ref(null);

// threejs scene,renderer,camera,mixer,controls
let scene
let renderer
let camera
let model
let gltfCamera
let mixer
let controls



const props = defineProps({
  state: {
    type: String,
    required: true,
    default: 'home'
  }
})


watch(
  () => props.state,
  () => {
    console.log('prop value changed', props.state)


    switch (props.state) {
      case 'home':
        let homeCube = model.children.find((child) => child.name === 'home');
        gsap.to(camera.position, {
          duration: 1,
          delay: .25,
          x: gltfCamera.position.x,
          y: gltfCamera.position.y,
          z: gltfCamera.position.z,
          ease: "expo.inOut",
          onUpdate: (e) => {
            camera.lookAt(0, 0, 0);
          }
        });
        break;
      case 'about':
        let aboutCube = model.children.find((child) => child.name === 'about');

        gsap.to(camera.position, {
          duration: 1,
          delay: .25,
          x: aboutCube.position.x,
          y: aboutCube.position.y,
          z: aboutCube.position.z,
          ease: "expo.inOut",
          onUpdate: (e) => {
            camera.lookAt(0, 0, 0);
          }

        });
        console.log('about');
        break;
      case 'contact':

        let contactCube = model.children.find((child) => child.name === 'contact');
        console.log(' contact', contactCube);

        gsap.to(camera.position, {
          duration: 1,
          delay: .25,

          x: contactCube.position.x,
          y: contactCube.position.y,
          z: contactCube.position.z,

          onUpdate: (e) => {
            camera.lookAt(0, 0, 0);
          }
        });


    }

  }
)





// Update Renderer Size
function updateRendererSize() {
  console.log('updateRendererSize', renderer, camera);


  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.physicallyCorrectLights = true
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  console.log('camera', camera, camera);


  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

}

// Load GLTF Model
function loadModel() {
  const loader = new GLTFLoader();
  loader.load('/assets/models/main/scene.gltf', (gltf) => {
    // console.log('gltf', gltf);

    model = gltf.scene;

    scene.add(model);

    // console.log('model', model);

    // GLTF Camera
    gltfCamera = gltf.cameras[0];

    // console.log('gltfCamera', gltfCamera);

    camera = new THREE.PerspectiveCamera(gltfCamera.fov, window.innerWidth / window.innerHeight, gltfCamera.near, gltfCamera.far);

    camera.position.set(gltfCamera.position.x, gltfCamera.position.y, gltfCamera.position.z);



    // camera position,ratation,fov,near,far
    camera.rotation.set(gltfCamera.rotation.x, gltfCamera.rotation.y, gltfCamera.rotation.z);

    camera.fov = gltfCamera.fov;
    camera.near = gltfCamera.near;
    camera.far = gltfCamera.far;










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
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
  };
  tick();
}
// Initialize Renderer
function init() {
  console.log('init');

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: true,
  });

  // console.log('renderer', renderer);


  controls = new OrbitControls(camera, canvasRef.value);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  updateRendererSize();
  window.addEventListener('resize', updateRendererSize);
}






onMounted(() => {
  init();
  loadModel();
  animate();
})

// Initialization

</script>

<template>
  <div class="pt-16">
    state: {{ state }}
  </div>

  <canvas ref="canvasRef" class="w-screen h-screen fixed top-0 left-0 -z-10"></canvas>
</template> 
 