<template>
  <ul class="navbar__list">
    <router-link :to="{ name: 'home' }" custom v-slot="{ navigate, isActive }">
      <li
        role="link"
        class="navbar__item"
        :class="{ active: isActive }"
        v-for="language in languages"
        :key="language"
        @click="navigate"
      >
        {{ language.toUpperCase() }}
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
  data() {},
};
</script>
<style scoped>
.navbar__list {
  @apply flex flex-row gap-2;
}

.navbar__item {
  @apply hover:bg-gray-300 px-2 cursor-pointer;
}

.active {
  @apply bg-zinc-50 text-gray-900;
}
</style>
