<template>
  <section id="foods">
    <div class="container">
      <div class="heading"><h1>Our Items</h1></div>
      <div class="row">
        <div
          v-for="item in items"
          :key="item._id"
          class="col-md-4 col-lg-4 col-sm-12 single-item"
        >
          <img class="w-100" :src="item.img" alt="" />
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <h2>Rating : {{ item.rating }}</h2>
            <h1>Price : {{ item.price }}</h1>
          </div>
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

<style scoped>
.single-item {
  border-radius: 10px;
  padding: 20px;
  color: rgb(32, 32, 32);
  text-align: center;
}
.single-item img {
  width: 100%;
}
.item-info {
  background: #fba24f;
  padding: 15px;
  border-radius: 10px;
  margin: 30px 0px;
  color: #575757;
}
.item-info h3 {
  font-weight: 600;
}
.heading {
  margin: 60px 0px;
}
.heading h1 {
  font-size: 60px;
  color: #fba24f;
  font-weight: 600;
  letter-spacing: 2px;
}
</style>
>
