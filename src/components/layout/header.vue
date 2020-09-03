<template>
  <div class="main-header">
    <div id="app">
      <nav-bar msg="String"></nav-bar>
    </div>

    <template id="navBar">
      <b-navbar class="navbar navbar-light bg-white" toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand class="navbar-brand" href="/"><img class="main-logo" src="@/assets/p1.png" /></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav id="navbarSupportedContent" class="nav-item ml-auto">
              <b-nav-item href="/">HOME</b-nav-item>
              <b-nav-item href="/about">ABOUT</b-nav-item>
              <b-nav-item href="/services">SERVICES</b-nav-item>
              <b-nav-item href="/blog">BLOG</b-nav-item>
              <b-nav-item href="/career">CAREER</b-nav-item>
              <b-nav-item href="/contact">CONTACT</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
         </b-navbar>
    </template>
  </div>
</template>
 
<script>//RPLTechno
</script>
<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: #071e3d;
    margin: 0 2rem 0 2rem;
    font-family: 'Ubuntu', sans-serif;
}
.navbar-dark .navbar-nav .nav-link:hover {
    color: #071e3d;
    
}
.navbar-dark .navbar-nav .nav-link:active {
  color: #071e3d;
   border: 1px solid #ccffff;
  border-radius: 6px;
}
.main-logo {
  width: 10rem;
  margin: 0 0 0 3rem;
}
@media screen and (max-width: 800px) {
  .navbar-dark .navbar-nav .nav-link {
    color: white;
    margin: 0 0 1rem 9rem;
}
.navbar-dark .navbar-nav .nav-link:hover {
    color: white;
}
.navbar-dark .navbar-nav .nav-link:active {
 color: white;
  border: none;
  border-radius: none;
}
  .bg-white {
    background-color: #000726 !important;
     
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
 
 
 
 
 
 
