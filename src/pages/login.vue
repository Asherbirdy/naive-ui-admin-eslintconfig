<route lang="yaml">
  meta:
    layout: login.vue
</route>

<script setup lang='ts'>
import { NCard, NForm, NFormItem, NInput, NButton, NSpace } from 'naive-ui'
import { useAuthApi } from '@/hooks/apis/'
import { isAxiosError } from 'axios'
import type { Login } from '@/types'
import type { FormInst, FormRules } from 'naive-ui'

const router = useRouter()
const message = useMessage()

const formRef = ref<FormInst | null>(null)
const account = ref<Login>({
  email: '',
  password: ''
})

const handleLogins = async () => {
  try {
    await useAuthApi.login({
      email: account.value.email,
      password: account.value.password
    })
    router.push('/')
  }
  catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      message.error(error.response.data.msg)
      account.value.password = ''
      return
    }
    message.error('發生了錯誤。請再試一次!')
  }
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
      <n-form
        ref="formRef"
        :model="account"
        :rules="rules"
      >
        <n-form-item path="username" label="Username">
          <n-input v-model:value="account.email" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="Password">
          <n-input
            v-model:value="account.password"
            type="password"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-space justify="end">
          <n-button
            :disabled="account.email === ''"
            round
            type="primary"
            @click="handleLogins"
          >
            login
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </div>
</template>