<template>
  <section class="main" id="main">
    <MainContent />
  </section>
</template>

<script>
import MainContent from "@/components/MainContent.vue";

export default { components: { MainContent } };
</script>

<style scoped>
.main {
  @apply px-2 py-20 lg:max-w-5xl  mx-auto xs:px-24;
}
</style>
