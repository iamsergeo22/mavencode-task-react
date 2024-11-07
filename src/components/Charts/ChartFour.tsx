import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartFourState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 160,
        },
      },
    },
  ],
};

const ChartFour: React.FC = () => {
  const [state, setState] = useState<ChartFourState>({
    series: [65, 34, 12, 56],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 34, 12, 56],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-4 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-0 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl dark:text-white">
            Chart Title
          </h5>
        </div>
       
      </div>

      <div className="mb-0 pt-6">
        <div id="chartThree" className="mx-auto flex justify-center mb-0">
          <ReactApexChart
            options={options}
            series={state.series}
            type="pie"
          />
        </div>
      </div>

    </div>
  );
};

export default ChartFour;
