<template>
  <Header />
  <Hero />
  <Items />
  <Footer />
</template>

<script>
import Header from "./components/Shared/Header/Header.vue";
import Footer from "./components/Shared/Footer/Footer.vue";
import Hero from "./components/Hero/Hero.vue";
import Items from "./components/Items/Items.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Items,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
