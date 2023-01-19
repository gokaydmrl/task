import React from "react";
import ReactEcharts from "echarts-for-react";

function ChartRndm({ data, type, time }: { data: number[]; type: string; time: string[] }) {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: time,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data,
        type: type,
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactEcharts option={options} />;
}
export default ChartRndm;
