<script setup lang="ts">
import { NSpace } from 'naive-ui';
import SwitchLocale from '../Button/SwitchLocale.vue'
import SwitchTheme from '../Button/SwitchTheme.vue'
</script>
<template>
  <n-space justify="end">
    <SwitchTheme />
    <SwitchLocale />
  </n-space>
</template>