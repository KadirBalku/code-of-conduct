<template>
  <section class="main" id="main">
    <ConductContent v-show="content === 'conduct'" />
    <RoeContent v-show="content === 'roe'" />
  </section>
</template>

<script>
import ConductContent from "@/components/ConductContent.vue";
import RoeContent from "@/components/RoeContent.vue";

export default {
  components: { ConductContent, RoeContent },
  props: { content: { type: String, required: true } },
};
</script>

<style scoped>
.main {
  @apply px-2 py-10 xs:px-24 lg:max-w-5xl xs:py-20 mx-auto;
}
</style>
