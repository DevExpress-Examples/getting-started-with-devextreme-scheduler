<template>
  <DxScheduler id="scheduler"
    :current-date="currentDate"
    :data-source="appointments"
    textExpr="appointmentText"
    startDateExpr="start"
    endDateExpr="end"
    allDayExpr="wholeDay"
    recurrenceRuleExpr="recurrence"
    current-view="workWeek"
    :groups="groups"
    timeZone="Europe/Berlin"
    :adaptivity-enabled="true">

      <DxView
        type="day"
      />
      <DxView
        type="workWeek"
        :start-day-hour="10"
        :end-day-hour="22"
      />
      <DxView
        type="month"
      />
      <DxView
        type="timelineWeek"
      />

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

import { DxScheduler, DxResource, DxView, DxEditing } from 'devextreme-vue/scheduler';

import { appointments, priorities } from './data.js';

export default {
  created () {
    document.title = "Vue: Getting Started with Scheduler";
  },
  components: {
    DxScheduler,
    DxResource,
    DxView,
    DxEditing
  },
  data() {
    return {
      currentDate: new Date(2021, 4, 25),
      appointments: appointments,
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