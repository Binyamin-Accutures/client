import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import language from "../../functions/language";

export default function RegisterPage() {
  const userEmailInput = useRef();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    nav("/renew", { state: { email: userEmailInput.current.value } });
  }

  return (
    <div className={styles.formLoginContainer}>
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <p className={styles.paragraphTitle}>{language.NEW_ACCOUNT}</p>
      <p className={styles.paragraph}>
       {language.MSG_GIVE_EMAIL_REGISTER}
      </p>
      <Input
        type="email"
        name="input"
        required={true}
        placeholder="email"
        inputRef={userEmailInput}
      />
      <Button type={"submit"} width={"328px"}>
        {language.SEND}
      </Button>
    </form>
    </div>
  );
}
