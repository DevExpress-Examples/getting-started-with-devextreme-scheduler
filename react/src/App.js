import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css'

import { Scheduler, View, Editing } from 'devextreme-react/scheduler';
import { appointments } from './data.js';
import { useCallback, useState } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 4, 25));
  const handlePropertyChange = useCallback((e) => {
    if(e.name === 'currentDate') {
      setCurrentDate(e.value);
    }
  }, [])

  return (
    <div className="App">
      <Scheduler id="scheduler"
        dataSource={appointments}
        textExpr="title"
        allDayExpr="dayLong"
        recurrenceRuleExpr="recurrence"
        currentDate={currentDate}
        onOptionChanged={handlePropertyChange}
        defaultCurrentView="week"
        timeZone="Europe/Berlin"
        adaptivityEnabled={true}>
        <View
          type="day"
          startDayHour={10}
          endDayHour={22}
        />
        <View
          type="week"
          startDayHour={10}
          endDayHour={22}
        />
        <View type="month" />
        <Editing
          allowTimeZoneEditing={true}
          allowDragging={false}
        />
      </Scheduler>
    </div>
  );
}

export default App;
