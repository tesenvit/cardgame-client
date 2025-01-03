<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue'
import type { RegisterFormData } from '@/modules/auth/types'
import { DEFAULT_REGISTER_DATA } from '@/modules/auth/constants'
import useRegister from '@/modules/auth/composables/useRegister'
import clone from '@/helpers/clone'
import checkAllTruthy from '@/helpers/checkAllTruthy'
import useFormErrors from '@/composables/useFormErrors'
import { useLoaderStore, useToastStore } from '@/stores'

const emit = defineEmits(['registered'])

const loader = useLoaderStore()
const toast = useToastStore()
const formErrors = useFormErrors()

const formData = ref<RegisterFormData>(clone(DEFAULT_REGISTER_DATA))
const canSubmit = computed(() => checkAllTruthy(formData.value))

const onSubmit = async () => {
  loader.show()

  try {
    await useRegister(formData.value)
    toast.show('Success! You are registered', {color: 'success'})
    emit('registered')
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
      v-model="formData.username"
      label="Username"
      variant="outlined"
      density="comfortable"
      class="mb-2"
      :error-messages="formErrors.getMessage('username')"
    />

    <v-text-field
      v-model="formData.password"
      label="Password"
      variant="outlined"
      type="password"
      density="comfortable"
      class="mb-2"
      :error-messages="formErrors.getMessage('password')"
    />

    <v-text-field
      v-model="formData.confirmPassword"
      label="Confirm password"
      variant="outlined"
      type="password"
      density="comfortable"
      class="mb-2"
      :error-messages="formErrors.getMessage('confirmPassword')"
    />

    <v-btn
      class="mt-2 bg-orange-accent-3"
      type="submit"
      block
      @click="onSubmit"
      variant="tonal"
      size="large"
      :disabled="!canSubmit"
    >
      Register
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>
