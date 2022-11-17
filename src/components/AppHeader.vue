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
  <nav id="navigation">
    <HeaderNavigation :languages="defaultLanguages"></HeaderNavigation>
  </nav>
  <router-link :to="{ name: 'home' }">
    <HeaderLogo />
  </router-link>
</template>
<style scoped>
nav {
}
</style>
