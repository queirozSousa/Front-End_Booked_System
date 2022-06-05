<template>
<div >
  <Header />
  <Main />
</div>
</template>

<script>
import Header from '~/components/Header.vue';
import Body from '~/components/Banner.vue';
import Main from '~/components/Main.vue';


export default {
    name: "index",
    components: { Header, Body, Main, Header }
}
</script>




