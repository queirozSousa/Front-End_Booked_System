<template>
<Authenticated>
    <Body />
    <Form />
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
      pais: []
    }
  },

}
</script>
