import * as React from 'react';
import Chart from 'react-apexcharts'

declare const window: Window &
  typeof globalThis & {
  };

export default function ({ data }: { data: any }) {
  return (
    <div className='chart w-full'>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        width="100%"
      />
    </div>
  )
}