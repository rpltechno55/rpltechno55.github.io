<template>
  <div class="main-container">
    <headers />
    <div class="services-rpl">
      <div class="rpl-heading">
        <h1>LET US ENJOY THE BEST SERVICES</h1>
        <p>
          RPL Techno recognized by the best business dealers
          <br />of making them good quality of web designs
          <br />to get their end of need
        </p>
      </div>
    </div>
    <div class="services-section1">
      <div class="heading-serviecs1">
        <h1>Services From RPL Techno</h1>
        <p>
          RPLTechno is one of the Excellent Digital Marketing and Web Designing Company,
          <br />We help the Organisation to grow their Business through the modern techniques by
          <br />bringing
        </p>
        <a href="#" class="btn btn-dark">Contact Us</a>
      </div>
      <div class="mobiledevelopment">
        <img class="mobile-img" src="@/assets/services.svg" />
      </div>
    </div>
    <div class="layout-dark">
      <div class="heading-second">
        <h1>All Kind Of Services From RPL Techno</h1>
        <p>RPLTechno is one of the Excellent Digital Marketing and Web Designing Company</p>
      </div>
      <div class="all-services">
        <div class="box-1">
          <img class="box-img" src="@/assets/service1.svg" />
          <h1>Web Development</h1>
          <p>We endeavor to provide consumer with every possible digital products and services that helps them save time</p>
        </div>
        <div class="box-1">
          <img class="box-img" src="@/assets/service2.svg" />
          <h1>App Development</h1>
          <p>We endeavor to provide consumer with every possible digital products and services that helps them save time</p>
        </div>
        <div class="box-1">
          <img class="box-img" src="@/assets/service3.svg" />
          <h1>Digital Marketing</h1>
          <p>We endeavor to provide consumer with every possible digital products and services that helps them save time</p>
        </div>
        <div class="box-1">
          <img class="box-img" src="@/assets/service4.svg" />
          <h1>SEO Management</h1>
          <p>We endeavor to provide consumer with every possible digital products and services that helps them save time</p>
        </div>
        <div class="box-1">
          <img class="box-img" src="@/assets/service5.svg" />
          <h1>Logo Designing</h1>
          <p>We endeavor to provide consumer with every possible digital products and services that helps them save time</p>
        </div>
        <div class="box-1">
          <img class="box-img" src="@/assets/service6.svg" />
          <h1>Poster Desining</h1>
          <p>We endeavor to provide consumer with every possible digital products and services that helps them save time</p>
        </div>
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
.services-rpl {
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
   font-family: 'Ubuntu', sans-serif;
  text-align: center;
  font-size: 2.5rem;
  color: #05103a;
}
.rpl-heading p {
  text-align: center;
  font-size: 1.5rem;
  
  color: #05103a;
  opacity: 1;
}

.services-section1 {
  position: relative;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.heading-serviecs1 {
  margin: 10rem 1rem 1rem 0;
}
.heading-serviecs1 h1 {
  color: #05103a;
  font-size: 2.5rem;
   font-family: 'Ubuntu', sans-serif;
}
.heading-serviecs1 p {
  color: #05103a;
  font-size: 1.5rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 1rem;
}
.btn-dark {
  background: #87ffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  text-align: center;
  margin: 2rem 0 1rem 0;
  width: 10rem;
  color: #071e3d;
  font-size: 1.3rem;
   font-family: 'Ubuntu', sans-serif;
}
.mobiledevelopment {
  margin: 0 1rem 3rem 10rem;
}
.mobile-img {
  width: 35rem;
  height: 35rem;
}
.layout-dark {
  background: #05103a 0% 0% no-repeat padding-box;
}
.heading-second h1 {
  text-align: center;
  color: white;
  font-size: 1.8rem;
   font-family: 'Ubuntu', sans-serif;
  padding: 3rem 0 1rem 0;
}
.heading-second p {
  text-align: center;
  color: #a2a2a2;
  font-size: 1.1rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 0.5rem 2rem 0.5rem;
}
.all-services {
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.box-1 {
  width: 22rem;
  height: 23rem;
  margin: 4rem;
  background-image: linear-gradient(180deg, #fff 50%, #20263b 50%);

  box-shadow: 0px 10px 10px #030a24;
  border-radius: 5px;
}
.box-1 h1 {
  text-align: center;
  color: white;
  font-size: 1.8rem;
   font-family: 'Ubuntu', sans-serif;
  padding: 1rem 0 1rem 0;
}
.box-1 p {
  text-align: center;
  color: #a2a2a2;
  font-size: 1.1rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 0.5rem 2rem 0.5rem;
}
.box-img {
  width: 22rem;
  height: 11.5rem;
}

@media screen and (max-width: 800px) {
  .services-rpl {
    display: none;
  }

  .services-section1 {
    margin-top: 2rem;
  }
  .heading-serviecs1 {
    margin: 0 1rem 1rem 0;
  }
  .heading-serviecs1 h1 {
    text-align: center;
    color: #05103a;
    font-size: 2rem;
    padding: 0;
  }
  .heading-serviecs1 p {
    color: #05103a;
    font-size: 1.3rem;
    text-align: center;
    padding: 1rem 1rem 0 1rem;
  }
  .btn-dark {
    margin: 1rem 0 1rem 3rem;
   width: 17rem;
height: 4rem;
font-size: 1.8rem;
  }
  .mobiledevelopment {
    margin: 0 1rem 1rem 1rem;
    order: -1;
  }
  .mobile-img {
    width: 19rem;
    height: 19rem;
  }
  .heading-second h1 {
    font-size: 1.6rem;
    padding: 2rem 1rem 1rem 1rem;
  }
  .heading-second p {
    font-size: 1rem;
    padding: 0 0.5rem 0 0.5rem;
  }
  .all-services {
    margin-top: 0;
  }
  .layout-dark {
  height: 175rem;
}
  .box-1 {
    width: auto;
    height: 23rem;
    margin: 4rem 1rem 0 1rem;
  }
  .box-img {
    width: 20rem;
    height: 11.5rem;
  }
}
</style>