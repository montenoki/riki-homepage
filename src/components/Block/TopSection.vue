<script setup lang="ts">
import { NSpace, NImage } from "naive-ui";
</script>
<template>
  <NSpace justify="space-around">
    <NSpace vertical>
      <h1>{{ $t("text.top.title") }}</h1>
      <h2>Fully Hands-on service to bridge Africa & Japan Ecosystems</h2>
    </NSpace>
    <NImage src="../../assets/meeting.png" width="100" />
  </NSpace>
</template>
<style scoped>
h1 {
  text-align: center;
}
</style>
