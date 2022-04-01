<template>
  <section>
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6 col-lg-6 col-sm-6">
          <div class="left-detail">
            <img class="w-100" :src="singleItem?.img" alt="" />
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-6">
          <div class="right-details">
            <h2>{{ singleItem?.name }}</h2>
            <p class="my-3">{{ singleItem?.description }}</p>
            <h6>Rating : {{ singleItem?.rating }}</h6>
            <h3>Price : {{ singleItem?.price }} $</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Item-Details",
  data() {
    return {
      id: this.$route.params.id,
      singleItem: {},
    };
  },
  async mounted() {
    let result = await axios.get("http://localhost:5000/items/" + this.id);
    console.log(result.data);
    this.singleItem = result.data;
  },
};
</script>

<style scoped></style>
