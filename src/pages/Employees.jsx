import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-react-grids/styles/material.css';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'
      style={{
        backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
      }}
    >
      <Header
        category='Pages'
        title='Employees'
      />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
