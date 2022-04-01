<template>
  <section id="about-us" class="about-us">
    <div class="container main-about">
      <div class="row align-items-center">
        <div class="col-md-6 col-sm-12 col-lg-6">
          <div class="left-about">
            <img class="w-100 p-4" src="../../img/about/about.png" alt="" />
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6">
          <div class="right-about">
            <h1>about us</h1>
            <p>
              As well known and we are very busy all days advice you. advice you
              to call us of before arriving, so we can guarantee your seat.
              advice you to call us of before arriving, so we canAs well known
              and we are very busy all days advice you. advice you to call us of
              before arriving.
            </p>
            <router-link to="/contact" class="hero-btn">Contact us</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.about-us {
  background: url(https://i.ibb.co/6b5MVtf/background-3.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  margin: 80px;
  border-radius: 20px;
}

.right-about h1 {
  font-size: 60px;
  color: #575757;
  text-transform: capitalize;
}
.main-about {
  padding: 60px 0px;
}
.right-about p {
  font-size: 20px;
  font-weight: 500;
  color: #878787;
  text-align: justify;
  margin: 60px 0px;
  line-height: 2;
  padding: 20px;
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
  box-shadow: 0px 0px 15px 0px #fd8f40;
  transition: 0.5s;
  cursor: pointer;
  text-decoration: none;
}

.right-about button {
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
  box-shadow: 0px 0px 15px 0px #fd8f40;
  transition: 0.5s;
  cursor: pointer;
}
.right-about button:hover {
  background: #575757;
}
</style>
