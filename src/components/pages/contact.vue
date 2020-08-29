<template>
  <div class="main-container">
    <headers />
    <div class="services-rpl">
      <div class="rpl-heading">
        <h1>
          GET IMMEDIATE RESPONSE FROM
          <br />RPL TECHNO
        </h1>
        <p>
          RPL Techno recognized by the best business dealers
          <br />of making them good quality of web designs
          <br />to get their end of need
        </p>
      </div>
    </div>
    <div class="contact-form">
      <div class="contact-box">
        <img class="man-img" src="@/assets/contact1.svg" />
      </div>
      <div class="form">
        <div class="form-group">
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input id="input-1" v-model="form.name" required placeholder="Name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                required
                placeholder="Email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-input id="input-3" v-model="form.phone" required placeholder="Phone number"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label-for="input-4">
              <b-form-input
                id="textarea"
                v-model="form.text"
                required
                placeholder="Message"
                rows="3"
                max-rows="6"
              ></b-form-input>
            </b-form-group>
            <pre class="mt-3 mb-0">{{ text }}</pre>
            <div class="submit-button">
              <b-button type="submit" variant="primary">Submit</b-button>
            </div>
            <hr class="line" />
            <h1 class="special">
              OTHER WAYS TO
              <br />
              <strong>CONTACT US</strong>
            </h1>

            <div class="contact-logo">
              <div class="fb1">
                <p>
                  <img class="all-img" src="@/assets/call.svg" />7795598779
                </p>
                <p>
                  <img class="all-img" src="@/assets/email.svg" />info@rpltechno.com
                </p>
                <p>
                  <img class="all-img" src="@/assets/email1.svg" />www.yourdomain.com
                </p>
              </div>

              <div class="fb2">
                <p>
                  <img class="all-img" src="@/assets/fb.svg" />RPLTechno
                </p>
                <p>
                  <img class="all-img" src="@/assets/tw.svg" />RPLTechno_tech
                </p>
                <p>
                  <img class="all-img" src="@/assets/tw1.svg" />_RPLTechno
                </p>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
    <div class="third-heading">
      <h1>
        <strong>Find us here</strong>
      </h1>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.49981790246!2d77.65717871424663!3d12.999812188631498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1109c51e34e5%3A0xe3e4281694d06515!2sRpl%20Techno%20It%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1598441263522!5m2!1sen!2sin"
        width="1800"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
  },
  data() {
    return {
      form: {},
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.text = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
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
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 3rem;
  color: #05103a;
}
.rpl-heading p {
  text-align: center;
  font-size: 1.7rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #05103a;
  opacity: 1;
}
.contact-form {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background: #05103a 0% 0% no-repeat padding-box;
}
.contact-box {
  margin: 3rem 10rem 1rem 1rem;
}
.man-img {
  width: 35rem;
  height: 39rem;
  margin: 5rem 10rem 0 0;
}
.form {
  margin: 10rem 3rem 8rem 1rem;
}
.form-group {
  width: 20rem;
  margin: 2rem;
}
.btn-primary {
  color: white;
  background: #45e68d 0% 0% no-repeat padding-box;
  font-size: 1.2rem;
  font-family: "Ubuntu", sans-serif;
  width: 10rem;
  margin-left: 2rem;
  border-radius: 10rem;
  border: #45e68d;
}
.line {
  width: 115%;
  border: 0.8100000023841858px solid #b1b1b1;
}
.contact-form .special {
  font-size: 1.3rem;
  color: #e5e5e5;
  text-align: center;
  padding: 2rem 0 1rem 0;
}
.contact-form p {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.all-img {
  width: 3rem;
  height: 2rem;
}
.contact-logo {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  width: 30rem;
}
.fb1 {
  margin: 0 1.7rem 0 0;
}
.fb2 {
  margin: 0 1.7rem 0 0;
}
.third-heading {
  padding: 3rem 0 2rem 12rem;
  color: #05103a;
}
.map {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
@media screen and (max-width: 800px) {
  .services-rpl {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: none;
  }
  .rpl-heading {
    margin: 0;
  }
  .rpl-heading h1 {
    position: absolute;
    text-align: right;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    top: 13rem;
    padding: 0 2rem 0 0;
    z-index: 1;
  }
  .rpl-heading p {
    display: none;
  }
  .contact-box {
    margin: 3rem 10rem 1rem 1rem;
  }
  .man-img {
    width: 25rem;
    height: 25rem;
    margin: 2rem 3rem 0 0;
  }
  .form {
    margin: 1rem 3rem 1rem 0;
  }
  .form-group {
    width: 20rem;
    margin: 1.5rem;
  }
  .btn-primary {
    color: black;
    background: #87ffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #000720;
    border-radius: 3px;
    opacity: 1;
    font-size: 1.5rem;
    width: 17rem;
    margin-left: 3rem;
  }
  .line {
    display: none;
  }
  .contact-form .special {
    font-size: 1.4rem;
    padding: 3rem 0 1rem 2rem;
  }
  .contact-logo {
    width: auto;
    height: auto;
    background: #05103a 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #000516;
    border-radius: 3px;
    opacity: 1;
    margin: 1rem 0 1rem 2rem;
  }
  .fb1 {
    margin: 0 0 0 0;
    padding: 1rem 0 1rem 0;
  }
  .third-heading {
    display: none;
  }
  .map {
    display: none;
  }
}
</style>