<template>
<Authenticated>
    <Body />
    <Form />
    {{ count }}
</Authenticated>
</template>


<script>
import Body from '~/components/Banner.vue';
import Main from '~/components/Main.vue';
import Form from '~/components/Form.vue';
import Authenticated from '@/layouts/authenticated.vue';
export default {
  name: "markingPage",
  components: {Body, Main, Form },
middleware: 'authenticated',
  components: {
    Authenticated
},
  data(){
    return{
      pais: [],
      count: ""
    }
  },
   mounted() {
    this.getNumber()
  },
  methods:{
    async getNumber() {
    let res = await this.$axios.get(`/api/perfil/${this.$auth.user.id}/number`)
    console.log(res.data)
    this.count = res.data;
  },
  }

}
</script>
