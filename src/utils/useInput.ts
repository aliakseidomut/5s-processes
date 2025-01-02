import { useState } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue("");

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    reset,
  };
}
