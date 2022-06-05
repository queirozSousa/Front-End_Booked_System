<template>

<main v-if="contar == '0'" class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">


<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Informação pessoal</h3>
        <p class="mt-1 text-sm text-gray-600"> Preencha o Formulário com os seus dados..</p>
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
                <label for="first-name" class="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                <input type="date" v-model="form.date_of_birth" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Residência</label>
                <input type="text" v-model="form.adress" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a sua Residência" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="country" class="block text-sm font-medium text-gray-700">Nacionalidade</label>
                <select id="country" v-model="form.nationality" name="country" autocomplete="country-name" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled value="">Escolha a Nacionalidade</option>
                  <option v-for="paises in pais" :key="paises.id" :value="paises.name">{{paises.name}}</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name"  class="block text-sm font-medium text-gray-700">Bilhete de Identidade</label>
                <input type="text" v-model="form.b_i" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bilhete de Identidade" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Número de Conta</label>
                <input type="text" v-model="form.numero_de_conta" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Conta" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nuit</label>
                <input type="text" v-model="form.nuit" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Nuit" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Número de Celular {{contar}}</label>
                <input type="text" v-model="form.numero_telefone" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Celular" required>
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

<main v-else class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">


<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Editar os dados</h3>
        <p class="mt-1 text-sm text-gray-600"> Preencha o Formulário com os seus dados..</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form  @submit.prevent="submit">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input type="text" v-model="form.name"  id="first_name"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a sua Residência"  required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                <input type="date" v-model="form.date_of_birth" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Residência</label>
                <input type="text" v-model="form.adress" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite a sua Residência" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="country" class="block text-sm font-medium text-gray-700">Nacionalidade</label>
                <select id="country" v-model="form.nationality" name="country" autocomplete="country-name" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled value="">Escolha a Nacionalidade</option>
                  <option v-for="paises in pais" :key="paises.id" :value="paises.name">{{paises.name}}</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name"  class="block text-sm font-medium text-gray-700">Bilhete de Identidade</label>
                <input type="text" v-model="form.b_i" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bilhete de Identidade" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Número de Conta</label>
                <input type="text" v-model="form.numero_de_conta" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Conta" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Nuit</label>
                <input type="text" v-model="form.nuit" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Nuit" required>
              </div>

              <div class="col-span-6 sm:col-span-3 space-y-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Número de Celular {{contar}}</label>
                <input type="text" v-model="form.numero_telefone" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero de Celular" required>
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
{{ perfil }}
</main>


</template>


<script>
export default {
  name: "Form",
    data(){
    return{
      selected: "",
      pais: [],
      contar: [],
      perfil: [],
      form: {
        name: "",
        date_of_birth: "",
        adress: "",
        nationality: "",
        b_i:"",
        numero_de_conta:"",
        nuit:"",
        numero_telefone: "",
        processing: false,
        errors: [],
      },
    }
  },
  mounted() {
    this.getIncidents(),
    this.getNumber(),
    this.getPerfil()
  },
  methods:{
    async getIncidents() {
    let res = await this.$axios.get('/api/pais')
    console.log(res.data)
    this.pais = res.data;
  },
      async getPerfil() {
    let res = await this.$axios.get(`/api/perfil/${this.$auth.user.id}`)
    this.perfil = res.data;
  },
    async getNumber() {
    let res = await this.$axios.get(`/api/perfil/${this.$auth.user.id}/number`)
    console.log(res.data)
    this.contar = res.data;
  },
      async submit() {
      this.form.processing = true;
      this.form.errors = [];
      try {
        await this.$axios.get("/sanctum/csrf-cookie");
        await this.$axios.post( `/api/perfil/${this.$auth.user.id}`, this.form);
        this.form.processing = false;
        this.$router.push({ name: 'index' })
        this.$toast.success('Perfil Criado com Sucesso !!')


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
