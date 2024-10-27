<template>
  <q-page class="bg-primary">
    <div class="column q-pa-sm">
      <div class="col ">
        <q-video style="height: 25rem" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
      </div>
      <div class="col bg-warning">
        <div class="row">
          <div class="col">
            <h1>Speed</h1>
            <q-slider class="q-mt-xl" v-model="videoSettings.playbackSpeed" color="deep-orange" markers :step="0.25"
              :min="-0.1" :max="4" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';

defineOptions({
  name: 'IndexPage',
});

const videoSettings = reactive({
  playbackSpeed: 1.0,
});
</script>
