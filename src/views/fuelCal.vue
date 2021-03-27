<template>
  <v-container>


    <v-row>
      <v-col cols="4">
        <v-subheader align="right">Läbitud teekonna pikkus </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field 
        id="distance"
          label="Teekonna pikkus"
          value="100"
          suffix="km"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader align="right">Keskmine kütusekulu </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
        id="fuel"
          label="Kütuse kulu"
          value="5"
          suffix="l/100km"
        ></v-text-field>
      </v-col>
    </v-row>
   
    <v-row>
      <v-col cols="4">
        <v-subheader align="right">Kütuse liitri hind</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
        id="cost"
          label="Hind"
          value="1.34"
          prefix="€"
        ></v-text-field>
      </v-col>
    </v-row>
    <br><br>
    <v-divider></v-divider>
    <v-subheader class="font-weight-bold">?? vahemaa läbimiseks kulub ?? liitrit kütust.</v-subheader>
    <v-subheader class="font-weight-bold">Kütuse maksumus ??  </v-subheader>
  </v-container>
</template>
<script>
export default {

}
</script>

<style>




</style>