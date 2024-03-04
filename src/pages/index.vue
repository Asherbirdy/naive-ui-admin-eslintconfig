<script setup lang='ts'>
import { useUserApi } from '@/hooks/apis'

const userId = ref('')

const handleCurrentUser = async () => {
  try {
   const response = await useUserApi.showCurrentUser()
   userId.value = response.data.user.userId
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <button @click="handleCurrentUser">Current User</button>
    <p>{{ userId }}</p>
  </div>
</template>
