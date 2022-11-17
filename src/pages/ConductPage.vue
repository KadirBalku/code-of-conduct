<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";
import AppFooter from "../components/AppFooter.vue";
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <div class="wrapper">
    <main>
      <AppMain :content="'conduct'" />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
