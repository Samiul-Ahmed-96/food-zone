<template>
  <Hero />
  <AboutUs />
  <Items />
  <Recipies />
</template>

<script>
import Hero from "../../components/Hero/Hero.vue";
import Items from "../../components/Items/Items.vue";
import AboutUs from "../AboutUs/AboutUs.vue";
import Recipies from "../Recipies/Recipies.vue";

export default {
  name: "Home-Page",
  components: {
    Hero,
    Items,
    AboutUs,
    Recipies,
  },
};
</script>
