import React from "react";
import styles from "./Calendar.module.css";
import { v4 as uuidv } from "uuid";
const Calendar = ({ date }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const endDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    daysInMonth
  ).getDay();

  const weeks = [];
  let week = [];
  let dayCounter = 1;

  // Add empty cells for days before the first of the month
  for (let i = 0; i < startDay; i++) {
    week.push(<td key={uuidv()} className={styles.emptyCell} />);
  }

  // Add cells for the days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay = i === date.getDate();
    week.push(
      <td key={uuidv()} className={`${isCurrentDay ? styles.currentDay : ""}`}>
        {i}
      </td>
    );

    if ((i + startDay) % 7 === 0 || i === daysInMonth) {
      // End of the week, push the week and start a new one
      weeks.push(<tr key={uuidv()}>{week}</tr>);
      week = [];
      dayCounter++;
    }
  }

  // Add empty cells for days after the last day of the month
  for (let i = endDay; i < 6; i++) {
    week.push(<td key={uuidv()} className={styles.emptyCell} />);
  }

  return (
    <table className={styles.calendar}>
      <thead>
        <tr>
          <th colSpan={7} className={styles.month}>
            {date.toLocaleString("default", { month: "long", year: "numeric" })}
          </th>
        </tr>
        <tr className={styles.header}>
          {daysOfWeek.map((day) => (
            <th key={uuidv()} className={styles.dayOfWeek}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{weeks}</tbody>
    </table>
  );
};

export default Calendar;
