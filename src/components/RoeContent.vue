<script>
import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import ServerIcon from "@/components/icons/ServerIcon.vue";
import LocaleParagraph from "@/components/locales/roe/TemplateParagraph.vue";
import TitleSelection from "@/components/locales/roe/titles.json";

export default {
  components: { DiscordIcon, ServerIcon, LocaleParagraph },
  data() {
    return { localeTitle: TitleSelection[0] };
  },
  computed: {
    pageTitle() {
      return this.localeTitle[this.$route.params.locale]
        ? this.localeTitle[this.$route.params.locale]
        : "Rules of Engagement (RoE)";
    },
  },
};
</script>

<template>
  <section id="roe">
    <div class="article__title">
      <h2>{{ pageTitle }}</h2>
      <div>
        <p class="article__title-info">
          <i class="article__title-icon"><ServerIcon /></i>
          Sh'Raan EU-172
        </p>
        <p class="article__title-info">
          <i class="article__title-icon"><DiscordIcon /></i>
          <a href="https://discord.gg/WEEs6jzX" target="_blank" rel="noopener">
            https://discord.gg/WEEs6jzX
          </a>
        </p>
      </div>
    </div>
    <LocaleParagraph />
  </section>
</template>

<style scoped>
.article__title {
  @apply flex flex-col gap-3;
}
.article__title-icon {
  @apply mr-2;
}
.article__title-info {
  @apply flex flex-row w-full items-center;
}
.article__title-info a {
  @apply lg:hover:font-extrabold underline;
}
.article__title-info + .article__title-info {
  @apply mt-1;
}
#roe {
  @apply flex flex-col gap-12;
}
#roe h2 {
  @apply text-3xl;
}
</style>
