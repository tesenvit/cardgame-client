<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/modules/auth/components/LoginForm.vue'

const isOpeningRegisterDialog = ref<Boolean>(false)

const openRegisterDialog = () => {
  isOpeningRegisterDialog.value = true
}
const closeRegisterDialog = () => {
  isOpeningRegisterDialog.value = false
}
</script>

<template>
  <v-app class="d-flex flex-column">
<!--    <v-app-bar app>top</v-app-bar>-->

    <v-main class="flex-grow-1 d-flex">
      <v-container fluid class="d-flex flex-column justify-center">
        <v-row>
          <v-col cols="8" class="d-flex align-center justify-center">
            <h1 class="text-grey-lighten-3">Balaev Gamedev</h1>
          </v-col>

          <v-divider vertical inset />

          <v-col class="pa-16">
            <LoginForm />

            <div class="my-10">
              <v-divider>
                <span class="text-body-1 text-grey-lighten-3">OR</span>
              </v-divider>
            </div>

            <v-btn
              class="mt-2 bg-grey-lighten-3"
              type="button"
              block
              variant="tonal"
              size="large"
              @click="openRegisterDialog"
            >
              Register
            </v-btn>

          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="bg-transparent py-0 my-0" height="50">
      <div class="h-100 w-100 border-t-sm d-flex justify-center align-center">
        <p class="text-grey-lighten-3">© balaev-gamedev</p>
      </div>
    </v-footer>
  </v-app>
</template>
