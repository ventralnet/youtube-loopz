<template>
  <q-page class="">
    <div class="text-center full-width q-pt-lg">
      <div class="q-video inline-block">
        <div ref="youtube"></div>
      </div>
      <div class="q-mx-lg">
        <div style="width: 15rem">
          {{ playbackRate }}
          <q-slider
            v-model="playbackRate"
            :min="0"
            :max="1.0"
            :step="0.1"
            @update:model-value="updatePlaybackRate" />
        </div>
      </div>
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
const playbackRate = ref(3.5);
let videoEle = null;

const updatePlaybackRate = (newValue) => {
  videoEle.setPlaybackRate(newValue);
};

const { onReady } = usePlayer(videoId, youtube, {
  cookie: false,
  playerVars: {
    mute: 1,
  },
});
onReady((event) => {
  videoEle = event.target;
  // event.target.playVideo();
  event.target.setPlaybackRate(5.5);
});
onMounted(() => {
  console.log(youtube);
});
</script>

<style scoped>
.q-video {
  height: 20rem;
  width: 40rem;
}
</style>
