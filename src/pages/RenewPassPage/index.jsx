import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./style.module.css";
import apiCalls, { setToken } from "../../functions/apiRequest";
import language from "../../functions/language";

export default function ChangeAndCreatePassPass({ setUser }) {
  const userFirstPassword = useRef();
  const userSecondPassword = useRef();
  let [searchParams, setSearchParams] = useSearchParams();
  const passToken = searchParams.get("token");
  const location = useLocation();
  const nav = useNavigate();
  let email = "";

  useEffect(() => {
    if (!passToken) {
      email = location.state.email;
    } else {
      apiCalls(
        "get",
        `http://localhost:5001/api/user/checktoken/?token=${passToken}`
      ).then((res) => {
        if (res.status === 200) {
          email = res.data.email;
        }else{
          nav("/login");
        }
      });
    }
  }, []);

  const ifStatusGood = (res) => {
    setToken(res.data);
    setUser(true);
    localStorage.token = res.data;
    nav("/loadimage");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (userFirstPassword.current.value === userSecondPassword.current.value) {
      const data = {
        firstPassword: userFirstPassword.current.value,
        secondPassword: userSecondPassword.current.value,
        email: email,
      };

      if (!passToken) {
        apiCalls("post", "http://localhost:5001/api/user/register", data).then(
          (res) => {
            if (res.status === 200) {
              ifStatusGood(res);
            }
          }
        );
      } else {
        apiCalls(
          "post",
          "http://localhost:5001/api/user/changepassword",
          data
        ).then((res) => {
          if (res.status === 200) {
            console.log("response: " + res.data);
            ifStatusGood(res);
          }
        });
      }
    }
  }

  return (
    <div className={styles.formLoginContainer}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>
          {passToken ? language.CHENG : language.CREATE} Password
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
