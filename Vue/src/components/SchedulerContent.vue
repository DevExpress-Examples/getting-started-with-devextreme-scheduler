<script setup lang="ts">
import { ref } from 'vue';
import DxScheduler, { DxView, DxEditing } from 'devextreme-vue/scheduler';
import { appointments } from '../data';

const currentDate = ref<Date>(new Date(2021, 4, 25));
</script>

<template>
  <DxScheduler
    id="scheduler"
    :data-source="appointments"
    text-expr="title"
    all-day-expr="dayLong"
    recurrence-rule-expr="recurrence"
    v-model:current-date="currentDate"
    current-view="week"
    time-zone="Europe/Berlin"
    :adaptivity-enabled="true"
  >
    <DxView
      type="day"
      :start-day-hour="10"
      :end-day-hour="22"
    />
    <DxView
      type="week"
      :start-day-hour="10"
      :end-day-hour="22"
    />
    <DxView type="month"/>
    <DxEditing
      :allow-time-zone-editing="true"
      :allow-dragging="false"
    />
  </DxScheduler>
</template>

<style scoped>
#scheduler {
  height: 600px;
}
</style>
