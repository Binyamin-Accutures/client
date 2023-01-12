import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import apiCalls, { setToken } from "../../functions/apiRequest";

export default function ChangeAndCreatePassPass({ setUser }) {
  const userFirstPassword = useRef();
  const userSecondPassword = useRef();
  const token = useParams();
  const location = useLocation();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (userFirstPassword.current.value === userSecondPassword.current.value) {

      const data = {
        firstPassword: userFirstPassword.current.value,
        secondPassword: userSecondPassword.current.value,
        email: location.state.email,
      };
      
      apiCalls("post", "http://localhost:5000/api/user/register", data).then(
        (res) => {
          if (res.status === 200) {
            setToken(res.data);
            setUser(true);
            localStorage.token = res.data;
            nav("/loadimage");
          };
        }
      )
    };
  };

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
        inputRef={userFirstPassword}
      />
      <Input
        type="password"
        name="input"
        placeholder="confirm new password"
        required={true}
        inputRef={userSecondPassword}
      />

      <Button type={"submit"} width={"328px"}>
        Send
      </Button>
    </form>
  );
}
