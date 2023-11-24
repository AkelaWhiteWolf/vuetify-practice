<template>
  <v-app>
    <MainToolbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { MainToolbar } from '@/components';
</script>

<style scoped></style>
