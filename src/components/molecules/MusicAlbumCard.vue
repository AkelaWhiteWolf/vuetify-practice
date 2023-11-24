<template>
  <v-card color="#952175" theme="dark">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">{{ album }}</v-card-title>

        <v-card-subtitle>{{ artist }}</v-card-subtitle>

        <v-card-actions>
          <v-btn class="ms-2" icon="mdi-play" variant="text"></v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" size="125" rounded="0">
        <v-img :src="img"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { MusicAlbumData } from '@/types';

defineProps<MusicAlbumData>();
</script>

<style scoped></style>
