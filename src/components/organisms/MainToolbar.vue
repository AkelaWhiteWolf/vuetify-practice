<template>
  <v-toolbar density="compact">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

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
      class="mr-3"
    >
      Login
    </v-btn>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list>
        <v-list-item
          v-for="{ title, value } in navItems"
          :key="value"
          link
          :disabled="value === currentRoutePath"
          @click="router.push(value)"
          >{{ title }}</v-list-item
        >
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Routes } from '@/router';

const router = useRouter();
const route = useRoute();

const drawer = ref(false);
const currentRoutePath = computed(() => route.path);

const navItems = [
  { title: 'Home', value: Routes.Home },
  { title: 'Music Albums', value: Routes.MusicAlbums },
  { title: 'Login', value: Routes.Login }
];
</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
