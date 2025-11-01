import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-react-grids/styles/material.css';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
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
        title='Orders'
      />
      <GridComponent
        id='gridComp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        style={{
          backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
          color: currentMode === 'Dark' ? '#E5E7EB' : '#111827',
        }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
