<template>
<Authenticated>
    <DepositForm />
</Authenticated>
</template>


<script>
import Body from '~/components/Banner.vue';
import Main from '~/components/Main.vue';
import Authenticated from '@/layouts/authenticated.vue';
import BookForm from '~/components/BookForm.vue';
import Banner from '~/components/Banner.vue';
import DepositForm from '~/components/DepositForm.vue';
export default {
  name: "depositPage",
  components: {Body, Main, BookForm },
middleware: 'authenticated',
  components: {
    Authenticated,
    BookForm,
    Banner,
    DepositForm
},
  data(){
    return{
      pais: []
    }
  },

}
</script>
