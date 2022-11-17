<script>
import HeaderNavigation from "./HeaderNavigation.vue";
import HeaderLogo from "./icons/HeaderLogo.vue";

export default {
  components: { HeaderNavigation, HeaderLogo },
  data() {
    return {
      defaultLanguages: ["en", "de", "fr", "it", "es", "gr", "ru"],
      pageState: true,
    };
  },
  computed: {
    title() {
      return this.pageState ? "Rules of Engagement" : "Code of Conduct";
    },
  },
  methods: {
    isPageRoe(e) {
      if (e) {
        this.pageState = true;
      } else if (e === false) {
        this.pageState = false;
      }
    },
  },
};
</script>
<template>
  <nav id="navigation">
    <HeaderNavigation
      :languages="defaultLanguages"
      :is-roe-active="pageState"
      @page-toggle-state="isPageRoe()"
    ></HeaderNavigation>
  </nav>

  <HeaderLogo>{{ title }}</HeaderLogo>
</template>
<style scoped>
nav {
  @apply mt-4 mx-4;
}
</style>
