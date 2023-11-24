<template>
  <v-container>
    <MainToolbar />
    <v-main>
      <v-expand-transition>
        <router-view />
      </v-expand-transition>
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
import { MainToolbar } from '@/components';
</script>

<style scoped></style>
