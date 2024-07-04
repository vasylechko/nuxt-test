<template>
    <div class="calculator">
      <div class="calculator__container">
        <CalculatorItem v-for="index in 3" :key="index"/>
      </div>
    </div>
</template>

<style scoped lang="scss">
.calculator {
  padding: 6.25rem 1rem;
  background-color: #080B18;
  display: flex;
  justify-content: center;

  &__container{
    max-width: 38.75rem;
    width: 100%;
    background-color: #FFFFFF03;
    border: 2px solid #FFFFFF08;
    border-radius: 1.5rem;
    padding: 3.75rem;
  }
}

@media (max-width: 768px) {
  .calculator{
    &__container{
      padding: 3.75rem 1.875rem;
    }
  }
}
</style>