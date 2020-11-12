import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import { Scheduler, Resource, Editing } from 'devextreme-react/scheduler';
import { data, priorities } from './data.js';

const currentDate = new Date(2021, 4, 25);
const views = ["day", "week", "month", "timelineWeek"];
const groups = ['priorityId'];

function App() {
  return (
    <div className="App">
      <div id="app-container">
        <Scheduler
          startDayHour={10}
          height={600}
          defaultCurrentDate={currentDate}
          dataSource={data}
          views={views}
          defaultCurrentView="week"
          groups={groups}
          timeZone="Europe/Berlin"
          adaptivityEnabled={true}>

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
