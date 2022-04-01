<template>
  <section class="stuff my-5">
    <div class="container">
      <div class="section-title">
        <h2>Our <span>Stuff</span></h2>
        <p>
          Set of instructions for preparing a particular dish, including a list
          of the ingredients required. A recipe has 3 parts: Title, Ingredients
          &amp; Steps. We'll take you through.
        </p>
      </div>
      <div class="row recipes-main mt-4">
        <div
          v-for="stuff in stuffs"
          :key="stuff.id"
          class="col-md-4 single-stuff"
        >
          <img class="w-50" :src="stuff?.img" alt="" />
          <div class="stuff-detail">
            <h3>{{ stuff.name }}</h3>
            <p>{{ stuff.exp }} of experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Stuff-area",
  data() {
    return {
      stuffs: [
        {
          name: "Cristina",
          exp: "10 years",
          img: "https://i.ibb.co/DL3fw9f/img-01.png",
        },
        {
          name: "Mark",
          exp: "9 years",
          img: "https://i.ibb.co/fqxCScK/img-02.png",
        },
        {
          name: "Smith",
          exp: "8 years",
          img: "https://i.ibb.co/VYs2vnn/img-03.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
.single-stuff {
  text-align: center;
}
.stuff-detail {
  background: #fba24f;
  margin: 30px 0px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
