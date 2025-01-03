import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ToastOptions } from '@/types'
import { DEFAULT_TOAST_OPTIONS } from '@/constants'
import clone from '@/helpers/clone'

export const useToastStore = defineStore('toast', () => {
  const message = ref('');
  const visible = ref(false);
  const options = ref<ToastOptions>(clone(DEFAULT_TOAST_OPTIONS))

  function show(text: string, opt?: ToastOptions) {
    options.value = Object.assign(DEFAULT_TOAST_OPTIONS, opt)
    message.value = text;
    visible.value = true;
  }

  return {
    message,
    visible,
    show,
    options
  };
});
