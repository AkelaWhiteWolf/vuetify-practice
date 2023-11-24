<template>
  <v-content>
    <v-container>
      <v-sheet class="d-flex flex-column align-center">
        <h2>Page not found</h2>
        <v-img :src="page404" min-width="300px" max-width="500px" />
        <p>
          We're sorry, the page you requested could not be found. You can
          <v-btn variant="plain" color="red-darken-1" class="pa-0" :to="RouteNames.Home"
            >go back to home page</v-btn
          >
        </p>
      </v-sheet>
    </v-container>
  </v-content>
</template>

<script setup lang="ts">
import page404 from '@/assets/images/page-404.jpeg';
import { RouteNames } from '@/router';
</script>

<style scoped>
p {
  font-size: larger;
}
</style>
