import React, { useState } from "react";
import {
  CircularProgress,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";
import { SignIn, token } from "@/http";
import { useRouter } from "next/router";
// import { SignInProps } from "@/@types";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit2: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const signIn = await SignIn(username, password);
      // console.log(signIn?.response)

      if (signIn?.responseData.status === 200) {
        router.push("/dashboard");
      } else if (signIn?.responseData.status === 401) {
        setError("Unauthorized access");
        setLoading(false);
      } else {
        setError(`${signIn?.response.statusText}!! Are you choir?`);
        setLoading(false);
      }
    } catch (error) {
      setError("Error Logging in. Are you the admin?");
    }
  };

  return (
    <>
      <div className={styles.login_section}>
        <div>
          <form onSubmit={handleSubmit2}>
            {/* {error && (
              <div className={`${error ? "submit-error-msg" : "hide-error"}`}>
                {error}
              </div>
            )} */}
            <div className={styles.login_form}>
              <span>{error}</span>
              <div className={styles.input_box}>
                <label>Username</label>
                <Input
                  variant={"filled"}
                  placeholder="lastname.firstname"
                  value={username}
                  type="string"
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
                  <InputRightAddon onClick={togglePassword} cursor={"pointer"}>
                    <button onClick={togglePassword} type="button">
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </InputRightAddon>
                </InputGroup>
              </div>
              <div className={styles.questions}>
                <Link className={styles.question} href={""}>
                  Don&apos;t have an account
                </Link>
                <Link className={styles.question} href={""}>
                  Forgot Password?
                </Link>
              </div>
              {/* <button className={styles.submit_btn} type="submit">
                Login
              </button> */}
              {!loading ? (
                <>
                  <button disabled className={styles.processing_btn}>
                    <CircularProgress
                      isIndeterminate
                      color="grey"
                      size="20px"
                    />
                    <p>Processing...</p>
                  </button>
                </>
              ) : (
                <>
                  <button type="submit" disabled className={styles.submit_btn}>
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
