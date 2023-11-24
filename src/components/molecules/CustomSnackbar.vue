<template>
  <div class="text-center ma-2">
    <v-snackbar
      :model-value="modelValue"
      :multi-line="isMultiline"
      :timeout="timeout"
      @update:modelValue="close()"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn :color="btnColor" :variant="btnVariant" @click="close">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import type { CustomSnackbarProps } from '@/types';

withDefaults(defineProps<CustomSnackbarProps>(), {
  btnColor: 'green',
  timeout: 2000
});
const emit = defineEmits(['update:modelValue']);

function close() {
  emit('update:modelValue', false);
}
</script>

<style scoped></style>
