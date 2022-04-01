<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Shared/Header/Header.vue";
import Footer from "./components/Shared/Footer/Footer.vue";
export default {
  components: { Header, Footer },
  name: "App",
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
