import { FC } from "react";
import { Polynomial as PType } from "../../hooks/usePolynomial";

interface Props {
  polynomial: PType;
}

export const Polynomial: FC<Props> = ({ polynomial }) => {
  const { a, b, c, desc, alpha, beta, delta, r0, r1, r2 } = polynomial;
  return (
    <div>
      <p>
        Polynome initiated with: a = {a}, b = {b}, c={c}
      </p>
      <div>
        <p>Description: {desc}</p>
      </div>
      <div>
        <p>alpha: {alpha}</p>
      </div>
      <div>
        <p>beta: {beta}</p>
      </div>
      <div>
        <p>delta: {delta}</p>
      </div>
      <div>
        <p>r0: {r0}</p>
      </div>
      <div>
        <p>r1: {r1}</p>
      </div>
      <div>
        <p>r2: {r2}</p>
      </div>
    </div>
  );
};
