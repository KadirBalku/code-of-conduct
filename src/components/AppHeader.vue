<script>
import HeaderNavigation from "./HeaderNavigation.vue";
import HeaderLogo from "./icons/HeaderLogo.vue";

export default {
  components: { HeaderNavigation, HeaderLogo },
  data() {
    return {
      defaultLanguages: ["en", "de", "fr", "it", "es", "gr", "ru"],
    };
  },
  computed: {
    title() {
      const currentPage = this.$route.name;

      return currentPage === "main" ? "code of conduct" : "rules of engagement";
    },
  },
};
</script>
<template>
  <nav id="navigation">
    <HeaderNavigation :languages="defaultLanguages"></HeaderNavigation>
  </nav>
  <router-link :to="{ name: 'roe' }">
    <HeaderLogo>{{ title }}</HeaderLogo>
  </router-link>
</template>
<style scoped>
nav {
  @apply mt-4 mx-4;
}
</style>
