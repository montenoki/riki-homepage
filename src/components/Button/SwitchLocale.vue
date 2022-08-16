<script setup lang="ts">
import { LanguageOutline as LangIcon } from "@vicons/ionicons5";
import { NButton, NIcon, NDropdown } from "naive-ui";
import { useI18n } from "vue-i18n";

const options = [
  { label: "English", key: "en-US" },
  { label: "日本語", key: "ja-JP" },
];
const { locale } = useI18n({ useScope: "global" });

function switchLocale(locale_name: string) {
  locale.value = locale_name;
}
</script>

<template>
  <n-dropdown trigger="click" :options="options" @select="switchLocale">
    <n-button ghost quaternary round type="primary"
      ><template #icon>
        <n-icon>
          <LangIcon />
        </n-icon> </template
      >{{ $t("meta.name") }}</n-button
    >
  </n-dropdown>
</template>
