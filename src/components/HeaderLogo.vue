<template>
  <div class="logo" :class="{ active: isRoeActive }">
    <p class="logo__text">172</p>
    <div class="logo-cover">
      <router-link
        :to="{
          name: isRoeActive ? 'roe' : 'conduct',
          params: { locale: $route.params.locale },
        }"
        ><p
          class="logo-cover__text"
          @click="this.isRoeActive = !this.isRoeActive"
        >
          <slot></slot>
        </p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.logo {
  @apply relative transition-all ease-in-out duration-700 text-opacity-20 text-amber-300;
}

.active {
  @apply transition-all ease-in-out duration-700 text-opacity-60;
}

.logo__text {
  @apply text-[12rem]  text-center;
}

.logo-cover {
  @apply absolute bg-gray-900 top-2/4 -translate-y-1/2 translate-x-1 p-1 w-full;
}

.logo-cover__text {
  @apply text-4xl p-0 text-center uppercase text-zinc-50 cursor-pointer transition-colors ease-in-out duration-700 lg:hover:text-amber-300;
}
</style>

<script>
export default {
  data() {
    return { isRoeActive: this.$route.name === "roe" };
  },
};
</script>
