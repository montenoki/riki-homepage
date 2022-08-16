<script setup lang="ts">
import { NSpace, NButton } from "naive-ui";
import SwitchLocale from "../Button/SwitchLocale.vue";
import SwitchTheme from "../Button/SwitchTheme.vue";
</script>
<template>
  <n-space justify="end">
    <NButton quaternary round type="primary">Section1</NButton>
    <NButton quaternary round type="primary">Section2</NButton>
    <NButton quaternary round type="primary">Section3</NButton>

    <!-- <SwitchTheme /> -->
    <SwitchLocale />
  </n-space>
</template>
