<template>
  <v-container>
    <MainToolbar />
    <v-main>
      <router-view />
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
import { MainToolbar } from '@/components';
</script>

<style scoped></style>
