<route lang="yaml">
  name: 'Index'
</route>

<script setup lang='ts'>

const userId = ref('')
</script>

<template>
  <div>
    <router-link to="./login">
      <button>login</button>
    </router-link>
    <button>
      Current User
    </button>
    <p>{{ userId }}</p>
  </div>
</template>
