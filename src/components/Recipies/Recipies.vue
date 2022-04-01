<template>
  <section id="recipes" class="Recipes my-5">
    <div class="container">
      <div class="section-title">
        <h2>Our <span>Recipes</span></h2>
        <p>
          Set of instructions for preparing a particular dish, including a list
          of the ingredients required. A recipe has 3 parts: Title, Ingredients
          &amp; Steps. We'll take you through.
        </p>
      </div>
      <div class="row recipes-main mt-4">
        <div
          v-for="item in recipes"
          :key="item.id"
          class="col-md-4 single-recipe"
        >
          <img class="w-75" :src="item?.img" alt="" />
          <div class="recipe-detail">
            <h4>{{ item.name }}</h4>
            <p>{{ item.des }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Recipes-Area",
  data() {
    return {
      recipes: [
        {
          id: "1",
          name: "Chocolate Item",
          img: "https://i.ibb.co/Rch8kN4/recipies-1.png",
          des: "Celebrate Easter with this deliciously easy, double choc Easter cheesecake, drizzled with milk chocolate sauce.",
        },
        {
          id: "2",
          name: "Vegetable Item",
          img: "https://i.ibb.co/nw9tjx8/recipies-2.png",
          des: "Celebrate Easter with this deliciously easy, double choc Easter cheesecake, drizzled with milk chocolate sauce.",
        },
        {
          id: "3",
          name: "Salad Item",
          img: "https://i.ibb.co/Q8Hss0x/recipies-3.png",
          des: "Celebrate Easter with this deliciously easy, double choc Easter cheesecake, drizzled with milk chocolate sauce.",
        },
      ],
    };
  },
};
</script>
<style>
.single-recipe {
  text-align: center;
}
.single-recipe img {
  width: 100%;
  border-radius: 20px;
  margin: 10px 0px;
}
.section-title {
  text-align: center;
  margin: auto;
}
.section-title h2 {
  font-size: 36px;
  text-transform: capitalize;
  color: #575757;
  font-weight: 700;
}
.section-title h2 span {
  color: #fc8f49;
}
.section-title p {
  font-size: 18px;
  color: #252525;
  line-height: 2;
}

.recipe-detail {
  padding: 20px 30px;
}
</style>
