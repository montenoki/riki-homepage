<script setup lang="ts">
import { computed } from "vue";
import { DarkTheme20Regular as ThemeIcon } from "@vicons/fluent";
import { storeToRefs } from "pinia";
import { useStore } from "../../store";
import { NButton, NIcon } from "naive-ui";

const store = useStore();
const { themeName } = storeToRefs(store);

const switchTheme = () => {
  store.updateTheme(themeName.value === "dark" ? "light" : "dark");
};

const getButtonLabel = computed(() => {
  return themeName.value === "dark" ? "button.dark" : "button.light";
});
</script>

<template>
  <n-button @click="switchTheme">
    <template #icon>
      <n-icon>
        <ThemeIcon />
      </n-icon>
    </template>
    {{ $t(getButtonLabel) }}
  </n-button>
</template>
