import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";

export default function ChangeAndCreatePassPass() {
  const userPasswordInput = useRef();
  const userConfirmPasswordInput = useRef();
  const token = useParams();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      userPasswordInput.current.value === userConfirmPasswordInput.current.value
    ) {
      console.log(
        token,
        location.state.email,
        userPasswordInput.current.value,
        userConfirmPasswordInput.current.value
      );
    }
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <p className={styles.paragraphTitle}>
        {token.token ? "Change" : "Create"} Password
      </p>
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
  );
}
