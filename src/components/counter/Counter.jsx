import React, { useState } from "react";
import styles from "./counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  const decreament=()=>{
    if(count===0){
        return
    }
    setCount(count-1)
  }

  const increament=()=>{
    setCount(count+1)
  }

  return (
    <div className={styles.container}>
      <span className={styles.count}>{count}</span>
      <div className={styles.buttons}>
        <button onClick={decreament} className={styles.buttons__1}>-</button>
        <button onClick={increament} className={styles.buttons__2}>+</button>
      </div>

    </div>
  );
}

export default Counter;
