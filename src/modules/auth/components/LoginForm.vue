<script setup lang="ts">
import { ref, computed } from 'vue'
import useLogin from '@/modules/auth/composables/useLogin'
import type { LoginFormData } from '@/modules/auth/types'
import { DEFAULT_LOGIN_DATA } from '@/modules/auth/constants'
import checkAllTruthy from '@/helpers/checkAllTruthy'
import useFormErrors from '@/composables/useFormErrors'
import { useRouter } from 'vue-router'
import { useLoaderStore } from '@/stores'

const router = useRouter();
const formErrors = useFormErrors()
const loader = useLoaderStore()

const formData = ref<LoginFormData>(DEFAULT_LOGIN_DATA)
const canSubmit = computed(() => !checkAllTruthy(formData.value))

const onSubmit = async () => {
  loader.show()

  try {
    formErrors.clear()
    await useLogin(formData.value)
    await router.push({ name: 'lobby' })
  } catch (errors: any) {
    formErrors.set(errors || [])
  } finally {
    loader.hide()
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
      :error-messages="formErrors.getMessage('email')"
    />

    <v-text-field
      v-model="formData.password"
      label="Password"
      variant="outlined"
      type="password"
      density="comfortable"
      :error-messages="formErrors.getMessage('password')"
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
