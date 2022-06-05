<template>
   <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden mobile ">
  <div class="pt-16 pb-32 sm:pt-24 sm:pb-80 lg:pt-24 lg:pb-8 tblet">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 tablet sm:static">
      <div class="sm:max-w-lg ">
        <p class="text-3xl font-extrabold tracking-tight text-gray-900">Sistema de Pré-Marcação</p>
        <p class="mt-4 text-xl text-gray-500">Plataforma digial de Pré-marcação para o depósito e o atendimento.</p>
        <p class="mt-4 text-xl text-gray-500">A <span class="bg-blue-800 text-white p-px pl-2 mr-1 font-semibold rounded-sm"> Plataforma </span> fornece também a possibilidade actualização dos dados apartir de qualquer lugar.</p>

          <a href="#" class=" md:mt-12 inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Marque Agora</a>
      </div>
      <div>
        <div class="md:mt-32 justify-items-end" >
          <!-- Decorative image grid -->
          <div aria-hidden="true" class=" sm:pt-80 pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
            <div class=" banner absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <img class="" src="/banner.png" alt="Workflow" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "Main"
}
</script>


<style>
/* Portrait phones and smaller */
@media (max-width: 480px) {
  .mobile {
    margin-bottom: 50px;
    padding-bottom: 150px;
    padding-top: 50px;
  }
  .banner {
    margin-top: 70px;
  }
}
/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
 .tablet {
   margin-top: 500px;
 }
}

</style>
