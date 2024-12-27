<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  email: '',
  password: ''
})

const onSubmit = () => {
  console.log('SUBMIT', formData.value)
}
</script>

<template>
  <v-form @submit.prevent>

    <v-text-field
      v-model="formData.email"
      label="Email"
      variant="outlined"
      density="comfortable"
    />

    <v-text-field
      v-model="formData.password"
      label="Password"
      variant="outlined"
      type="password"
      density="comfortable"
    />

    <v-btn
      class="mt-2"
      type="submit"
      block
      @click="onSubmit"
      variant="tonal"
      size="large"
    >
      Submit
    </v-btn>

  </v-form>
</template>
