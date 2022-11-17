<template>
  <section class="main" id="main">
    <MainContent />
  </section>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

export default {
  components: { MainContent },
  props: { route: String },
  created() {
    console.log(this.$route.query.locale);
  },
};
</script>

<style scoped>
.main {
  @apply px-2 py-10 xs:px-24 lg:max-w-5xl xs:py-20 mx-auto;
}
</style>
