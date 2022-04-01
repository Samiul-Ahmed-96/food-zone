<template>
  <section class="subscribe py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-2">
          <div class="subs-item">
            <h1>700k</h1>
            <p>Youtube Subscribers</p>
          </div>
        </div>
        <div class="col-md-4 mt-2">
          <div class="subs-item">
            <h1>2.4m</h1>
            <p>Instagram Followers</p>
          </div>
        </div>
        <div class="col-md-4 mt-2">
          <div class="subs-item">
            <h1>100k</h1>
            <p>Dribbble Shot Likes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Sub-area",
};
</script>
<style scoped>
.subs-item {
  text-align: center;
  background: #fff;
  box-shadow: 0px 0px 15px 0px #d5d5d5;
  padding: 20px;
  border-radius: 20px;
}
.subs-item h1 {
  font-size: 48px;
  color: #18191f;
  margin: 0;
}
</style>
