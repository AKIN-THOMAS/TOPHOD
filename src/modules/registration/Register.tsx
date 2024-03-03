import React, { useState } from "react";
import styles from "@/styles/Registration.module.css";
import { NewRegister, title } from "@/@types";
import { UserRegistration } from "@/http";

const Register = ({ reghead, type }: title) => {
  const [statusMsg, setStatusMsg] = useState("");
  //Personal Details
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [igHandle, setIgHandle] = useState("");
  const [gender, setGender] = useState("");

  //School Details
  const [regNo, setRegNo] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [webmail, setWebmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [dob, setdob] = useState("");

  //Choir Details
  const [subUnit, setSubUnit] = useState("");
  const [part, setPart] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const data: NewRegister = {
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      gender: gender,
      regNo: regNo,
      college: college,
      department: department,
      level: level,
      email: webmail,
      phoneNumber: phoneNumber,
      roomNumber: roomNumber,
      dob: dob,
      igHandle: '',
      // part: part,
      // subunit: subUnit,
      type: type,
    };

    const register = await UserRegistration(data);
    console.log(register.status);
    console.log(register.error);
    if (register.status == "200") {
      setStatusMsg(register.message);
    } else {
      setStatusMsg(register.error);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.reghead}>
        <h2>{reghead}</h2>
        <span>{statusMsg}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form} id="first">
          <div className={styles.details}>
            <span className={styles.title}>Personal Details</span>
            <div className={styles.fields}>
              <div className={styles.input_fields}>
                <label>Firstname</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  id="firstname"
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Middlename</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Middle Name"
                  id="middlename"
                  value={middlename}
                  onChange={(e) => {
                    setMiddlename(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Lastname</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Instagram Username</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Instagram Username"
                  id="instagramID"
                  value={igHandle}
                  onChange={(e) => {
                    setIgHandle(e.target.value);
                  }}
                  required
                />
              </div>

              <div className={styles.input_fields}>
                <label>Gender</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className={styles.input}
                  required
                >
                  <option value=""></option>
                  <option value="Male" id="gender" aria-required>
                    Male
                  </option>
                  <option value="Female" id="gender" aria-required>
                    Female
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <span className={styles.title}>School Details</span>
            <div className={styles.fields}>
              <div className={styles.input_fields}>
                <label>Registration No.</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Reg No"
                  id="regno"
                  value={regNo}
                  onChange={(e) => {
                    setRegNo(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Matriculation No.</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Matric No"
                  id="matricno"
                  value={matricNo}
                  onChange={(e) => {
                    setMatricNo(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Department</label>
                <input
                  className={styles.input}
                  type="text"
                  name="department"
                  placeholder="Department"
                  id="department"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Webmail</label>
                <input
                  className={styles.input}
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="@lmu.edu.ng"
                  id="email"
                  value={webmail}
                  onChange={(e) => {
                    setWebmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Phone Number</label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phonenumber"
                  placeholder="Phone Number"
                  id="phonenumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.input_fields}>
                <label>Room Number</label>
                <input
                  className={styles.input}
                  type="text"
                  name="roomno"
                  placeholder=" Hall - Room Number"
                  id="roomno"
                  value={roomNumber}
                  onChange={(e) => {
                    setRoomNumber(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.form} id="second">
          <div className={styles.details}>
            <div className={styles.input_fields}>
              <label>Date of Birth</label>
              <input
                className={styles.input}
                type="date"
                placeholder="DD-MM-YYYY"
                id="dob"
                value={dob}
                onChange={(e) => {
                  setdob(e.target.value);
                }}
                required
              />
            </div>
            <span className={styles.title}>School Details</span>
            <div className={styles.fields}>
              <div className={styles.input_fields}>
                <label>College</label>
                <select
                  name="college"
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                  className={styles.input}
                  required
                >
                  <option value=""></option>
                  <option value="CPAS" id="cpas">
                    CPAS
                  </option>
                  <option value="COE" id="coe">
                    COE
                  </option>
                  <option value="CBS" id="cbs">
                    CBS
                  </option>
                  <option value="CAS" id="cas">
                    CAS
                  </option>
                </select>
              </div>
              <div className={styles.input_fields}>
                <label>Select Your Level</label>
                <select
                  name="level"
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                  className={styles.input}
                  required
                >
                  <option value=""></option>
                  <option id="l100" value="100">
                    100
                  </option>
                  <option id="l200" value="200">
                    200
                  </option>
                  <option id="l300" value="300">
                    300
                  </option>
                  <option id="l400" value="400">
                    400
                  </option>
                  <option id="l500" value="500">
                    500
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <span className={styles.title}>Choir Details</span>
            <div className={styles.fields}>
              <div className={styles.input_fields}>
                <label>Select Your Sub-Unit</label>
                <select
                  name="level"
                  value={subUnit}
                  onChange={(e) => {
                    setSubUnit(e.target.value);
                  }}
                  className={styles.input}
                  required
                >
                  <option value=""></option>
                  <option id="Chorister" value="Chorister">
                    Chorister
                  </option>
                  <option id="Instrumentalist" value="Instrumentalist">
                    Instrumentalist(HOD)
                  </option>
                </select>
              </div>
              <div className={styles.input_fields}>
                <p>Select your part</p>
                <select
                  name="level"
                  value={part}
                  onChange={(e) => {
                    setPart(e.target.value);
                  }}
                  className={styles.input}
                  required
                >
                  <option value=""></option>
                  <option id="Soprano" value="Soprano">
                    Soprano
                  </option>
                  <option id="Tenor" value="Tenor">
                    Tenor
                  </option>
                  <option id="Alto" value="Alto">
                    Alto
                  </option>
                  <option id="Lead Guitar" value="Lead Guitar">
                    Lead Guitar
                  </option>
                  <option id="Bass Guitar" value="Bass Guitar">
                    Bass Guitar
                  </option>
                  <option id="Keyboard" value="Keyboard">
                    Keyboard
                  </option>
                  <option id="Drums" value="Drums">
                    Drums
                  </option>
                  <option id="Brass" value="Brass">
                    Brass
                  </option>
                  <option id="Strings" value="Strings">
                    Strings
                  </option>
                  <option id="Gong Gong" value="Gong Gong">
                    Gong Gong
                  </option>
                  <option id="Others" value="Others">
                    Others
                  </option>
                </select>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.nextBtn} type="submit">
                <span className={styles.btnText}>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
