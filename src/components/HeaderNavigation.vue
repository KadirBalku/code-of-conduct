<template>
  <ul class="navbar">
    <router-link
      v-for="language in languages"
      :key="language"
      :to="{
        name: isRoeActive ? 'roe' : 'conduct',
        params: { locale: language },
      }"
      custom
      v-slot="{ navigate, isActive }"
    >
      <li
        role="link"
        class="navbar__item"
        :class="{ active: isActive }"
        @click="navigate"
      >
        <p class="navbar__link">{{ language.toUpperCase() }}</p>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    isRoeActive() {
      return this.$route.name === "roe";
    },
  },
};
</script>
<style scoped>
.navbar {
  @apply flex justify-center gap-2;
}

.navbar__item {
  @apply text-2xl cursor-pointer px-2 rounded-t-3xl rounded-bl-3xl lg:hover:outline-dashed outline-1 outline-amber-300  lg:hover:bg-opacity-25 lg:hover:bg-amber-300 lg:hover:text-zinc-50;
}

.active {
  @apply bg-amber-300 text-gray-900 underline;
}

.navbar__link {
  @apply p-2 align-middle;
}
</style>
