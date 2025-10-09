import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Scheduler, { View, Editing } from 'devextreme-react/scheduler';
import type { SchedulerTypes } from 'devextreme-react/scheduler';
import { appointments } from './data';

function App(): JSX.Element {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2021, 4, 25));

  const handlePropertyChange = useCallback((e: SchedulerTypes.OptionChangedEvent) => {
    if (e.name === 'currentDate') {
      setCurrentDate(e.value);
    }
  }, []);

  return (
    <div className="App">
      <Scheduler
        id="scheduler"
        dataSource={appointments}
        textExpr="title"
        allDayExpr="dayLong"
        recurrenceRuleExpr="recurrence"
        currentDate={currentDate}
        onOptionChanged={handlePropertyChange}
        defaultCurrentView="week"
        timeZone="Europe/Berlin"
        adaptivityEnabled={true}
      >
        <View type="day" startDayHour={10} endDayHour={22} />
        <View type="week" startDayHour={10} endDayHour={22} />
        <View type="month" />
        <Editing allowTimeZoneEditing={true} allowDragging={false} />
      </Scheduler>
    </div>
  );
}

export default App;
