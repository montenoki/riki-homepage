<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import HeaderBar from "./components/Block/HeaderBar.vue";
import {
  useOsTheme,
  darkTheme,
  jaJP,
  dateJaJP,
  enUS,
  dateEnUS,
  NGlobalStyle,
  NConfigProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
} from "naive-ui";

import { useStore } from "./store";

const store = useStore();
const { themeName } = storeToRefs(store);

// ユーザーtheme取得
// const theme = computed(() => (themeName.value === "dark" ? darkTheme : null));

const theme = null;
const { locale } = useI18n({ useScope: "global" });
let localeNaive: any,
  dateLocaleNaive: any = computed(() => getLocaleModule(locale.value as string));

function getLocaleModule(locale_name: string) {
  switch (locale_name) {
    case "ja":
      return { locale: jaJP, dateLocale: dateJaJP };
    default:
      return { locale: enUS, dateLocale: dateEnUS };
  }
}

onMounted(() => {
  store.updateTheme(useOsTheme().value === "dark" ? "dark" : "light");
});
</script>

<template>
  <n-config-provider :theme="theme" :locale="localeNaive" :date-locale="dateLocaleNaive">
    <n-global-style />
    <n-layout>
      <n-layout-header bordered>
        <HeaderBar />
      </n-layout-header>
      <n-layout-content>
        <router-view />
      </n-layout-content>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped></style>
