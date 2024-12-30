<script setup lang="ts">
import { ref, computed } from 'vue'
import useLogin from '@/modules/auth/composables/useLogin'
import type { ValidationError } from '@/types'
import type { LoginFormData } from '@/modules/auth/types'
import { DEFAULT_LOGIN_DATA } from '@/modules/auth/constants'
import getFieldError from '@/helpers/getFieldError'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref<LoginFormData>(DEFAULT_LOGIN_DATA)
const fieldsErrors = ref<ValidationError[]>([])

const canSubmit = computed(() => !(formData.value.email.length && formData.value.password.length))

const onSubmit = async () => {
  try {
    fieldsErrors.value = []
    await useLogin(formData.value.email, formData.value.password)
    await router.push({ name: 'lobby' })
  } catch (errors: any) {
    fieldsErrors.value = errors || [];
  }
}
</script>

<template>
  <v-form @submit.prevent>
    <v-text-field
      v-model="formData.email"
      label="Email"
      variant="outlined"
      density="comfortable"
      class="mb-2"
      :error-messages="getFieldError('email', fieldsErrors)"
    />

    <v-text-field
      v-model="formData.password"
      label="Password"
      variant="outlined"
      type="password"
      density="comfortable"
      :error-messages="getFieldError('password', fieldsErrors)"
    />

    <v-btn
      class="mt-2 bg-orange-accent-3"
      type="submit"
      block
      @click="onSubmit"
      variant="tonal"
      size="large"
      :disabled="canSubmit"
    >
      Submit
    </v-btn>

  </v-form>
</template>
