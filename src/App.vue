<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <div class="wrapper">
    <main>
      <RouterView />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
