import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from '@syncfusion/ej2-react-kanban';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { kanbanData, kanbanGrid } from '../data/dummy';
const Kanban = () => {
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
        title='Kanban'
      />
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
