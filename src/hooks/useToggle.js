import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((previous) => !previous);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse }];
}