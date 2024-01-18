import React, { useState } from "react";
import styles from "@/styles/AdminDash.module.css";

const AdminMain = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selections, setSelections] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    console.log(subject);
    console.log(message);
    console.log(selections);
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

          <div className={styles.selections}>
            <label>Make Selections</label>
            <select
              name="college"
              value={selections}
              onChange={(e) => {
                setSelections(e.target.value);
              }}
              className={styles.input}
              required
            >
              <option value="all" id="all">
                All
              </option>
              <option value="100" id="100">
                100
              </option>
              <option value="200" id="200">
                200
              </option>
              <option value="300" id="300">
                300
              </option>
              <option value="400" id="400">
                400
              </option>
              <option value="500" id="500">
                500
              </option>
              <option value="TOP" id="TOP">
                TOP
              </option>
              <option value="HOD" id="HOD">
                HOD
              </option>
              <option value="excos" id="Executives">
                Executives
              </option>
              <option value="Applicants" id="Applicants">
                Applicants
              </option>
            </select>
          </div>
          <div className={styles.button}>
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminMain;
