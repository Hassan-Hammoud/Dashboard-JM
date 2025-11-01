import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
} from '@syncfusion/ej2-react-charts';
import { Tooltip } from '@syncfusion/ej2-react-popups';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from '../../data/dummy';

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category='Bar'
        title='Olympic Medal Counts - RIO'
      />
      <ChartComponent
        id='charts'
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {barCustomSeries.map((item, index) => (
            <SeriesDirective
              xName='x'
              yName='y'
              type='Bar'
              key={index}
              {...item}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
