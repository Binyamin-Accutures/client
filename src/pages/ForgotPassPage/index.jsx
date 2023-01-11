import { useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";

export default function ForgotPassPage() {
  const userEmailInput = useRef();
  const userPasswordInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmailInput.current.value, userPasswordInput.current.value);
  }

  return (
    <div className={styles.formLoginContainer}>

    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <p className={styles.paragraphTitle}>Forgot Password?</p>
      <p className={styles.paragraph}>
        Just tell us the email address you registered width us{" "}
      </p>
      <Input
        type="text"
        name="input"
        placeholder="email"
        required={true}
        inputRef={userEmailInput}
        />

      <Button type={"submit"} width={"328px"}>
        Send
      </Button>
    </form>
        </div>
  );
}
