<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-subheader align="right">Läbitud teekonna pikkus </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          type="number"
          label="Teekonna pikkus"
          suffix="km"
          v-model="distance"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader align="right">Keskmine kütusekulu </v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          type="number"
          label="Kütuse kulu"
          suffix="l/100km"
          v-model="fuel"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader align="right">Kütuse liitri hind</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          type="number"
          label="Hind"
          prefix="€"
          v-model="cost"
        ></v-text-field>
      </v-col>
    </v-row>
    <br /><br />
    <v-divider></v-divider>
    <v-subheader align="left" class="font-weight-bold">
      {{ distance }} km vahemaa läbimiseks kulub {{ spentFuel }} liitrit
      kütust.</v-subheader
    >
    <v-subheader align="left" class="font-weight-bold"
      >Kütuse maksumus on {{ fuelCost }} €
    </v-subheader>
  </v-container>
</template>

<script>
export default {
  name: "fuelcal",
  data() {
    return this.$store.state;
  },
  computed: {
    spentFuel() {
      return ((this.fuel / 100) * this.distance).toFixed(2);
    },
    fuelCost() {
      return (this.spentFuel * this.cost).toFixed(2);
    },
  },
};
</script>

<style>
</style>