<template>
  <v-toolbar density="compact">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link to="home" class="router-link">Vuetify</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      prepend-icon="mdi-login"
      variant="elevated"
      color="pink-darken-4"
      size="small"
      to="/login"
    >
      Login
    </v-btn>
  </v-toolbar>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
