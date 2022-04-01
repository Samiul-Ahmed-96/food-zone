<template>
  <section class="header">
    <div class="main-header">
      <div class="logo">
        <router-link to="/"
          ><img src="../../../img/logo.png" alt="logo"
        /></router-link>
      </div>
      <div class="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><a href="#about-us">about</a></li>
          <li><a href="#foods">Foods</a></li>
          <li><a href="">stuff</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header-area",
  data() {},
};
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-around;
}

.menu ul li {
  display: inline-block;
  padding: 25px 15px;
}

.header {
  background: #fc8f49;
}

.menu ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  transition: 0.3s;
}

.menu ul li a:hover {
  color: #575757;
}

.logo img {
  width: 150px;
  padding: 25px;
  float: right;
}

.menu ul {
  margin-left: 150px;
}

/* hero-area */
</style>
