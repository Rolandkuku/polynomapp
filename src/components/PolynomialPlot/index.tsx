import { FC } from "react";
import Plot from "react-plotly.js";
import { Coordinates } from "../../hooks/usePolynomial";

interface Props {
  coordinates: Array<Coordinates>;
}

export const PolynomialPlot: FC<Props> = ({ coordinates }) => {
  return (
    <Plot
      data={[
        {
          x: coordinates.map(({ x }) => x),
          y: coordinates.map(({ y }) => y),
          type: "scatter",
          mode: "lines",
          marker: { color: "red" },
        },
      ]}
      layout={{
        width: 500,
        height: 500,
        title: "Polynomial chart",
        autosize: true,
      }}
    />
  );
};
