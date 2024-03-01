<script setup lang="ts">
import { NLayout } from 'naive-ui'
import { RouterView } from 'vue-router'

</script>

<template>
  <div>
    <!-- Header -->
    <n-layout>
      <LayoutsHeader />
    </n-layout>
    <n-layout has-sider>
      <LayoutSidebar />
      <!-- 使用插槽(props)手动渲染组件 -->
      <router-view
        v-slot="{ Component }"
        class="w-full"
      >
        <transition name="pagefade">
          <component :is="Component" />
        </transition>
      </router-view>
    </n-layout>
  </div>
</template>