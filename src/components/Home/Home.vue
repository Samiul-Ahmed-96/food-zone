<template>
  <Hero />
  <AboutUs />
  <Items />
</template>

<script>
import Hero from "../../components/Hero/Hero.vue";
import Items from "../../components/Items/Items.vue";
import AboutUs from "../AboutUs/AboutUs.vue";

export default {
  name: "Home-Page",
  components: {
    Hero,
    Items,
    AboutUs,
  },
};
</script>
