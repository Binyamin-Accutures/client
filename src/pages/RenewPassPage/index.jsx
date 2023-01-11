import axios from "axios";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import apiCalls, { setToken } from "../../functions/apiRequest";
import language from "../../functions/language";

export default function ChangeAndCreatePassPass({ setUser }) {
  const userFirstPassword = useRef();
  const userSecondPassword = useRef();
  const params = useParams();
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (params.token) {
      apiCalls("get", `http://localhost:5001/api/user/${params.id}/renew/${params.token}`).then(
      (res) => {
        if (res.status !== 200) {
          nav("/login");
        }
      }
      );
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (userFirstPassword.current.value === userSecondPassword.current.value) {
      const data = {
        firstPassword: userFirstPassword.current.value,
        secondPassword: userSecondPassword.current.value,
        email: location.state.email,
      };

      apiCalls("post", "http://localhost:5001/api/user/register", data).then(
        (res) => {
          if (res.status === 200) {
            setToken(res.data);
            setUser(true);
            localStorage.token = res.data;
            nav("/loadimage");
          }
        }
      );
    }
  }

  return (
    <div className={styles.formLoginContainer}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>
          {params.token ? language.CHENG : language.CREATE} Password
        </p>
        <p className={styles.paragraph}>{language.CHOOSE_PASSWORD}</p>
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
          {language.SEND}
        </Button>
      </form>
    </div>
  );
}
