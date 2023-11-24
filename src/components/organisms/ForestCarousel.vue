<template>
  <v-carousel show-arrows="hover">
    <v-carousel-item v-for="(image, index) in images" :key="index" :src="image" cover />
  </v-carousel>
</template>

<script setup lang="ts">
import forest1 from '@public/images/forest-1.jpg';
import forest2 from '@public/images/forest-2.jpg';
import forest3 from '@public/images/forest-3.jpg';

const images = [forest1, forest2, forest3];
</script>

<style scoped></style>
