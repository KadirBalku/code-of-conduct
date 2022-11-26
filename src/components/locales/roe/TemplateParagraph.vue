<script>
import EnLocale from "@/components/locales/roe/en.json";
import DeLocale from "@/components/locales/roe/de.json";
import FrLocale from "@/components/locales/roe/fr.json";

export default {
  components: {},
  data() {
    return { en: EnLocale, de: DeLocale, fr: FrLocale };
  },
  computed: {
    selection() {
      if (this.$route.params.locale === "en") {
        return this.en;
      } else if (this.$route.params.locale === "de") {
        return this.de;
      } else if (this.$route.params.locale === "fr") {
        return this.fr;
      } else {
        return null;
      }
    },
  },
};
</script>

<template>
  <template v-if="selection !== null">
    <section id="category" v-for="category in selection" :key="category.title">
      <h3>{{ category.title }}</h3>
      <template v-for="paragraph in category.paragraph" :key="paragraph.title">
        <section>
          <h4 class="paragraph-title">
            {{ paragraph.title }}
          </h4>
          <ul
            v-if="paragraph.content.length > 0"
            class="list-disc px-5 lg:px-8 text-lg my-3 lg:my-6"
          >
            <template v-for="rule in paragraph.content" :key="rule">
              <li class="">
                {{ rule }}
              </li>
            </template>
          </ul>
        </section>
      </template>
    </section>
  </template>
  <template v-else>Coming Soon...</template>
</template>
<style scoped>
#category {
  @apply px-5 xs:px-10;
}
h3 {
  @apply text-2xl font-bold mb-4;
}

.paragraph-title {
  @apply text-lg font-semibold;
}
</style>
