<template>
   <div class="main-container">
       <headers />
      <div class="more-section">
          <div class="box-img">
              <img class="more-imgs" src="@/assets/service1.svg">
              </div>
              <div class="heading-first">
                  <h1>Web Development</h1>
                  <p>Our Core engineering team focuses on Software Development
                     driven by Agile, Domain Design and Test-Driven Principles.
                     We follow flexible agile development methodology to ensure complete requirement satisfaction. If you are looking for a successfull website or a web application ? we are proficient to design and build responsive customized website/web app required by your business with the use of latest technologies in a cost effective way.</p>
                  </div>
                   <div class="box-img">
              <img class="more-imgs" src="@/assets/service2.svg">
              </div>
              <div class="heading-first">
                  <h1>App Development</h1>
                  <p>Our custom application development and custom software development services include everything from a simple content website application to the most complex web based applications, electronics business applications, social network services, IOT applications and lot more. Along with application design a development we offer various services like software consulting, application integration and  application maintenance services.</p>
                  </div>
                   <div class="box-img">
              <img class="more-imgs" src="@/assets/service3.svg">
              </div>
              <div class="heading-first">
                  <h1>Digital Marketing</h1>
                  <p>RPLTechno has centered itself in the middle of digital revolution.
                     We offer world class, 3600 marketing solutions that your business needs.
                     Our team will deliver it all professionally to compete with this digital era.
                     We follow data driven effective marketing strategies delivered through customer interactions driving new ideas and thoughts each day. We do seamless end-to-end execution of projects to make sure our clients are at the top of the game.
                     </p>
                  </div>
                   <div class="box-img">
              <img class="more-imgs" src="@/assets/service4.svg">
              </div>
              <div class="heading-first">
                  <h1>SEO Management</h1>
                  <p>We have been hired by 50+ companies to make their online advertising more    profitable. We can likely help you do the same and get better conversion rates.
                  We help you turn wasteful ad spends into sustained profitability.We are focused on profitability, cost per acquisition and delivering your expected business outcomes. We do offer services for both organic and inorganic SEO having an in-house team of passionate and intelligent advertising experts and business analysts. </p>
                  </div>
                   <div class="box-img">
              <img class="more-imgs" src="@/assets/service5.svg">
              </div>
              <div class="heading-first">
                  <h1>Logo Designing</h1>
                  <p>We have a team of highly dedicated and exceptionally creative design team with huge experience in logo designing. We have designed the best creative and stunning logos for individuals and businesses. We offer everything you need to build a complete brand. We consider the core elements of your brand system so that we can use them to create beautiful, compelling and stunning logos that brings life to your brand. We believe that all your branding needs and assests are focussed under one roof.</p>
                  </div>
                   <div class="box-img">
              <img class="more-imgs" src="@/assets/service6.svg">
              </div>
              <div class="heading-first">
                  <h1>Graphic Desining</h1>
                  <p>We design the elegant, creative and stunning posters, brouchures and social media creatives for individuals and businesses.We have a team of highly dedicated and exceptionally creative design team with tons of  experience in  desigraphic designing.</p>
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
    
}
</script>
<style scoped>
.more-section{
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 5rem 0 2rem 0;
}
.box-img{
    margin: 2rem 0 4rem 5rem;
    width: 25rem;
    height: 22rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 10px 10px #00000021;
border-radius: 5px;
}
.more-imgs{
     width: 20rem;
    height: 18rem;
    margin: 2rem 0 0 2rem;
}
.heading-first{
    margin: 2rem 0 4rem 0 ;
    width: 55rem;
    height: 22rem;
    background: #20263B 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
}
.heading-first h1{
    font-size: 2rem;
     font-family: 'Ubuntu', sans-serif;
    padding: 2rem 1rem 1rem 2rem;
    color: #FFFFFF;
}
.heading-first p{
    font-size: 1.2rem;
    padding: 0 1rem 1rem 2rem;
    color: #A2A2A2;
     font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
@media screen and (max-width: 800px){
  .more-section{
    margin: 2rem 0 2rem 0;
}
.box-img{
    margin: 2rem 1rem 0 1rem;
    width: 22rem;
    height: 22rem;
   
}
.more-imgs{
     width: 20rem;
    height: 17rem;
    margin: 2rem 0 0 1rem;
}
.heading-first{
    margin: 2rem 0 3rem 0 ;
    width: 55rem;
    height: auto;
   
}
}

</style>