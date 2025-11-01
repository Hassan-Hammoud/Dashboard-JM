import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import '@syncfusion/ej2/material.css';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  // Defensive guard: Syncfusion Sparkline may throw if given undefined/empty data
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return null;
  }

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        // Syncfusion expects literal ${x} placeholders in the format string.
        // Disable ESLint rule that warns about template curly braces in normal strings.
        // eslint-disable-next-line no-template-curly-in-string
          format: 'X: ${x}, Y: ${yval}',
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
