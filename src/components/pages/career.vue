<template>
  <div class="main-container">
    <headers />
    <div class="career-section1">
      <div class="hiring-heading">
        <h1>
          <span class="specail-color">We are</span>
          <br />
          <strong>Hiring!</strong>
        </h1>
        <p>RPLTechno is hiring the best developers in the industrial prospect. Anyone who is looking for jobs are welcome to Apply for the job.</p>
      </div>
      <div class="hiring">
        <img class="hiring-img" src="@/assets/p17.png" />
      </div>
    </div>
    <div class="heading-section">
      <div class="heading-second">
        <h1>
          <strong>Join The RPLTechno Team</strong>
        </h1>
        <h2>
          <q>The greatest asset of Company is its people</q>
        </h2>
        <p>-Jorge Paulo Lemann</p>
        <h4>Our team is the secret of our success that’s what made us best and we look out for the best. We are always open for people who can takeover challenges and be a part of our problems in turn developing world class solutions to our clients.</h4>
       <br>
        <h5>At RPLTechno we build relations with employees so working at RPLTechno is much more than working for any other Web development company. We run our business on passion, intensity and a charisma for responsibility and ownership. If you want to take up challenges and be a part of our awesome team filled with superhero traits please apply below we will definitely reach out to you</h5>
      </div>
    </div>
    <div class="form-section">
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
              <b-form-input id="input-3" v-model="form.phone" required placeholder="Contact number"></b-form-input>
            </b-form-group>

            <div class="uplod-file">
              <form method="post" action enctype="multipart/form-data">
                <!-- <div class="uploadExtensionError" style="display: none">Only PDF allowed!</div>Upload your CV:
                <input type="file" name="item_file" /> -->
                <input type="submit" id="submit" value="Apply Now" />
              </form>
            </div>
          </b-form>
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
.career-section1 {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.hiring-heading {
  margin: 15rem 7rem 0 1rem;
  width: 28rem;
  height: 20rem;
}
.hiring-heading h1 {
  font-size: 5rem;
  font-family: "Ubuntu", sans-serif;
  text-align: left;
  color: #05103a;
}
.specail-color {
  color: #06b8c5;
  font-family: "Ubuntu", sans-serif;
}
.hiring-heading p {
  font-size: 1.5rem;
  color: #05103a;
  padding: 2rem 0.5rem 1rem 0;
  text-align: left;
}
.hiring {
  margin: 0 0 0 5rem;
}
.hiring-img {
  width: 55rem;
  height: 52rem;
}
.heading-section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.heading-second {
  margin-bottom: 9rem;
  width: 55rem;
  height: 35rem;
}
.heading-second h1 {
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  color: #05103a;
  font-size: 2rem;
}
.heading-second h2 {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #05103a;
  font-size: 1.5rem;
  padding: 1rem 0 1rem 0;
}
.heading-second p {
  text-align: center;
  color: #05103a;
  font-size: 1rem;
}

.heading-second h4 {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #05103a;
  font-size: 1.6rem;
}
.heading-second h5 {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #05103a;
  font-size: 1.6rem;
}
.form-section {
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  
}

.form {
  margin: 0;
}
.form-group {
  width: 32rem;
  margin: 2rem;
}
#input-1 {
  border: none;
  border-bottom: 2px solid #83a4c5;
}
#input-2 {
  border: none;
  border-bottom: 2px solid #83a4c5;
}
#input-3 {
  border: none;
  border-bottom: 2px solid #83a4c5;
}
.uplod-file {
  margin-left: 2.5rem;
}

#submit {
  background: #05103a 0% 0% no-repeat padding-box;
  border-radius: 18px;
  color: white;
  font-family: "Ubuntu", sans-serif;
  margin: 2rem 0 4rem 8rem;
  width: 9rem;
  height: 2.7rem;
}
#submit:hover {
  background: lightslategray;
  color: white;
}

@media screen and (max-width: 800px) {
  .hiring {
    order: -1;
    margin: 0 0 0 1rem;
  }
  .hiring-img {
    width: 19rem;
    height: 19rem;
  }
  .hiring-heading {
    margin: 2rem 1rem 0 1rem;
    width: 28rem;
    height: 20rem;
  }
  .hiring-heading h1 {
    font-size: 3rem;
    text-align: center;
  }
  .hiring-heading p {
    font-size: 1rem;
    color: #05103a;
    padding: 1rem 0.5rem 1rem 0;
    text-align: center;
  }
  .heading-second {
    margin-bottom: 1rem;
    width: auto;
    height: auto;
  }
  .heading-second h1 {
    font-size: 1.5rem;
  }
  .heading-second h2 {
    font-size: 1rem;
    padding: 1rem 1rem 1rem 1rem;
  }
  .heading-second p {
    font-size: 0.8rem;
  }
  
  .heading-second h4 {
    text-align: center;
    color: #05103a;
    font-size: 1.1rem;
    padding: 0 1rem 0 1rem;
  }
  .heading-second h5 {
    text-align: center;
    color: #05103a;
    font-size: 1.1rem;
    padding: 0 1rem 0 1rem;
  }
  .form-group {
    width: 17rem;
    margin: 1rem;
  }
  .uplod-file {
    margin-left: 1rem;
  }
 #submit {
    background: #05103a 0% 0% no-repeat padding-box;
    border-radius: 3px;
    color: white;
    margin: 2rem 0 1rem 0;
    width: 17rem;
    height: 3rem;
    font-size: 1.2rem;
  }
}
</style>