import { useState } from "react";
import styles from "./todoNavbar.module.css";
import Select from "react-select";
const TodoNavbar = ({ unCompleted, onChange, selectedOption }) => {
  const options = [
    { value: "All", label: "همه" },
    { value: "Completed", label: "تکمیل شده" },
    { value: "UnCompleted", label: "تکمیل نشده" },
  ];

  if (!unCompleted) return <h3>شروع به یادداشت کن</h3>;

  return (
    <header className={styles.containerNavbar}>
      <h3 className={styles}>
        تعداد کارهای تکمیل نشده<span className={styles}>{unCompleted}</span>
      </h3>

      <Select
        value={selectedOption}
        onChange={onChange}
        options={options}
        className={styles.select}
      />
    </header>
  );
};

export default TodoNavbar;
