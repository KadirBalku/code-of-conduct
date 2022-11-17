<script>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";

export default {
  components: { HeaderNavigation, HeaderLogo },
  props: {},
  data() {
    return {
      defaultLanguages: ["en", "de", "fr", "it", "es", "gr", "ru"],
      pageState: this.$route.name,
    };
  },
  computed: {
    title() {
      return this.pageState === "roe"
        ? "Rules of Engagement"
        : "Code of Conduct";
    },
  },
  methods: {},
  created() {},
};
</script>
<template>
  <nav id="navigation">
    <HeaderNavigation :languages="defaultLanguages"></HeaderNavigation>
  </nav>

  <HeaderLogo>{{ title }}</HeaderLogo>
</template>
<style scoped>
nav {
  @apply mt-4 mx-4;
}
</style>
