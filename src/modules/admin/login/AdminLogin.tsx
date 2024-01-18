// import React, { useState } from "react";
// import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
// import styles from "@/styles/Auth.module.css";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { AdminSignIn, adminToken } from "@/http/admin";

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();


//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     try {
//       const signIn = await AdminSignIn(username, password)
//     // console.log(adminToken)
//     // console.log(signIn.response)

//     if(signIn.responseData.status === 200) {
//       router.push('/admin/dashboard');
//     }
//     else if (signIn.responseData.status === 401) {
//       setError("Unauthorized access")
//     }
//     else {
//       setError(`${signIn.response.statusText}!! Are you the admin?`)
//     }
//     } catch (error) {
//       setError("Error Logging in. Are you the admin?")
//     }
//   };

//   return (
//     <div className={styles.admin_login_section}>
//       <div>
//         <form onSubmit={handleSubmit}>
//           {/* {error && (
//             <div className={`${error ? "submit-error-msg" : "hide-error"}`}>
//               {error}
//             </div>
//           )} */}
//           <div className={styles.login_form}>
//             <span>{error}</span>
//             <div className={styles.input_box}>
//               <label>Admin Username</label>
//               <Input
//                 variant={"filled"}
//                 placeholder="username"
//                 value={username}
//                 type="text"
//                 onChange={(e) => setUsername(e.target.value)}
//                 outline={"none"}
//                 autoFocus
//               />
//             </div>
//             <div className={styles.input_box}>
//               <label>Password</label>
//               <InputGroup>
//                 <Input
//                   variant={"filled"}
//                   placeholder="*******"
//                   value={password}
//                   type={showPassword ? "text" : "password"}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <InputRightAddon onClick={togglePassword} cursor={"pointer"}>
//                   <button onClick={togglePassword}>
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </InputRightAddon>
//               </InputGroup>
//             </div>
//             <div className={styles.questions}>
//               <Link className={styles.question} href={""}>
//                 Don't have an account
//               </Link>
//               <Link className={styles.question} href={""}>
//                 Forgot Password?
//               </Link>
//             </div>
//             <button className={styles.submit_btn} type="submit">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdminSignIn, adminToken } from "@/http/admin";

const ChakraProvider = dynamic(() => import("@chakra-ui/react").then((mod) => mod.ChakraProvider));
const CSSReset = dynamic(() => import("@chakra-ui/react").then((mod) => mod.CSSReset));

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const signIn = await AdminSignIn(username, password);

      if (signIn.responseData.status === 200) {
        router.push("/admin/dashboard");
      } else if (signIn.responseData.status === 401) {
        setError("Unauthorized access");
      } else {
        setError(`${signIn.response.statusText}!! Are you the admin?`);
      }
    } catch (error) {
      setError("Error Logging in. Are you the admin?");
    }
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <div className={styles.admin_login_section}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.login_form}>
              <span>{error}</span>
              <div className={styles.input_box}>
                <label>Admin Username</label>
                <Input
                  variant={"filled"}
                  placeholder="username"
                  value={username}
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  outline={"none"}
                  autoFocus
                />
              </div>
              <div className={styles.input_box}>
                <label>Password</label>
                <InputGroup>
                  <Input
                    variant={"filled"}
                    placeholder="*******"
                    value={password}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightAddon
                    onClick={togglePassword}
                    cursor={"pointer"}
                  >
                    <button onClick={togglePassword}>
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </InputRightAddon>
                </InputGroup>
              </div>
              <div className={styles.questions}>
                <Link className={styles.question} href={""}>
                  Don't have an account
                </Link>
                <Link className={styles.question} href={""}>
                  Forgot Password?
                </Link>
              </div>
              <button className={styles.submit_btn} type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default AdminLogin;
