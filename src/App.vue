<template>
  <v-app>
      <div class="container">
      <router-link to="./"> <img width="30%" src="./assets/calculator.png"></router-link>
      <NavBar />
      <router-view />
    <back-to-top bottom="50px" right="0px">
      <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i>Üles</button>
    </back-to-top>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"
import BackToTop from 'vue-backtotop'


export default {
  name: "App",

  components: {
    NavBar,
    BackToTop,
  },
};
</script>

<style scoped>
  .container{
    text-align: center;
    background: rgb(247, 247, 247);
  }
  .btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
  
}
</style>
