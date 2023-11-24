<template>
  <v-sheet class="grid">
    <MusicAlbumCard
      v-for="(album, index) in MUSIC_ALBUMS_DATA"
      :key="album.album + index"
      v-bind="album"
    />
  </v-sheet>
</template>

<script setup lang="ts">
import { MUSIC_ALBUMS_DATA } from '@/data';
import { MusicAlbumCard } from '@/components';
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 16px;
}
</style>
