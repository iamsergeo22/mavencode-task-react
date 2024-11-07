import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: true,  // Show legend
    position: 'top',  // Position the legend at the top
    horizontalAlign: 'left',  // Align the legend to the left
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 200,  // Reduced height
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 200,  // Adjusted for responsiveness
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 150,  // Adjusted for smaller screen sizes
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    show: false,  // Remove grid lines
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
 
  yaxis: {
    show: false,  // Hide y-axis
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <h4 className="mb-6 text-xl dark:text-white">
        Development Activity
      </h4>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={150}  // Adjusted height of the chart
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
