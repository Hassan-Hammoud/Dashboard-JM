import {
  ColumnDirective,
  ColumnsDirective,
  Edit,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-react-grids/styles/material.css';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';
const Customers = () => {
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
        title='Customers'
      />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
