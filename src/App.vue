<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui'

import themeOverides from '@/theme'

</script>
<template>
  <n-config-provider :theme-overrides="themeOverides">
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
