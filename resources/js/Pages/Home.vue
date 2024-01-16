<script setup>
import { onMounted, ref } from 'vue';
import { Head, Link, } from '@inertiajs/vue3';
import NavLink from '@/Components/NavLink.vue';
import { onKonamiCode } from '@/utils/konami';

import Island from '@/Components/Models/Island.vue';


const currentPosition = ref('home');

let setPostion = (position, event) => {
  event.preventDefault();
  currentPosition.value = position;
}

onKonamiCode(() => {
  console.log('You found the Konami Code!');
});


// 
</script>

<template>
  <div>
    <div class="flex">
      <!-- Logo -->
      <div class="shrink-0 flex items-center">
        <Link :href="route('dashboard')">
        <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800" />
        </Link>
      </div>

      <!-- 
        make glass navbar using tailwindcss
       -->
      <div class="fixed bg-white bg-opacity-5  backdrop-filter backdrop-blur-[5px]  border-gray-100 w-full h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">

          <!-- if user is logged in -->
          <NavLink v-if="user" :href="route('dashboard')" :active="route().current('dashboard')">
            Dashboard
          </NavLink>

          <a @click="setPostion('home', $event)">
            Home
          </a>


          <a @click="setPostion('about', $event)">
            About
          </a>

          <a @click="setPostion('contact', $event)">
            Contact
          </a>

        </div>
      </div>


      <div>
        <Island :state="currentPosition" />
      </div>
      <!-- Navigation Links -->

    </div>
  </div>
</template>


<style scoped></style>