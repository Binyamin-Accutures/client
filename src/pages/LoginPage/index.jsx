import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import apiCalls, { setToken } from "../../functions/apiRequest";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

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

    apiCalls("post", "http://localhost:9898/api/user/", data).then((res) => {
      if (res.status === 200) {
        setToken(res.data.token);
        setUser(true);
        localStorage.token = res.data.token;
        nav("/loadimage");
      }
    });
  }

  return (
    <>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <p className={styles.paragraphTitle}>Sign In</p>

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
          Sign In
        </Button>

        <div className={styles.formOptions}>
          <p>forgot password</p>
          <p>new account</p>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
