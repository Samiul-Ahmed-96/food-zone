<template>
  <section class="header">
    <div class="main-header">
      <div class="logo">
        <a href="index.html"><img src="../../../img/logo.png" alt="logo" /></a>
      </div>
      <div class="menu">
        <ul>
          <li><a href="index.html">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#recipies">recipies</a></li>
          <li><a href="#stuff">stuff</a></li>
          <li><a href="#contact">contact</a></li>
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
}

.logo {
  width: 30%;
}

.menu {
  width: 70%;
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
