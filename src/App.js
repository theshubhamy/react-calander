import React, { useState } from "react";
import Calendar from "./calendar";
import styles from "./App.module.css";
function App() {
  const [currentDate, setcurrentDate] = useState(new Date());
  return (
    <div className={styles.app}>
      <div className={styles.form}>
        <input
          className={styles.input}
          type={"date"}
          value={currentDate}
          onChange={(e) => setcurrentDate(e.target.value)}
        />
      </div>
      <Calendar date={new Date(currentDate)} />
    </div>
  );
}

export default App;
