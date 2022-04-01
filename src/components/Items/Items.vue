<template>
  <section id="foods">
    <div class="container">
      <div class="heading"><h2>Our Items</h2></div>
      <div class="row">
        <div
          v-for="item in items"
          :key="item._id"
          class="col-md-4 col-lg-4 col-sm-12 single-item"
        >
          <img class="w-100" :src="item.img" alt="" />
          <div class="item-info">
            <h5>{{ item.name }}</h5>
            <h6>Rating : {{ item.rating }}</h6>
            <h3>Price : {{ item.price }}</h3>
            <router-link :to="{ name: 'Details', params: { id: item._id } }"
              >Details</router-link
            >
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
    this.items = this.items.slice(0, 6);
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
.item-info h3 {
  margin: 15px 0px;
}
.item-info {
  background: #fba24f;
  padding: 25px 15px;
  border-radius: 10px;
  margin: 15px 0px;
  color: #575757;
}
.item-info a {
  text-decoration: none;
  background: #575757;
  color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 18px;
}

.item-info h3 {
  font-weight: 600;
}
.heading {
  margin: 60px 0px;
}
.heading h2 {
  color: #fba24f;
  font-weight: 600;
  letter-spacing: 2px;
  font-weight: 700;
}
</style>
>
