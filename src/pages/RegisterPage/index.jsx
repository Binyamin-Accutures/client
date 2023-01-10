import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";

export default function RegisterPage() {
  const userEmailInput = useRef();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    nav("/renew", { state: { email: userEmailInput.current.value } });
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <p className={styles.paragraphTitle}>New Account</p>
      <p className={styles.paragraph}>
        Just tell us the email address you would like to register with us
      </p>
      <Input
        type="email"
        name="input"
        required={true}
        placeholder="email"
        inputRef={userEmailInput}
      />
      <Button type={"submit"} width={"328px"}>
        Send
      </Button>
    </form>
  );
}
