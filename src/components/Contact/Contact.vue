<template>
  <section class="contact my-5">
    <div class="container">
      <div class="section-title">
        <h2>Contact <span>Us</span></h2>
      </div>
      <div class="row">
        <div class="contact-from">
          <form class="form" action="#">
            <input type="text" placeholder=" Your name" />
            <input type="email" placeholder=" Your email" />
            <textarea
              name="comment"
              form="usrform"
              placeholder="your massage"
            ></textarea>
            <button class="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact-us",
};
</script>
<style scoped>
.contact-from {
  text-align: center;
  margin: 80px 0px;
}
.form input {
  width: 75%;
  padding: 10px;
  margin: 5px 0px;
}

.form textarea {
  width: 75%;
  padding: 10px;
  margin: 5px auto;
  display: block;
}
.submit-btn {
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
  margin: 20px 0px;
}
</style>
