import { useState } from "react";
import styles from "./todoNavbar.module.css";
const TodoNavbar = ({ unCompleted ,onChange ,status}) => {


  if (!unCompleted) return <h3>شروع به یادداشت کن</h3>;

  return (
    <header className={styles.containerNavbar}>
      <h3 className={styles}>
        تعداد کارهای تکمیل نشده<span className={styles}>{unCompleted}</span>
      </h3>

      <select onChange={onChange} value={status}>
        <option value="All">همه</option>
        <option value="Completed">تکمیل شده</option>
        <option value="UnCompleted">تکمیل نشده</option>
      </select>
    </header>
  );
};

export default TodoNavbar;
