import { Inject } from '@syncfusion/ej2-react-charts';
import {
  Agenda,
  Day,
  DragAndDrop,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { scheduleData } from '../data/dummy';
const Calendar = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'
      style={{
        backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
      }}
    >
      <Header
        category='App'
        title='Calendar'
      />
      <ScheduleComponent
        height='650px'
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2025, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
