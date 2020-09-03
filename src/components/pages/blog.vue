<template>
  <div class="main-container">
    <headers />
    <div class="bolg-section">
      <div class="first-heading">
        <h1>
          <strong>RPLTechno Blog</strong>
        </h1>
        <p>
          Explore this place for great articles and posts
          <br />of Tech and Business
        </p>
        <a href="/readmore" class="btn btn-explore">Explore More</a>

        <h1>
          <strong>Technology Consultation</strong>
        </h1>
        <p>
          Raise your business to next level with ground breaking strategy,
          <br />Latest technologies and expert advisory.
        </p>
        <a href="/contact" class="btn btn-explore">Contact Us</a>

        <h1>
          <strong>Love RPLTechno ? Join Us</strong>
        </h1>
        <p>
          Join our innovative, dedicated and passionate team.
          <br />Build the future of technology.
        </p>
        <a href="/career" class="btn btn-explore">Jobs</a>
      </div>
      <div class="blog-box">
        <img class="blog-img" src="@/assets/p12.png" />
      </div>
    </div>
    <div class="layout-blue">
      <div class="heading-second">
        <h1>
          <strong>Welcome To RPL Techno Blog</strong>
        </h1>
        <p>
          You'll find the following on this blog:
          <br />Latest articles on Technology and IT Business
          <br />Office Updates, Job Openings
          <br />And much more..
        </p>
      </div>
      <div class="welcome-section">
        <div class="welcome-box">
          <img class="welcome-img" src="@/assets/p13.png" />
          <img class="rpl-img1" src="@/assets/p15.png" />
          <h1>
            REACT VS ANGULAR WHICH
            ONE TO CHOOSE?
          </h1>
          <p>
            
            Angular is a framework for building dynamic web apps.
            React is a Js library used for building ui components.
          </p>
          <a href="/readmoreblog" class="btn btn-read">Read More>></a>
        </div>
        <div class="welcome-box">
          <img class="welcome-img" src="@/assets/p14.png" />
          <img class="rpl-img1" src="@/assets/p15.png" />

          <h1>E-COMMERCE DEVELOPMENT AT RPLTECHNO</h1>
          <p>
            Our e-commerce development solution delivers an
            effective and comprehensive e-business strategy and
            marketing hacks.
          </p>
          <a href="/readmoreblog" class="btn btn-read">Read More>></a>
        </div>
        <div class="welcome-box">
          <img class="welcome-img" src="@/assets/p13.png" />
          <img class="rpl-img1" src="@/assets/p15.png" />

          <h1>MECHINE LEARNING FOR A PRODUCT DEVELOPMENT</h1>
          <p>
            ML is turning the data evaluation
            into a tranformable and more efficient technology.
          </p>
          <a href="/readmoreblog" class="btn btn-read">Read More>></a>
        </div>
        <div class="welcome-box">
          <img class="welcome-img" src="@/assets/p14.png" />
          <img class="rpl-img1" src="@/assets/p15.png" />

          <h1>AI-PROMISE OR HYPE ?</h1>
          <p>
            AI and ML are set to tranform future of digital 
            world. Be it any sector AI is booming like a star
            with its extra-ordinary vide variety of solutions.
          </p>
          <a href="/readmoreblog" class="btn btn-read">Read More>></a>
        </div>
        <div class="welcome-box">
          <img class="welcome-img" src="@/assets/p13.png" />
          <img class="rpl-img1" src="@/assets/p15.png" />

          <h1>THINGS TO ASK YOURSELF BEFORE DEVELOPNIG AN APP</h1>
          <p>
            Should i outsource app development or do it inhouse ?
            How to market the app to set it for success ?
                        
          </p>
          <a href="/readmoreblog" class="btn btn-read">Read More>></a>
        </div>
        <div class="welcome-box">
          <img class="welcome-img" src="@/assets/p14.png" />
          <img class="rpl-img1" src="@/assets/p15.png" />

          <h1>AN OVERVIEW OF AI/ML</h1>
          <p>
            AI is a field that focus on building smart machines
            that can perform tasks which typically requires human 
            intelligence.ML empowers machines with ability to learn.
            
          </p>
          <a href="/readmoreblog" class="btn btn-read">Read More>></a>
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
.bolg-section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.first-heading {
  position: relative;
  margin: 5rem 6rem 1rem 0;
}
.first-heading h1 {
  font-size: 1.8rem;
  font-family: "Ubuntu", sans-serif;
  text-align: left;
  color: #05103a;
  padding: 0 0 0 0;
}
.first-heading p {
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  color: #559bd2;
  padding: 0 0 0 0;
}

