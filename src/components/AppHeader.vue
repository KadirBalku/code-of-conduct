<script>
import HeaderNavigation from "./HeaderNavigation.vue";
import HeaderLogo from "./icons/HeaderLogo.vue";

export default {
  components: { HeaderNavigation, HeaderLogo },
  data() {
    return {
      defaultLanguages: ["en", "de", "it", "es", "ru"],
    };
  },
};
</script>
<template>
  <div class="header">
    <HeaderNavigation :languages="defaultLanguages"></HeaderNavigation>
    <router-link :to="{ name: 'home' }">
      <HeaderLogo />
    </router-link>
  </div>
</template>
<style scoped>
.header {
  @apply flex flex-col justify-center items-center;
}
</style>
