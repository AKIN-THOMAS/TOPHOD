import React, { useState } from "react";
import styles from "@/styles/AdminDash.module.css";

const AdminAnnoucements = () => {
  const [subject, setSubject] = useState("");
  const [selections, setSelections] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    console.log(subject);
    console.log(selections);
    console.log(message);
  };
  return (
    <div>
      <div className={styles.inside_home}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.input_box}>
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <label>Select date for annoucement</label>
            <input
              type="date"
              placeholder="DD-MM-YYYY"
              value={selections}
              onChange={(e) => {
                setSelections(e.target.value);
              }}
              className={styles.input}
            />
          </div>
          <div className={styles.input_box}>
            <label>Message</label>
            <textarea
              placeholder="Type a message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.textarea}
            ></textarea>
          </div>
          <div className={styles.button}>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAnnoucements;
