import { useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";

export default function RegisterPage() {
  const userEmailInput = useRef();
  const userPasswordInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmailInput.current.value, userPasswordInput.current.value);
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <p className={styles.paragraphTitle}>New Account</p>
      <p className={styles.paragraph}>
        Just tell us the email address you would like to register with us
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
  );
}
