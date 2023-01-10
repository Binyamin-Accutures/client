import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import apiCalls, { setToken } from "../../functions/apiRequest";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../components/Header/logo.svg";


// creator: david hakak
// color: _______________
// icon: ________________

function LoginPage() {
 
  const userEmailInput = useRef();
  const userPasswordInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmailInput.current.value, userPasswordInput.current.value);


    apiCalls("get", "https://restcountries.com/v3.1/all")
      .then((res) => {     
        setToken("123")  // setToken(res.token)
      })

    // setUser(UserEmailInput.current.value) 
    // localStorage.token = "444444" -->    // localStorage.token = res.token 
  }


  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" /> Accutures
        </div>
      </header>


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
  )
}

export default LoginPage;
