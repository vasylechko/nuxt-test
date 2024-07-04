<template>
  <div class="calculator__box">
    <div class="calculator-item">
      <div class="calculator-item__box">
        <NuxtIcon class="calculator-item__icon" name="Wallet" filled  />

        <div class="calculator-item__text">Wallets</div>
      </div>

      <div class="calculator-item__sum">{{counter}}</div>
    </div>

    <div>
      <div class="range-slider">
        <input class="range-slider__slider" ref="inputRange" type="range" min="0" max="1000" v-model="counter" @input="onInputRange" >

        <div class="range-slider__slider-thumb" ref="thumb"/>

        <div class="range-slider__progress" ref="progress"/>
      </div>

      <div class="calculator-item__number">
        <div v-for="number in splitIntoFourParts(0,1000)" :key=number>{{number}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";

const counter = ref<Number>(0);

let thumb = ref<object| null>(null);
let progress  = ref<object| null>(null);
const inputRange = ref<object| null>(null);


onMounted(() => {
  onInputRange()
})

function onInputRange() {
  if (inputRange.value) {
    const maxValue = inputRange.value.attributes.max.value;
    const value = (inputRange.value.value / maxValue) * 100 + "%"

    progress.value.style.width= value;
    thumb.value.style.left = value;
  }
}

function splitIntoFourParts(start:number, end:number):[]{
  let step:number = (end - start) / 4;
  let result:[] = [];

  for (let index = 0; index <= 4; index++) {
    result.push(start + step * index);
  }

  return result;
}

</script>

<style scoped lang="scss">
.calculator__box {
 &:not(:last-child) {
   margin-bottom: 2.5rem;
 }
}
.calculator-item {
  color: white;
  display: flex;
  align-items: end;
  font-family: "Sora", sans-serif;
  margin-bottom: 2.5rem;
  
  &__box {
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-right: 1rem;
  }

  &__text {
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 2.375rem;
  }

  &__sum {
    margin-left: auto;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  &__number {
    margin-top: 1.25rem;
  }
}

.calculator-item__number {
  display: flex;
  justify-content: space-between;
  color: #667098;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;
}

.range-slider {
  width: 100%;
  position: relative;
  display: flex;

  &__slider {
    -webkit-appearance: none;
    width: 100%;
    height: 0.625rem;
    outline: none;
    border-radius: 0.5rem;
    background: transparent;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.7em;
      height: 1.7em;
      cursor: pointer;
      z-index: 3;
      position: relative;
    }
  }

  &__slider-thumb {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: #1B2032;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: white;
    }
  }

  &__progress {
    width: 50%;
    height: 0.625rem;
    border-radius: 0.5rem;
    background: linear-gradient(90deg, #098EFF 0%, #3FCAFF 100%);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    pointer-events: none;
  }

}

@media (max-width: 768px) {
  .calculator__box {
    &:not(:last-child) {
      margin-bottom: 4.375rem;
    }
  }
  .calculator-item {
    margin-bottom: 2.5rem;

    &__sum {
      font-size: 1.75rem;
    }

    &__text {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    &__number {
      display: none;
    }
  }
}
</style>
