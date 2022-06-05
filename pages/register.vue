<template>

  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="/logo_register.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Registar-se</h2>
    </div>

    <form class="mt-8 space-y-6" @submit.prevent="submit">
      <div class="rounded-md shadow-sm">
         <div class="">
          <label for="name" class="sr-only">Nome</label>
          <input id="name" name="name" v-model="form.name" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Digite o seu Nome">
        </div>
        <div class="pt-4">
          <label for="email-address" class="sr-only">E-mail</label>
          <input id="email-address" name="email" v-model="form.email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Digite o seu E-mail">
        </div>
        <div class="pt-4">
          <label for="password" class="sr-only">Senha</label>
          <input id="password" name="password" type="password" v-model="form.password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Escolha uma Senha">
        </div>
        <div class="pt-4">
          <label for="password" class="sr-only">Confirmar Senha</label>
          <input id="password" name="password" type="password" v-model="form.password_confirmation" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repita a Senha">
        </div>
      </div>


      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Registar
        </button>
      </div>
    </form>
  </div>
</div>
</template>


<script>

export default {
  name: "register",

   data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
        processing: false,
        errors: [],
      },
    };
  },
    middleware: 'guest',
   methods: {
    async submit() {
      this.form.processing = true;
      this.form.errors = [];
      try {
        await this.$axios.get("/sanctum/csrf-cookie");
        await this.$axios.post("register", this.form);
        this.form.processing = false;
        this.$toast.success('Cadastrado com sucesso !!')
      } catch (e) {
        Object.keys(e.response.data.errors).forEach((key) => {
          Object.values(e.response.data.errors[key]).forEach((error) => {
            this.form.errors.push(error);
          });
        });
      }
    },
  },
}
</script>
