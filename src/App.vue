<template>
  <v-app>
      <div class="container">
      <img width="30%" src="./assets/calculator.png">
      <NavBar />
      
        
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i>Up</button>
    </back-to-top>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar"


export default {
  name: "App",

  components: {
    NavBar
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
