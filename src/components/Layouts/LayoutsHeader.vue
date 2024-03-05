<script setup lang="ts">
import { NLayout, NLayoutContent, NButton, NFlex, NH2 } from 'naive-ui'
import { useAuthApi } from '@/hooks/apis'

const router = useRouter()
const handleLogout = async () => {
  await useAuthApi.logout()
  router.push('/login')
}

</script>
<template>
  <div>
    <n-layout>
      <n-layout-content class="p-10">
        <n-flex justify="space-between">
          <n-h2>
            logo
          </n-h2>
          <n-button @click="handleLogout" size="tiny">
            logout
          </n-button>
        </n-flex>
      </n-layout-content>
    </n-layout>
  </div>
</template>
