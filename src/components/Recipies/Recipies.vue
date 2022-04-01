<template>
  <section class="recipies">
    <div class="row">
      <div v-for="item in recipies" :key="item.id" class="col-md-4">
        <h1>{{ item.name }}</h1>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Recipies-Area",
  data() {
    return {
      recipies: [
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
