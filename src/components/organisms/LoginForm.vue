<template>
  <v-card variant="elevated" width="400" class="mx-auto pa-4">
    <v-card-title class="text-center">Login Here</v-card-title>
    <v-card-item>
      <v-sheet>
        <v-form fast-fail @submit.prevent="onLogin" v-model="form.isValid" validate-on="input">
          <v-text-field
            label="Login"
            variant="underlined"
            prepend-inner-icon="mdi-mail"
            v-model="form.data.login"
            :rules="form.rules.login"
          />
          <v-text-field
            label="Password"
            type="password"
            variant="underlined"
            prepend-inner-icon="mdi-key"
            v-model="form.data.password"
            :rules="form.rules.password"
          />
          <v-checkbox label="Remember me" color="primary" v-model="form.rememberMe"></v-checkbox>
          <v-btn type="submit" block class="mt-2" color="red-darken-1">Login</v-btn>
        </v-form>
      </v-sheet>
    </v-card-item>
  </v-card>

  <CustomSnackbar v-bind="snackbarProps" v-model="modelValue" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { regExps } from '@/data';
import { useSnackbar } from '@/composes';

const { CustomSnackbar, snackbarProps, modelValue, openSnackbar } = useSnackbar();

const form = reactive({
  isValid: false,
  data: {
    login: '',
    password: ''
  },
  rules: {
    login: [
      (value: string) =>
        regExps.email.test(value) ||
        regExps.phoneNumber.test(value) ||
        'Enter email or phone number, please'
    ],
    password: [(value: string) => Boolean(value.length) || 'Enter password, please']
  },
  rememberMe: false
});

function onLogin() {
  if (form.isValid) openSnackbar({ text: 'Imagine that data was sended to server' });
}
</script>

<style scoped></style>
