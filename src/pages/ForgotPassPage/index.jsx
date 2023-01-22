import { useRef, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import language from "../../functions/language";
import apiCalls from "../../functions/apiRequest";

export default function ForgotPassPage() {
  const userEmailInput = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    apiCalls(
      "get",
      `http://localhost:9000/api/user/forgot/?email=${userEmailInput.current.value}`
    );
  }

  return (
    <div className={styles.formLoginContainer}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>
          {language.TITLE_FORGOT_PASSWORD}
        </p>
        <p className={styles.paragraph}>{language.MSG_GIVE_EMAIL_REGISTER}</p>
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
