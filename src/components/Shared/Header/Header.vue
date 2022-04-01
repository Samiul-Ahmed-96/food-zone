<template>
  <section class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/"
            ><img class="logo" src="../../../img/logo.png" alt=""
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#about-us">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#foods">Foods</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#recipes">Recipes</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
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

img.logo {
  width: 150px;
}
nav .navbar-nav li {
  color: white !important;
  font-size: 20px;
  font-weight: 600;
}
nav .navbar-nav li a {
  color: #fff !important;
}
.menu ul {
  margin-left: 150px;
}

/* hero-area */
</style>
