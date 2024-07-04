<template>
  <div>
    <div class="section-box">
      <div class="section-box__title">Supported Protocols</div>

      <div class="section-box__text">Supports a variety of Ethereum networks for seamless exchanges</div>
    </div>

    <Protocols class="protocols" :data="protocols"/>

    <Calculator />
  </div>
</template>

<script setup lang="ts">
import { protocols } from "~/configs/data"

</script>

<style lang="scss">
.section-box{
  font-family: "Sora", sans-serif;
  text-align: center;
  margin-bottom: 5rem;

  &__title{
    font-size: 3.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 4.225rem;
  }

  &__text {
    font-size: 1.375rem;
    line-height: 2.125rem;
  }
}

.protocols {
  padding: 0 1rem 6.25rem;
}

@media (max-width: 768px) {
  .section-box{
    padding: 0 1.25rem;
    margin-bottom: 2.5rem;

    &__title,
    &__text {
      text-align: start;
    }
  }
}

@media (max-width: 620px) {
  .protocols {
    padding: 0 1rem 2.5rem;
  }

  .section-box__title{
    max-width: 12.5rem;
    font-size: 2.125rem;
    line-height: 3rem;
    font-weight: 800;
    text-align: start;

  }
  .section-box__text{
    max-width: 20.25rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.625rem;
    text-align: start;
    color: #131727CC;

  }
}
</style>