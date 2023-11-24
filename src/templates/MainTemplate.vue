<template>
  <v-container>
    <MainToolbar />
    <v-main>
      <v-container class="px-0">
        <slot></slot>
      </v-container>
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
import { MainToolbar } from '@/components';
</script>

<style scoped></style>
