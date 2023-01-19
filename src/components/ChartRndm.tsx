import React from "react";
import ReactEcharts from "echarts-for-react";

function ChartRndm({ data, type, time }: { data: number[]; type: string; time: string[] }) {
  const lastInd = data.length - 1;
  if (type === "pie") {
    data = data.slice(lastInd - 1);
  }
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

  return type === "pie" ? (
    <div
      style={{
        display: "flex",
      }}>
      <div
        style={{
          width: "20rem",
          height: "auto",
        }}>
        <ReactEcharts option={options} />
      </div>
      <div
        style={{
          display: "grid",
        }}>
        <p>current data: {data[1]}</p>
        <p>last data: {data[0]} </p>
      </div>
    </div>
  ) : (
    <ReactEcharts option={options} />
  );
}
export default ChartRndm;
