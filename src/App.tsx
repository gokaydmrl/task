import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Grid from "@mui/material/Grid";
import "./App.css";
import ChartRndm from "./components/ChartRndm";
import useDataHook from "./Hooks/useDataHook";
function App() {
  // const [data, setData] = useState([125, 251, 196]);
  // const newData = [130, 200, 190, 230, 340];
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setData([...data, ...newData]);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);
  const { datam } = useDataHook();
  // const arr = [
  //   {
  //     comp: <ChartRndm data={data} type="line" />,
  //   },
  // ];

  return (
    <>
      <h3>Digiterra</h3>
      <Grid container rowSpacing={4} columnSpacing={4}>
        <Grid item lg={4} md={6} sm={12}>
          <ChartRndm data={datam} type="pie" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <ChartRndm data={datam} type="bar" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <ChartRndm data={datam} type="line" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <ChartRndm data={datam} type="bar" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <ChartRndm data={datam} type="line" />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <ChartRndm data={datam} type="bar" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
/*
option = {
  legend: {},
  tooltip: {},
  dataset: {
    // Provide a set of data.
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  // Declare an x-axis (category axis).
  // The category map the first column in the dataset by default.
  xAxis: { type: 'category' },
  // Declare a y-axis (value axis).
  yAxis: {},
  // Declare several 'bar' series,
  // every series will auto-map to each column by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
*/

/*
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {},
  tooltip: {},
  dataset: {
    // Provide a set of data.
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  // Declare an x-axis (category axis).
  // The category map the first column in the dataset by default.
  xAxis: { type: 'category' },
  // Declare a y-axis (value axis).
  yAxis: {},
  // Declare several 'bar' series,
  // every series will auto-map to each column by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};

option && myChart.setOption(option);
*/