.btn-explore {
  background: #194b84 0% 0% no-repeat padding-box;
  box-shadow: 0px 9px 9px #0000001c;
  border-radius: 9px;
  text-align: center;
  margin: 0 0 3rem 0;
  color: white;
  font-family: "Ubuntu", sans-serif;
}
.blog-box {
  margin: 2rem 0 4rem 7rem;
}
.blog-img {
  width: 55rem;
  height: 45rem;
}
.heading-second {
  margin-top: 2rem;
}
.heading-second h1 {
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 2rem;
  color: #05103a;
}
.heading-second p {
  text-align: center;
  font-size: 1.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #05103a;
}
.welcome-section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.welcome-box {
   position: relative;
  width: 22rem;
  height: 29rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 9px 9px #00000029;
  border-radius: 28px;
  margin: 5rem;
}
.welcome-box h1 {
  font-size: 1.3rem;
  font-family: "Ubuntu", sans-serif;
  line-height: 1.5;
  padding: 1.8rem 0 0 1.5rem;
  color: #05103a;
}
.welcome-box p {
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0.5rem 0.5rem 0 1.5rem;
  color: #05103a;
}
.btn-read {
  color: #00a1d4;
  font-size: 1.2rem;
  font-family: "Ubuntu", sans-serif;

  margin: 0 0 0 7rem;
}
.welcome-img {
  width: 22rem;
  height: 12rem;
}
.rpl-img1 {
  position: absolute;
  widows: 3rem;
  height: 3rem;
  top: 11rem;
  left: 1rem;
}

@media screen and (max-width: 800px) {
  .first-heading {
    margin: 2rem 0 1rem 2rem;
  }
  .first-heading h1 {
    font-size: 1.5rem;
    padding: 0 0.5rem 0 0;
  }
  .first-heading p {
    font-size: 1rem;
    padding: 0 0.5rem 0 0;
  }

  .btn-explore {
    margin: 0 0 2rem 0;
    width: 11rem;
    height: 3rem;
    font-size: 1.2rem;
  }
  .blog-box {
    order: -1;
    margin: 2rem 1rem 2rem 1rem;
  }
  .blog-img {
    width: 19rem;
    height: 19rem;
  }
  .layout-blue {
    background: #05103a 0% 0% no-repeat padding-box;
    height: 208rem;
  }
  .heading-second {
    margin-top: 1rem;
  }
  .heading-second h1 {
    font-size: 1.3rem;
    color: #ffffff;
    padding: 2rem 0 0 0;
  }
  .heading-second p {
    font-size: 1rem;
    color: #ffffff;
  }
  .welcome-box {
    width: 20rem;
    height: 29rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 9px 9px #00000029;
    border-radius: 28px;
    margin: 3rem 1rem 0 1rem;
  }
  .welcome-box h1 {
    font-size: 1.2rem;
    line-height: 1.2;
    padding: 2.5rem 0 0 1.5rem;
  }
  .welcome-box p {
    font-size: 1rem;
    padding: 0.5rem 0.5rem 0 1.5rem;
    color: #05103a;
  }
  .welcome-img {
    width: 20rem;
    height: 12rem;
  }
  .rpl-img1 {
    position: absolute;

    top: 11rem;
    left: 1rem;
  }

}
</style>