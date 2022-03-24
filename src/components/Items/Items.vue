<template>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="item in items" :key="item._id" class="col-md-4">
          <img class="w-100" :src="item.img" alt="" />
          <h3>{{ item.name }}</h3>
          <h2>Rating : {{ item.rating }}</h2>
          <h1>Price : {{ item.price }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Items-area",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:5000/items");
    console.log(result.data);
    this.items = result.data;
  },
};
</script>
