<template>
  <section class="footer">
    <footer>
      <div class="footer-content">
        <h1>food<span>Zone</span></h1>
        <p>Eat healthy to live healthy. Live healthy to live happy</p>
        <h5>designed by <span> Md. Samiul Ahmed @ 2022</span></h5>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Footer-area",
  data() {},
};
</script>

<style scoped>
/* footer */

.footer-content {
  background: #575757;
  text-align: center;
  padding: 50px;
}

.footer-content h1 {
  color: #fff;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 700;
  text-transform: uppercase;
}

.footer-content h1 span {
  color: #fba24f;
}

.footer-content p {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

.footer-content h5 {
  color: #fff;
  font-size: 14px;
  text-transform: capitalize;
  border-top: 1px solid #4c4c4c;
  padding: 20px 0px;
  margin-top: 50px;
}

.footer-content h5 span {
  color: #fc8f49;
}
</style>
