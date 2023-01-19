import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

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
  const { times, data } = useDataHook();
  // const arr = [
  //   {
  //     comp: <ChartRndm data={data} type="line" />,
  //   },
  // ];

  return (
    <Grid container rowSpacing={4} columnSpacing={4} width={"100wv"} sx={{ minWidth: "320px" }}>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ChartRndm data={data} type="pie" time={times} />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ChartRndm data={data} type="bar" time={times} />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ChartRndm data={data} type="line" time={times} />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ChartRndm data={data} type="bar" time={times} />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ChartRndm data={data} type="line" time={times} />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <ChartRndm data={data} type="bar" time={times} />
      </Grid>
    </Grid>
  );
}

export default App;
