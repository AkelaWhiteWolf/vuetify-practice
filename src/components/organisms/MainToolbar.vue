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
    >
      Login
    </v-btn>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list>
        <v-list-item
          v-for="{ title, value } in navItems"
          :key="value"
          link
          :disabled="value === currentRouteName"
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
import { RouteNames } from '@/router';

const router = useRouter();
const route = useRoute();

const drawer = ref(false);
const currentRouteName = computed(() => route.name);

const navItems = [
  { title: 'Home', value: RouteNames.Home },
  { title: 'Login', value: RouteNames.Login }
];
</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
