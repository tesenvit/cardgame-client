<script setup lang="ts">
import LoginForm from '@/modules/auth/components/LoginForm.vue'
</script>

<template>
  <v-app class="d-flex flex-column">
<!--    <v-app-bar app>top</v-app-bar>-->

    <v-main class="flex-grow-1 d-flex">
      <v-container fluid class="d-flex flex-column justify-center">
        <v-row>
          <v-col cols="8" class="d-flex align-center justify-center">
            <h1 class="text-grey-lighten-1">Some information</h1>
          </v-col>

          <v-divider vertical inset />

          <v-col class="pa-16">
            <LoginForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="bg-transparent py-0 my-0" height="50">
        <div class="h-100 w-100 border-t-sm d-flex justify-center align-center">
          <p class="text-grey-darken-1">© balaev-gamedev inc.</p>
        </div>
    </v-footer>
  </v-app>
</template>
