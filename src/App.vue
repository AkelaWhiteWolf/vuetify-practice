<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <v-expand-transition>
        <component :is="Component" />
      </v-expand-transition>
    </router-view>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped></style>
