import { useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import language from "../../functions/language";

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
      <p className={styles.paragraphTitle}>{language.TITLE_FORGOT_PASSWORD}</p>
      <p className={styles.paragraph}>
        {language.MSG_GIVE_EMAIL_REGISTER}
      </p>
      <Input
        type="text"
        name="input"
        placeholder="email"
        required={true}
        inputRef={userEmailInput}
        />

      <Button type={"submit"} width={"328px"}>
        {language.SEND}
      </Button>
    </form>
        </div>
  );
}
