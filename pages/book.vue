<template>
<Authenticated>
    <BookForm />
</Authenticated>
</template>


<script>
import Body from '~/components/Banner.vue';
import Main from '~/components/Main.vue';
import Authenticated from '@/layouts/authenticated.vue';
import BookForm from '~/components/BookForm.vue';
import Banner from '~/components/Banner.vue';
export default {
  name: "bookPage",
  components: {Body, Main, BookForm },
middleware: 'authenticated',
  components: {
    Authenticated,
    BookForm,
    Banner
},
  data(){
    return{
      pais: [],
      count: ''
    }
  },

}
</script>
