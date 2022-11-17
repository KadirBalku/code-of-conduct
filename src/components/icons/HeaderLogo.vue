<template>
  <div class="logo">
    <p class="logo__text">172</p>
    <div class="logo-cover">
      <p class="logo-cover__text"><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  @apply relative transition-colors ease-in-out duration-700 text-opacity-20 hover:text-opacity-60 text-amber-300;
}

.logo__text {
  @apply text-[10rem]  text-center;
}

.logo-cover {
  @apply absolute bg-gray-900 top-2/4 -translate-y-1/2 translate-x-1 p-1 w-full;
}

.logo-cover__text {
  @apply text-3xl p-0 text-center uppercase text-zinc-50;
}
</style>
