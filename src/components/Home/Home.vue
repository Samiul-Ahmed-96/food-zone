<template>
  <Header />
  <Hero />
  <Items />
  <Footer />
</template>

<script>
import Header from "../../components/Shared/Header/Header.vue";
import Footer from "../../components/Shared/Footer/Footer.vue";
import Hero from "../../components/Hero/Hero.vue";
import Items from "../../components/Items/Items.vue";

export default {
  name: "Home-Page",
  components: {
    Header,
    Hero,
    Items,
    Footer,
  },
};
</script>
