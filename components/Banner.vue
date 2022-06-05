<template>

    <header class="bg-white shadow ">

    <div class="max-w-7xl mx-auto py-6 px-4  sm:px-6 lg:px-8 ">
      <div class=" inline-grid grid-cols-2 gap-8">
          <nuxt-link :to="{name: 'index'}" exact class=" bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium">Atendimento ao Cliente</nuxt-link>
          <nuxt-link :to="{name: 'index'}" exact class=" bg-blue-800 text-center text-white px-3 py-2 tet-center rounded-md text-sm font-medium">Marcar Depósito</nuxt-link>
      </div>
    </div>
  </header>


</template>

<script>
export default {
  name: "Banner"
}
</script>
