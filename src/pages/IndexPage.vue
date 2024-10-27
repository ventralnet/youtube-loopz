<template>
  <q-page class="bg-primary">
    <div class="column q-pa-sm">
      <div class="col">
        <q-video
          style="height: 25rem"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
      </div>
      <div class="col bg-warning">
        <div class="row">
          <div class="col">
            <span>Speed {{ videoSettings.playbackSpeed }}%</span>
            <q-slider class="q-mt-xl"
              v-model="videoSettings.playbackSpeed"
              color="deep-orange"
              markers
              :step="25"
              :min="-400"
              :max="400" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, useTemplateRef, onMounted } from 'vue';

defineOptions({
  name: 'IndexPage',
});

onMounted(() => {
});

</script>
