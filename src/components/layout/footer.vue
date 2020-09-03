<template>
  <div class="main-container">
    <div class="footer-secetion">
      <div class="left1">
        <h1>RPLTECHNO (P) LTD</h1>
        <hr class="line" />
        <p>
          RPLTechno is a promising
          <br />startup
          <br />working on Application
          <br />development,
          <br />digital branding,
          <br />SEO and Digital
          <br />AD-boards
        </p>
      </div>
      <div class="left2">
        <h1>USEFUL LINKS</h1>
        <hr class="line" />
        <p>
          About Us
          <br />Services
          <br />Contact Us
          <br />Get A Quote
          <br />Digital Ad-Boards
        </p>
      </div>
      <div class="center">
        <h1>THE SERVICES</h1>

        <hr class="line" />
        <p>
          Website Development
          <br />App Development
          <br />Digital Marketing
          <br />SEO
          <br />Logo Design
        </p>
      </div>
      <div class="right">
        <h1>CONTACT US</h1>
        <hr class="line3" />
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/emailwhite.svg" />info@rpltechno.com</a>
        </p>
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/locationwhite.svg" />7795598779</a>
        </p>
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/locationwhite.svg" /> 6366178925</a>
        </p>
        <p>
          <a href="#" class="white"> <img class="contact-img" src="@/assets/phonewhite.svg" />KR Puram, Bangalore</a>
        </p>
        <p>
           <a href="#" class="white"><img class="contact-img" src="@/assets/phonewhite.svg" />Bensontown, Bangalore</a>
        </p>
      </div>
      <hr class="line2" />
      <p>© 2019 RPLTechno IT Services Pvt LTD. ALL rights reserved</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-secetion {
  position: relative;
  margin-top: .1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background: transparent linear-gradient(180deg, #000f44 0%, #05103a 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
}

.left1 h1 {
  padding: 3rem 0 0 0;
   font-family: "Ubuntu", sans-serif;
  font-size: 1.3rem;
  color: #d2d2d2;
}
.left1 p {
  font-size: 1rem;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}

.left2 h1 {
  padding: 3rem 0 0 0;
  font-size: 1.3rem;
   font-family: "Ubuntu", sans-serif;
  color: #d2d2d2;
}
.left2 p {
  font-size: 1rem;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}

.center h1 {
  padding: 3rem 0 0 0;
  font-size: 1.3rem;
   font-family: "Ubuntu", sans-serif;
  color: #d2d2d2;
}
.center p {
  font-size: 1rem;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}

.right h1 {
  padding: 3rem 0 0 0;
  font-size: 1.3rem;
   font-family: "Ubuntu", sans-serif;
  color: #d2d2d2;
}
.right p {
  font-size: 1rem;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #d2d2d2;
}
.line {
  width: 100%;
  border: 1px solid #4463d1;
  opacity: 1;
}
.line2 {
  width: 100%;
  border: 0.1px solid #4463d1;
  opacity: 1;
}
.line3 {
  width: 70%;
  border: 0.1px solid #4463d1;
  opacity: 1;
}
.contact-img {
  width: 2rem;
  height: 1rem;
}
.footer-secetion p {
  color: #d2d2d2;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.white{
  color: white;
}
@media screen and (max-width: 800px) {
  .footer-secetion {
    margin-top: 0;
    justify-content: space-around;
  }
  .left1 {
    margin: 0 0 0 0;
  }
  .left1 h1 {
    padding: 2rem 0 0 0;
    font-size: 1rem;
  }
  .left1 p {
    font-size: 0.9rem;
    line-height: 1.3;
  }
  .left2 h1 {
    padding: 2rem 0 0 0;
    font-size: 1rem;
  }
  .left2 p {
    font-size: 0.9rem;
    line-height: 1.3;
  }
  .center h1 {
    padding: 2rem 0 0 1rem;
    font-size: 1rem;
  }
  .center p {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 0 0 1rem;
  }
  .right h1 {
    padding: 2rem 0 0 2rem;
    font-size: 1rem;
  }
  .right p {
    font-size: 0.9rem;
    line-height: 1.3;
    padding: 0 1rem 0 0;
  }
  .line {
    width: 100%;
    border: 1px solid #4463d1;
  }
  .line2 {
    width: 100%;
    border: 0.1px solid #4463d1;
  }
  .line3 {
    width: 60%;
    border: 1px solid #4463d1;
    margin: 1rem 0 0.5rem 2rem;
  }
  .footer-secetion p {
    padding: 0 0 0 1rem;
  }
}
</style>