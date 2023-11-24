<template>
  <v-container>
    <MainToolbar />
    <v-main>
      <slot></slot>
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
import { MainToolbar } from '@/components';
</script>

<style scoped></style>
