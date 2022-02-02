import { useState } from "react";
import { usePolynomial } from "./hooks/usePolynomial";
import { PolynomialForm } from "./components/PolynomialForm";
import { Polynomial } from "./components/Polynomial";
import { PolynomialPlot } from "./components/PolynomialPlot";
import styles from "./App.module.css";

export interface Data {
  a?: number;
  b?: number;
  c?: number;
}

function App() {
  const [data, setData] = useState<Data>({});
  const { a, b, c } = data;
  const p = usePolynomial(a, b, c);

  return (
    <div className={styles.main}>
      <div>
        <PolynomialForm onChange={setData} />
        <Polynomial polynomial={p} />
      </div>
      <div>
        <PolynomialPlot coordinates={p.coordinates} />
      </div>
    </div>
  );
}

export default App;
