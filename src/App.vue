<template>
  <v-app>
      <div class="container">
      <router-link to="./"> <img width="30%" src="./assets/calculator.png"></router-link>
      <NavBar />
      <router-view />
    <back-to-top visibleoffset="100">
      <img width="20%" align="right" src="./assets/arrow-up.png" alt="">
    </back-to-top>
    <Footer />
    </div>

  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"
import BackToTop from 'vue-backtotop'
import Footer from "./components/Footer"
import 'material-design-icons-iconfont/dist/material-design-icons.css'


export default {
  name: "App",

  components: {
    NavBar,
    BackToTop,
    Footer
  },
};
</script>

<style scoped>
  .container{
    text-align: center;
    align-content: center;
    background: rgb(247, 247, 247);
    max-width: 500px;
  }
</style>
