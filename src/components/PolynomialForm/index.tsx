import { FC } from "react";
import { Data } from "../../App";
import { NumberInput } from "../NumberInput";
import styles from "./index.module.css";

interface Props {
  onChange: (cb: (prev: Data) => Data) => void;
}

export const PolynomialForm: FC<Props> = ({ onChange }) => {
  return (
    <div>
      <form>
        <NumberInput
          title="a"
          onChange={(a) => onChange((prev) => ({ ...prev, a }))}
        />
        <NumberInput
          title="b"
          onChange={(b) => onChange((prev) => ({ ...prev, b }))}
        />
        <NumberInput
          title="c"
          onChange={(c) => onChange((prev) => ({ ...prev, c }))}
        />
      </form>
      <div>
        <p>Scenarios:</p>
        <div className={styles.buttons}>
          <button onClick={() => onChange(() => ({ a: -2, b: 4, c: 6 }))}>
            {"Δ > 0 "}
          </button>
          <button
            onClick={() => onChange(() => ({ a: 3 / 2, b: -3, c: 3 / 2 }))}
          >
            {"Δ = 0 "}
          </button>
          <button onClick={() => onChange(() => ({ a: 1, b: 1, c: 1 }))}>
            {"Δ < 0 "}
          </button>
        </div>
      </div>
    </div>
  );
};
