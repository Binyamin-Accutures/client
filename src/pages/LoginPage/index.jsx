import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import apiCalls, { setToken } from "../../functions/apiRequest";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import language from "../../functions/language";

// creator: david hakak
// color: _______________
// icon: ________________

function LoginPage({ setUser }) {
  const userEmailInput = useRef();
  const userPasswordInput = useRef();
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmailInput.current.value, userPasswordInput.current.value);

    const data = {
      password: userPasswordInput.current.value,
      email: userEmailInput.current.value,
    };

    apiCalls("post", "http://localhost:9898/api/user/login", data).then((res) => {
      if (res.status === 200) {
        setToken(res.data);
        setUser(true);
        localStorage.token = res.data;
        nav("/loadimage");
      }
    });
  }

  return (
    <div className={styles.formLoginContainer}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>{language.SIGN_IN}</p>

        <Input
          type="email"
          name="input"
          placeholder="email"
          required={true}
          inputRef={userEmailInput}
        />
        <Input
          type="password"
          name="input"
          placeholder="password"
          required={true}
          inputRef={userPasswordInput}
        />

        <Button type={"submit"} width={"328px"}>
        {language.SIGN_IN}
        </Button>

        <div className={styles.formOptions}>
          <p className={styles.paragraph} onClick={()=>{nav("/forgot")}}>{language.FORGOT_PASSWORD}</p>
          <p className={styles.paragraph} onClick={()=>{nav("/register")}} >{language.NEW_ACCOUNT}</p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
