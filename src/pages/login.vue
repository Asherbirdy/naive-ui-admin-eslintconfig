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
  NButton
} from 'naive-ui'
import type {
  FormInst,
  FormItemInst,
  FormValidationError,
  FormRules
} from 'naive-ui'

interface ModelType {
  age: string | null
  password: string | null
  reenteredPassword: string | null
}

const formRef = ref<FormInst | null>(null)
const rPasswordFormItemRef = ref<FormItemInst | null>(null)
const modelRef = ref<ModelType>({
  age: null,
  password: null,
  reenteredPassword: null
})

const model = modelRef

const handlePasswordInput = () => {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
  }
}

const handleValidateButtonClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(
    (errors: Array<FormValidationError> | undefined) => {
      if (!errors) {
        alert('Valid')
      } else {
        console.log(errors)
        alert('Invalid')
      }
    }
  )
}

const rules: FormRules = {
  age: [
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
  <div>
    <n-card class="w-100 m-a" title="Card">
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="age" label="Age">
          <n-input v-model:value="model.age" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="Password">
          <n-input
            v-model:value="model.password"
            type="password"
            @input="handlePasswordInput"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-button
          :disabled="model.age === null"
          round
          type="primary"
          @click="handleValidateButtonClick"
        >
          Login
        </n-button>
      </n-form>
    </n-card>
  </div>
</template>