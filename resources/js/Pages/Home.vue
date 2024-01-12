<script setup>
import { defineProps, onMounted } from 'vue';
import { Head, Link, } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import NavLink from '@/Components/NavLink.vue';
import { onKonamiCode } from '@/utils/konami';

// import Island from '@/Components/Models/Island.vue';


defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
  laravelVersion: {
    type: String,
    required: true,
  },
  phpVersion: {
    type: String,
    required: true,
  },
  currentTime: {
    type: String,
    required: true,
  },
  currentDate: {
    type: String,
    required: true,
  },
});

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
      <div class="fixed  backdrop-filter backdrop-blur-[5px]  border-gray-100 w-full h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
          <NavLink :href="route('home')" :active="route().current('home')">
            Home
          </NavLink>

          <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
            Dashboard
          </NavLink>
        </div>
      </div>


      <div>
        <!-- <Island /> -->
      </div>




      <!-- Navigation Links -->

    </div>








  </div>
</template>



<style scoped></style>