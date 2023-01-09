import { useRef } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css"


export default function ChangeAndCreatePassPass() {
  const userPasswordInput = useRef();
  const userConfirmPasswordInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log( userPasswordInput.current.value);
  }


  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>Change Password</p>
        <p className={styles.paragraph}>please choose a new password</p>
        <Input
          type="password"
          name="input"
          placeholder="new password"
          required={true}
          inputRef={userPasswordInput}
        />
        <Input
          type="password"
          name="input"
          placeholder="confirm new password"
          required={true}
          inputRef={userConfirmPasswordInput}
        />

        <Button type={"submit"} width={"328px"}>
          Send
        </Button>
      </form>
  )
}

