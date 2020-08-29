<template>
  <div class="main-header">
    <div id="app">
      <nav-bar msg="String"></nav-bar>
    </div>

    <template id="navBar">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white"
        v-bind:class=" { 'navbarOpen': show }"
      >
        <a class="navbar-brand" href="#">
          <img class="main-logo" src="@/assets/p1.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          @click.stop="toggleNavbar()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          v-bind:class="{ 'show': show }"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about">
                About
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/services">
                Services
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/blog">
                Blog
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/contact">
                Contact us
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/career">
                Career
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </template>
  </div>
</template>
 
<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
#navbarSupportedContent {
  margin-left: 40rem;
  background: white;
}
#navbarSupportedContent a {
  margin: 1rem 2.5rem 1rem 1rem;
 border: 1px solid #ccffff;
  border-radius: 6px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}


.main-logo {
  width: 10rem;
  margin: 0 0 0 3rem;
}
@media screen and (max-width: 800px) {
  #navbarSupportedContent {
    margin-left: 7rem;
    background: #000726 0% 0% no-repeat padding-box;

    opacity: 1;
  }
  #navbarSupportedContent a {
    margin: 1rem 2.5rem 1rem 1rem;
    border: none;
    font-size: 1.2rem;
    border-radius: 6px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: white;
  }
  .bg-white {
    background-color: #000726 !important;
  }
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
    background-color: white;
    color: white;
  }
  .navbar-light .navbar-toggler {
    color: white;
    border: 1.5px solid white;
  }
  .main-logo {
    width: 10rem;
    margin: 0 0 0 0;
  }
}
</style>
 
 
 
 
 
 
