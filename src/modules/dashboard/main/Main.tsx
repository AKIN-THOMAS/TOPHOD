import React, { useState } from "react";
import styles from "@/styles/DashComp.module.css";
import Link from "next/link";
import { BsPersonCheck } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { IoMdFingerPrint } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";

const Main = () => {
  const attendance = [
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
    {
      Week: "02-12-05",
      Held: "12:00:00",
      Status: "True",
      Clocked: "Present",
    },
  ];
  const renderTableBody = attendance.map((value, index) => {
    return (
      <tbody className={styles.tbody}>
        <tr>
          <td className={styles.td} key={index}>
            {value.Week}
          </td>
          <td className={styles.td} key={index}>
            {value.Held}
          </td>
          <td className={styles.td} key={index}>
            {value.Status}
          </td>
          <td className={styles.td} key={index}>
            {value.Clocked}
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <div>
        <div className={styles.cards}>
          <div className={styles.card_single}>
            <Link href="" className={styles.card}>
              <div>
                <h3>Team Leaders</h3>
              </div>
              <div>
                <BsPersonCheck />
              </div>
            </Link>
          </div>
          <div className={styles.card_single}>
            <Link href="" className={styles.card}>
              <div>
                <h3>Announcement</h3>
              </div>
              <div>
                <GrAnnounce />
              </div>
            </Link>
          </div>
          <div className={styles.card_single}>
            <Link href="" className={styles.card}>
              <div>
                <h3>Attendance</h3>
              </div>
              <div>
                <IoMdFingerPrint />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.recent_grid}>
        <div className={styles.attendance}>
          <div className={styles.inside_card}>
            <div className={styles.inside_header}>
              <h4>Your Attendance</h4>
              <button>
                <a href="/Member/Attendance">See all</a>
                <LuMoveRight />
              </button>
            </div>
            <div className={styles.inside_body}>
              <div className={styles.table_responsive}>
                <table width="100%" className={styles.table}>
                  <thead className={styles.thead}>
                    <tr>
                      <td className={styles.td}>Week</td>
                      <td className={styles.td}>Held</td>
                      <td className={styles.td}>Status</td>
                      <td className={styles.td}>Clocked</td>
                    </tr>
                  </thead>
                  {renderTableBody}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
