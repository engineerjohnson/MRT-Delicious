<template>
<div>
  <p class="placeholder-glow">
    <span class="placeholder col-12"></span>
  </p>
  <p class="placeholder-glow">
    <span class="placeholder col-4 me-2"></span>
    <span class="placeholder col-7"></span>
  </p>
  <p class="placeholder-glow">
    <span class="placeholder col-3 me-2"></span>
    <span class="placeholder col-6 me-2"></span>
    <span class="placeholder col-2"></span>
  </p>
  <p class="placeholder-glow">
    <span class="placeholder col-3 me-2"></span>
    <span class="placeholder col-2 me-2"></span>
    <span class="placeholder col-2 me-2"></span>
    <span class="placeholder col-3"></span>
  </p>
  <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></a>
</div>
</template>

<style scoped>
a>.placeholder{
  transform: translateX(90%);
}
</style>