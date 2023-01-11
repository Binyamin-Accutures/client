import { useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import language from "../../functions/language";
import { useNavigate } from "react-router-dom";
import apiCalls from "../../functions/apiRequest";

export default function ForgotPassPage() {
  const userEmailInput = useRef();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    apiCalls("get", `http://localhost:5001/api/user/forgot/?email=${userEmailInput.current.value}`);
    console.log(userEmailInput.current.value);
    //nav("/renew/:");
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
