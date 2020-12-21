import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'

import { Scheduler, Resource, View, Editing } from 'devextreme-react/scheduler';
import { appointments, priorities } from './data.js';

const currentDate = new Date(2021, 4, 25);
const groups = ['priorityId'];

function App() {
  return (
    <div className="App">
      <div id="app-container">
        <Scheduler id="scheduler"
          defaultCurrentDate={currentDate}
          dataSource={appointments}
          textExpr="appointmentText"
          startDateExpr="start"
          endDateExpr="end"
          allDayExpr="wholeDay"
          recurrenceRuleExpr="recurrence"
          defaultCurrentView="workWeek"
          groups={groups}
          timeZone="Europe/Berlin"
          adaptivityEnabled={true}>

          <View
            type="day"
          />
          <View
            type="workWeek"
            startDayHour={10}
            endDayHour={22}
          />
          <View
            type="month"
          />
          <View
            type="timelineWeek"
          />

          <Editing
            allowTimeZoneEditing={true}
            allowDragging={false}
          />

          <Resource
            fieldExpr="priorityId"
            dataSource={priorities}
            label="Priority"
          />
        </Scheduler>

      </div>
    </div>
  );
}

export default App;
