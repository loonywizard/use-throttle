import React, { useEffect, useState } from "react";
import "./styles.css";

import { useThrottle } from "./useThrottle";

export default function App() {
  const [value, setValue] = useState("hello");
  const throttledValue = useThrottle(value);

  useEffect(() => console.log(`throttledValue changed: ${throttledValue}`), [
    throttledValue
  ]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      Input: <input value={value} onChange={onChange} />
      <p>Throttled value: {throttledValue}</p>
    </div>
  );
}
