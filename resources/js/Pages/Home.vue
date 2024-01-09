<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import NavLink from '@/Components/NavLink.vue';

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

      <!-- Navigation Links -->
      <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        <NavLink :href="route('home')" :active="route().current('home')">
          Home
        </NavLink>

        <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
          Dashboard
        </NavLink>
      </div>
    </div>



    <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
      <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold  hover:text-gray-900 dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>

      <template v-else>
        <Link :href="route('login')" class="font-semibold  hover:text-gray-900 dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link>

        <Link v-if="canRegister" :href="route('register')" class="ms-4 font-semibold  hover:text-gray-900 dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>
      </template>
    </div>

    <!-- currentTime -->
    <div class="mt-4
      p-10
    text-gray-500 dark:text-gray-400 text-sm text-center sm:mt-0 sm:ms-0 sm:text-left" dir="ltr">
      {{ currentDate }} {{ currentTime }}
    </div>
  </div>
</template>



<style scoped></style>