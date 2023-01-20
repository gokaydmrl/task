import React from "react";
import ReactEcharts from "echarts-for-react";
import "../App.css";
function ChartRndm({ data, type, time }: { data: number[]; type: string; time: string[] }) {
/*
I wouldn't add lables or any colorful areas 
since my data is just an array of random numbers 
*/

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
          alignItems: "centter",
          justifyContent: "center",
        }}>
        <div className="pieParent">
          <h3>last data:</h3>
          <p> {data[0]}</p>
        </div>
        <div className="pieParent">
          <h3>current data:</h3>
          <p> {data[1]}</p>
        </div>{" "}
      </div>
    </div>
  ) : (
    <ReactEcharts option={options} />
  );
}
export default ChartRndm;
