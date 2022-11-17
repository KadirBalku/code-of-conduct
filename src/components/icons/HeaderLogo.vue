<template>
  <div class="logo">
    <p class="logo__text">172</p>
    <div class="logo-cover">
      <p class="logo-cover__text">Code of conduct</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  @apply w-min m-auto relative;
}

.logo__text {
  @apply text-[10rem] text-amber-300;
}

.logo-cover {
  @apply absolute bg-gray-900 top-2/4 -translate-y-1/2 translate-x-1 p-1 w-full;
}

.logo-cover__text {
  @apply text-3xl p-0 text-center uppercase;
}
</style>
