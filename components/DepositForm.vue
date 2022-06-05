<template>
  <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">


<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Informação necessária para Deposito</h3>
        <p class="mt-1 text-sm text-gray-600"> Preencha o Formulário com os seus dados solicitados..</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form  @submit.prevent="submit">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input type="text" v-model="form.name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome Completo" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Data de Apresentação</label>
                <input type="date" v-model="form.date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Valor</label>
                <input type="text" v-model="form.amout" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite o valor" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="counter" class="block text-sm font-medium text-gray-700">Agência</label>
                <select id="counter" v-model="form.name_counter" name="country" autocomplete="country-name" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled value="">Escolha a Agência</option>
                  <option v-for="item in balcao" :key="item.id" :value="item.name">{{item.name}}</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name"  class="block text-sm font-medium text-gray-700">Bilhete de Identidade</label>
                <input type="text" v-model="form.b_i" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bilhete de Identidade" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Número de Telemovel</label>
                <input type="text" v-model="form.number_cell" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de de Telemovel" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nuit</label>
                <input type="text" v-model="form.nuit" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Nuit" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nome do Beneficiário</label>
                <input type="text" v-model="form.name_of_recipient" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome do Beneficiário" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Numero do Beneficiário</label>
                <input type="text" v-model="form.number_of_recipient" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero do Beneficiário" required>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Salvar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  </main>
</template>

<script>
export default {
  name: "Deposit",
   data(){
    return{
      selected: "",
      balcao: [],
      form: {
        name: "",
        date: "",
        amout: "",
        name_counter: "",
        b_i:"",
        number_cell:"",
        nuit:"",
        name_of_recipient: "",
        number_of_recipient: "",
        processing: false,
        errors: [],
      },
    }
  },
  mounted() {
    this.getIncidents()
  },

  methods: {
    async getIncidents() {
    let res = await this.$axios.get('/api/balcao')
    console.log(res.data)
    this.balcao = res.data;
  },
    async submit() {
      this.form.processing = true;
      this.form.errors = [];
      try {
        await this.$axios.get("/sanctum/csrf-cookie");
        await this.$axios.post( `/api/deposito/${this.$auth.user.id}`, this.form);
        this.form.processing = false;
        this.$router.push({ name: 'index' })
        this.$toast.success('Deposito marcado com Sucesso !!')


      } catch (e) {
        Object.keys(e.response.data.errors).forEach((key) => {
          Object.values(e.response.data.errors[key]).forEach((error) => {
            this.form.errors.push(error);
          });
        });
      }
    },
  }
}
</script>
