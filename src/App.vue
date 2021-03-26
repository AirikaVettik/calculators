<template>
  <v-app>
      <div class="container">
      <img width="20%" src="./assets/calculator.png">
      <NavBar />
      
        

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
</style>
