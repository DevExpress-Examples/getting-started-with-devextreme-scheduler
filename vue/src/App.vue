<template>
  <DxScheduler
    :height="600"
    :start-day-hour="10"
    :current-date="currentDate"
    :data-source="dataSource"
    :views="views"
    current-view="week"
    :groups="groups"
    timeZone="Europe/Berlin"
    :adaptivity-enabled="true">

    <DxEditing
      :allow-editing-time-zones="true"
      :allow-dragging="false"
    />

    <DxResource
      :data-source="priorities"
      field-expr="priorityId"
      label="Priority"
    />
  </DxScheduler>
</template>

<script>

import { DxScheduler, DxResource, DxEditing } from 'devextreme-vue/scheduler';

import { data, priorities } from './data.js';

export default {
  created () {
    document.title = "Vue: Getting Started with Scheduler";
  },
  components: {
    DxScheduler,
    DxResource, 
    DxEditing
  },
  data() {
    return {
      views: ["day", "week", "month", "timelineWeek"],
      currentDate: new Date(2021, 4, 25),
      dataSource: data,
      priorities: priorities,
      groups: ['priorityId'],
    };
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 