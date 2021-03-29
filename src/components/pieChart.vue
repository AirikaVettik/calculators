<template>
  <figure class="pie-chart" :style="pieChartStats">
    <figcaption>
      Netopalk<span style="color: #4e79a7"></span><br />Kõik maksud kokku<span
        style="color: #f28e2c"
      ></span>
    </figcaption>
    <cite> Palga kalkulaator</cite>
  </figure>
</template>
<script>

export default {
  name: "pie-chart",
  props: {
    value1: {
      type: Number,
      default: 10
    },
    value2: {
      type: Number,
      default: 90
    }
  },
  computed: {
    pieChartStats() {
      return {
        background: `radial-gradient(circle closest-side, transparent 66%, #fff 0), conic-gradient(#4e79a7 0, #4e79a7 ${this.value1}%, #f28e2c 0, #f28e2c ${this.value2}%)`,
      };
    },
  },
};
</script>
<style scoped>
.pie-chart {
  position: relative;
  width: 350px;
  max-width: 100%;
  min-height: 350px;
  margin: 20px 0;
  outline: 1px solid #ccc;
}
.pie-chart h2 {
  position: absolute;
  margin: 1rem;
}
.pie-chart cite {
  position: absolute;
  bottom: 0;
  font-size: 80%;
  padding: 1rem;
  color: gray;
}
.pie-chart figcaption {
  position: absolute;
  bottom: 1em;
  right: 1em;
  font-size: smaller;
  text-align: right;
}
.pie-chart span:after {
  display: inline-block;
  content: "";
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.4em;
  height: 0.8em;
  border-radius: 0.2em;
  background: currentColor;
}
</style>