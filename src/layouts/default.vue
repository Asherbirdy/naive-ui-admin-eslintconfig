<script setup lang="ts">
import { NLayout } from 'naive-ui'

</script>

<template>
  <div>
    <!-- Header -->
    <n-layout>
      <LayoutsHeader />
    </n-layout>
    <n-layout has-sider>
      <LayoutSidebar />
      <RouterView />
    </n-layout>
  </div>
</template>
