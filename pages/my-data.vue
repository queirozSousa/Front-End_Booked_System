<template>
<Authenticated>
    <MyPerfil />
</Authenticated>
</template>


<script>
import Header from '~/components/Header.vue';
import Body from '~/components/Banner.vue';
import Main from '~/components/Main.vue';
import MyPerfil from '~/components/MyPerfil.vue';
import Authenticated from '@/layouts/authenticated.vue';
export default {
  name: "markingPage",
   middleware: 'authenticated',
  components: { Header, Body, Main, MyPerfil, Authenticated},



}
</script>
