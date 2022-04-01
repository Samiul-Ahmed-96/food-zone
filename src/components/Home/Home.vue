<template>
  <Hero />
  <AboutUs />
  <Items />
  <Recipies />
  <SubArea />
  <Stuff />
</template>

<script>
import Hero from "../../components/Hero/Hero.vue";
import Items from "../../components/Items/Items.vue";
import AboutUs from "../AboutUs/AboutUs.vue";
import Recipies from "../Recipies/Recipies.vue";
import SubArea from "../SubArea/SubArea.vue";
import Stuff from "../Stuff/Stuff.vue";

export default {
  name: "Home-Page",
  components: {
    Hero,
    Items,
    AboutUs,
    Recipies,
    SubArea,
    Stuff,
  },
};
</script>
