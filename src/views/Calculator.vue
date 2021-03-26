<template>
  <div class="calculator">
      <div class="display">{{current || '123' }}</div>
      <div @click="clear" class="btn">C</div>
      <div @click="sign" class="btn">+/-</div>
      <div @click="percent" class="btn">%</div>
      <div class="btn operator">÷</div>
      <div class="btn">7</div>
      <div class="btn">8</div>
      <div class="btn">9</div>
      <div class="btn operator">x</div>
      <div class="btn">4</div>
      <div class="btn">5</div>
      <div class="btn">6</div>
      <div class="btn operator">-</div>
      <div class="btn">1</div>
      <div class="btn">2</div>
      <div class="btn">3</div>
      <div class="btn operator">+</div>
      <div class="btn zero">0</div>
      <div class="btn">.</div>
      <div class="btn operator">=</div>
  </div>
</template>

<script>
export default {
    name: "calculator",
    data () {
        return {
            current: '',
        }
    },
    methods: {
        clear() {
            this.current = ''
        },
        sign() {
            this.current = this.current.charAt(0) === '-' ?
                this.current.slice(1) : `-${this.current}`   
        },
        percent() {
            this.current = `${parseFloat(this.current) / 100}`
        }
    }

}
</script>

<style>
.calculator {
    width: 400px;
    margin: 0 auto;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
}
.display {
    grid-column: 1 / 5;
    padding: 10px;
    background: rgba(186, 192, 191, 0.397);
}
.zero {
    grid-column: 1 / 3;
} 
.btn {
    background-color: rgba(144, 216, 192, 0.788);
    border: 1px solid rgba(0, 0, 0, 0.719);
}
.operator {
    background-color: rgba(230, 201, 121, 0.664);
}

</style>