import { ChangeEvent, FC, useCallback } from "react";

interface Props {
  onChange: (value: number | undefined) => void;
  title: string;
}

export const NumberInput: FC<Props> = ({ onChange, title }) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const parsedValue = Number(value);
      if (value === undefined) {
        onChange(value);
      } else if (!isNaN(parsedValue)) {
        onChange(parsedValue);
      }
    },
    [onChange]
  );
  return (
    <label>
      <p>{title}:</p>
      <input onChange={handleChange} />
    </label>
  );
};
