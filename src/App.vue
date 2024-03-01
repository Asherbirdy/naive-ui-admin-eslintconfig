<script setup lang="ts">
import themeOverides from '@/theme'
import { NConfigProvider } from 'naive-ui'

</script>
<template>
  <n-config-provider :theme-overrides="themeOverides">
    <RouterView />
  </n-config-provider>
</template>
