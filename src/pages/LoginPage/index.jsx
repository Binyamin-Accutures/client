import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../components/Header/logo.svg";
import { useRef } from "react";
import styles from "./style.module.css";

// creator: david hakak
// color: _______________
// icon: ________________

function LoginPage() {
  const userEmailInput = useRef();
  const userPasswordInput = useRef();
  const userConfirmPasswordInput = useRef();

  const patternEmail =
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
  const patternPassword = /^[0-9]+$/;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmailInput.current.value, userPasswordInput.current.value);
  }

  function handleSubmitCangePassword(e) {
    e.preventDefault();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" /> Accutures
        </div>
      </header>

      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>Sign In</p>

        <Input
          type="email"
          name="input"
          placeholder="email"
          //pattern={patternEmail}
          required={true}
          inputRef={userEmailInput}
        />
        <Input
          type="password"
          name="input"
          placeholder="password"
          pattern={patternPassword}
          required={true}
          inputRef={userPasswordInput}
        />

        <Button type={"submit"} width={"328px"}>
          Sign In
        </Button>

        <div className={styles.formOptions}>
          <p>forgot password</p>
          <p>new account</p>
        </div>
      </form>

      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>Forgot Password?</p>
        <p className={styles.paragraph}>
          Just tell us the email address you registered width us{" "}
        </p>
        <Input
          type="text"
          name="input"
          placeholder="email"
          pattern={patternEmail}
          required={true}
          inputRef={userEmailInput}
        />

        <Button type={"submit"} width={"328px"}>
          Send
        </Button>
      </form>

      <form className={styles.formLogin} onSubmit={handleSubmitCangePassword}>
        <p className={styles.paragraphTitle}>Change Password</p>
        <p className={styles.paragraph}>please choose a new password</p>
        <Input
          type="password"
          name="input"
          placeholder="new password"
       //   pattern={patternPassword}
          required={true}
          inputRef={userEmailInput}
        />
        <Input
          type="password"
          name="input"
          placeholder="confirm new password"
         // pattern={patternPassword}
          required={true}
          inputRef={userConfirmPasswordInput}
        />

        <Button type={"submit"} width={"328px"}>
          Send
        </Button>
      </form>

      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>New Account</p>
        <p className={styles.paragraph}>
          Just tell us the email address you would like to register with us
        </p>
        <Input
          type="text"
          name="input"
          placeholder="email"
          pattern={patternEmail}
          required={true}
          inputRef={userEmailInput}
        />
        <Button type={"submit"} width={"328px"}>
          Send
        </Button>
      </form>
    </>
  );
}

export default LoginPage;
