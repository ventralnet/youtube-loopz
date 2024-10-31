<template>
  <q-page class="bg-primary">
    <div class="q-video">
      <div
ref="youtube"></div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { usePlayer } from '@vue-youtube/core';

defineOptions({
  name: 'IndexPage',
});

const videoId = ref('dQw4w9WgXcQ');
const youtube = ref();
const { onReady } = usePlayer(videoId, youtube, {
  cookie: false,
  playerVars: {
    mute: 1,
  },
});
onReady((event) => {
  event.target.playVideo();
});
onMounted(() => {
  console.log(youtube);
});
</script>
