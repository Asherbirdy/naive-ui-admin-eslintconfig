<script setup lang='ts'>
import { useUserApi } from '@/hooks/apis'

const handleCurrentUser = async () => {
  try {
    await useUserApi.showCurrentUser()
  }
  catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <div>
    <button @click="handleCurrentUser">Current User</button>
  </div>
</template>
