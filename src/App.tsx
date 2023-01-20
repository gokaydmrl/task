import Grid from "@mui/material/Grid";
import Chart from "./components/Chart";
import useRandomDataHook from "./Hooks/useRandomDataHook";
function App() {
/*
in the first place, 
to manage and test the responsiveness i create six charts. 
*/

  const { times, data } = useRandomDataHook();

  return (
    <Grid container rowSpacing={4} columnSpacing={4} width={"100wv"} sx={{ minWidth: "320px" }}>
      {["pie", "bar", "line", "bar", "line", "cross"].map((type, index) => {
        return (
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Chart key={index} data={data} type={type} time={times} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
