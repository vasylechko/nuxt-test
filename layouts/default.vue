<template>
  <main class="container">
    <slot/>
  </main>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 6.25rem 0 12.5rem 0;
  min-height: 100vh;
  box-sizing: border-box;
}

@media (max-width: 620px) {
  .container {
    padding: 2.5rem 0;
  }
}
</style>