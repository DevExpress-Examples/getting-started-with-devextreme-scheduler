<template>
  <div id="app">
    <template>
      <DxScheduler id="scheduler"
        :current-date="currentDate"
        :start-day-hour="10"
        :data-source="dataSource"
        :views="views"
        current-view="week"
        :groups="groups"
        timeZone="Europe/Berlin"
        :adaptivity-enabled="true"
      >

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
  </div>
</template>

<script>

import { DxScheduler, DxResource, DxEditing } from 'devextreme-vue/scheduler';

import { data, priorities } from './data.js';

export default {
  name: 'App',
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

#scheduler {
  height: 600px;
}
</style>