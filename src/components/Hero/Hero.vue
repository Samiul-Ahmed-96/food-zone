<template>
  <section class="hero m-5">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <div class="left-hero">
            <h1>
              <span>Skip</span> The Diet, Just Eat Healthy With Food Network
            </h1>
            <p>
              Imagine you don't need a diet because we provide healthy and
              delicious food for you!
            </p>

            <button class="hero-btn">order food</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="right-hero">
            <img class="w-100" src="../../img/hero/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero-area",
  data() {},
};
</script>

<style scoped>
/* hero-area */
.left-hero {
  text-align: left;
}
.left-hero h1 {
  font-size: 60px;
  color: #575757;
  padding-right: 60px;
  font-weight: 600;
}

.left-hero h1 span {
  color: #fba24f;
}

.left-hero p {
  font-size: 20px;
  font-weight: 600;
  color: #878787;
  margin-bottom: 65px;
}

.hero-btn {
  padding: 20px 35px;
  background: linear-gradient(
    90deg,
    rgba(252, 143, 73, 1) 0%,
    rgba(255, 30, 30, 1) 100%
  );
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0px 0px 15px 0px #fd8f40;
  transition: 0.5s;
  cursor: pointer;
}

.hero-btn:hover {
  background: #575757;
}
</style>
