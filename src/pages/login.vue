<route lang="yaml">
  meta:
    layout: login.vue
</route>
<script setup lang='ts'>
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NSpace
} from 'naive-ui'
import type {
  FormInst,
  FormRules
} from 'naive-ui'

interface ModelType {
  username: string | null
  password: string | null
}

const formRef = ref<FormInst | null>(null)
const model = ref<ModelType>({
  username: null,
  password: null
})

const handleValidateButtonClick = (e: MouseEvent) => {
  console.log(e)
  alert('login')
}

const rules: FormRules = {
  username: [
    {
      required: true,
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: 'Password is required'
    }
  ]
}

</script>
<template>
  <div class="h-[100dvh] flex justify-center items-center m-a" >
    <n-card class="w-100 " title="Login">
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="username" label="Username">
          <n-input v-model:value="model.username" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="Password">
          <n-input
            v-model:value="model.password"
            type="password"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-space justify="end">
          <n-button
            :disabled="model.username === null"
            round
            type="primary"
            @click="handleValidateButtonClick"
          >
            login
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </div>
</template>