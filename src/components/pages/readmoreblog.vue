<template>
  <div class="main-container">
    <headers />
    <div class="more-section">
      <div class="box-img">
        <img class="more-imgs" src="@/assets/p25.png" />
        <img class="rpl-img1" src="@/assets/p15.png" />
      </div>
      <div class="heading-first">
        <h1>REACT VS ANGULAR WHICH ONE TO CHOOSE?</h1>
        <p>The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy</p>
      </div>
      <div class="box-img">
        <img class="more-imgs" src="@/assets/p25.png" />
        <img class="rpl-img1" src="@/assets/p15.png" />
      </div>
      <div class="heading-first">
        <h1>E-COMMERCE DEVELOPMENT AT RPLTECHNOLOGIES</h1>
        <p>The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy</p>
      </div>
      <div class="box-img">
        <img class="more-imgs" src="@/assets/p25.png" />
        <img class="rpl-img1" src="@/assets/p15.png" />
      </div>
      <div class="heading-first">
        <h1>MECHINE LEARNING FROM A PRODUCT DEVELOPMENT</h1>
        <p>The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy</p>
      </div>
      <div class="box-img">
        <img class="more-imgs" src="@/assets/p25.png" />
        <img class="rpl-img1" src="@/assets/p15.png" />
      </div>
      <div class="heading-first">
        <h1>AI-PROMISE OR HYPE ?</h1>
        <p>The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy</p>
      </div>
      <div class="box-img">
        <img class="more-imgs" src="@/assets/p25.png" />
        <img class="rpl-img1" src="@/assets/p15.png" />
      </div>
      <div class="heading-first">
        <h1>THINGS TO ASK YOURSELF BEFORE DEVELOPNIG AN APP</h1>
        <p>The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy</p>
      </div>
      <div class="box-img">
        <img class="more-imgs" src="@/assets/p25.png" />
        <img class="rpl-img1" src="@/assets/p15.png" />
      </div>
      <div class="heading-first">
        <h1>AN OVERVIEW OF AI/ML</h1>
        <p>The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy the users will detect when interacting with it. and the product owner has must take care The front-end of the digital product regulates how cosy</p>
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
.more-section {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 5rem 0 2rem 0;
}
.box-img {
  position: relative;
  margin: 2rem 0 4rem 5rem;
  width: 35rem;
  height: 22rem;
}
.more-imgs {
  
  width: 28rem;
  height: 16rem;
  margin: 2rem 0 0 2rem;
}
.heading-first {
  margin: 2rem 0 4rem 0;
  width: 55rem;
  height: 22rem;

  opacity: 1;
}
.heading-first h1 {
  font-size: 2rem;
  font-family: "Ubuntu", sans-serif;
  padding: 2rem 1rem 1rem 2rem;
  color: #05103a;
}
.heading-first p {
  font-size: 1.3rem;
  padding: 0 1rem 1rem 2rem;
  color: #2d3451;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.rpl-img1 {
  position: absolute;
  widows: 3rem;
  height: 3rem;
  top: 15rem;
  left: 21rem;
}

@media screen and (max-width: 800px) {
  .more-section {
    margin: 2rem 0 2rem 0;
  }
  .box-img {
    margin: 0 1rem 0 1rem;
    width: 22rem;
    height: 17rem;
  }
  .more-imgs {
    width: 20rem;
    height: 17rem;
    margin: 0 0.5rem 0 0.5rem;
  }
  .heading-first {
    margin: 0 0 4rem 0;
    width: 55rem;
    height: auto;
  }
  .heading-first h1 {
    font-size: 1.5rem;
  }

  .heading-first p {
    font-size: 1.1rem;
  }
  
.rpl-img1 {
  position: absolute;
  widows: 3rem;
  height: 3rem;
  top: 13.5rem;
  left: 12rem;
}

}
</style>