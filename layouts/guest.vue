<!-- Start of My Component Header -->
<template>
  <!-- Menu of the System -->
<div>
<nav class="bg-blue-600">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" @click="mobile = !mobile" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="/logo/logo.png" alt="Workflow" />
          <img class="hidden lg:block h-8 w-auto" src="/logo/logo.png" alt="Workflow" />
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <nuxt-link :to="{name: 'index'}" exact class=" text-white px-3 py-2 rounded-md text-sm font-medium">Menu Principal </nuxt-link>

            <nuxt-link :to="{name: 'marking'}" exact class=" text-white px-3 py-2 rounded-md text-sm font-medium">Preencher Dados </nuxt-link>

            <nuxt-link :to="{name: 'book'}"  exact class=" text-white px-3 py-2 rounded-md text-sm font-medium">Atendimento</nuxt-link>

            <nuxt-link :to="{name: 'deposit'}"  exact class=" text-white px-3 py-2 rounded-md text-sm font-medium">Depósito bancário</nuxt-link>

            <nuxt-link :to="{name: 'my-data'}" exact class=" text-white px-3 py-2 rounded-md text-sm font-medium">Meus Dados </nuxt-link>

            <nuxt-link :to="{name: 'login'}" exact class=" text-white px-3 py-2 rounded-md text-sm font-medium">Login </nuxt-link>

          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div v-show="mobile" class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Menu Principal</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pré-Marcação</a>


      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Meus Dados</a>

    </div>
  </div>
</nav>

<Nuxt class="100vh" />
</div>
</template>

<script>
export default {
  name: 'Header',
   layout: 'guest',
  data() {
  return {
    awesome: "",
    mobile: ""
  }
}
}
</script>

<style>
  .nuxt-link-active {
    font-weight: bold;
    background-color: #1e3a8a;
}

</style>
