<script setup lang="ts">
import themeOverides from '@/theme'
import { NConfigProvider, NMessageProvider } from 'naive-ui'

</script>
<template>
  <n-config-provider :theme-overrides="themeOverides">
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
