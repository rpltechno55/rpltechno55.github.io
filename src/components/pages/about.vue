<template>
  <div class="main-container">
    <headers />
    <div class="about-rpl">
      <div class="rpl-heading">
        <h1>ABOUT RPL TECHNO</h1>
        <p>
          RPL Techno recognized by the best business dealers
          <br />of making them good quality of web designs
          <br />to get their end of need
        </p>
      </div>
    </div>
    <div class="about-section">
      <div class="about-img">
        <img class="computer-img" src="@/assets/about.svg" />
      </div>
      <div class="heading-first">
        <h1>About Us</h1>
        <p>
          RPLTechno is one of the Excellent Digital Marketing and Web Designing Company, We help the Organisation to grow their Business through the modern techniques by bringing. RPLTechno is one of the Excellent Digital Marketing and Web Designing Company, We help the Organisation to grow their Business through the modern techniques by bringing. RPLTechno is one of
          <br />
          <br />The Excellent Digital Marketing and Web Designing Company, We help the Organisation to grow their Business through the modern techniques by bringing. RPLTechno is one of the Excellent Digital Marketing and Web Designing Company, We help the Organisation to grow their Business through the modern techniques by bringing.
        </p>
      </div>
    </div>
    <footers />
  </div>
</template>
<script>
import headers from "@/components/layout/header.vue";
import footers from "@/components/layout/footer.vue";
export default {
  components: {
    headers,
    footers
  }
};
</script>
<style scoped>
.about-rpl {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/p20.png");
  background-size: 100% 100%;
}
.rpl-heading {
  margin: 12rem 1rem 12rem 1rem;
}
.rpl-heading h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #05103a;
  font-family: 'Ubuntu', sans-serif;
}
.rpl-heading p {
  text-align: center;
  font-size: 1.5rem;
  color: #05103a;

  opacity: 1;
}
.about-section {
  position: relative;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #05103a 0% 0% no-repeat padding-box;
}
.about-img {
  order: 1;
  margin: 3rem 3rem 2rem 15rem;
}

.computer-img {
  width: 35rem;
  height: 35rem;
}
.heading-first {
  margin: 3rem 9rem 1rem 1rem;
  width: 33rem;
  height: 30rem;
}
.heading-first h1 {
  font-size: 3rem;
   font-family: 'Ubuntu', sans-serif;
  padding: 0 0 2rem 0;
  text-align: left;
  color: #ffffff;
}
.heading-first p {
  font-size: 1.2rem;
  text-align: left;
  color: #b9b9b9;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

 
}
@media screen and (max-width: 800px) {
  .about-rpl {
    display: none;
  }
  .about-section {
    margin-top: 0;
  }
  .about-img {
    order: 0;
    margin: 3rem 1rem 2rem 1rem;
  }
  .computer-img {
    width: 18rem;
    height: 18rem;
  }
  .heading-first {
    margin: 3rem 1rem 1rem 2rem;
    width: 33rem;
    height: 33rem;
  }
  .heading-first h1 {
    font-size: 2rem;
    padding: 0 0 1rem 0;
    text-align: center;
  }
  .heading-first p {
    font-size: 1rem;
    text-align: center;
    color: #b9b9b9;
  }
}
</style>