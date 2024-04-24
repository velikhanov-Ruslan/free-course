import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter((counter) => counter + 1);
  }
  return (
    <div>
      counter:{counter}
      <button className={classes.btn} onClick={increment}>
        click to update counter
      </button>
    </div>
  );
};
