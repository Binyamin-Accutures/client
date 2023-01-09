import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import apiCalls, { setToken } from "../../functions/apiRequest";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

// creator: david hakak
// color: _______________
// icon: ________________

function LoginPage() {
  const UserEmailInput = useRef(null);
  const UserPasswordInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();


    apiCalls("get", "https://restcountries.com/v3.1/all")
      .then((res) => {     
        setToken("123")  // setToken(res.token)
      })

    // setUser(UserEmailInput.current.value) 
    // localStorage.token = "444444" -->    // localStorage.token = res.token 
  }

  return (
    <>
    <Header/>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
      <h1>Sign in</h1>


      <Input type={"text"} name='input'  placeholder={"email"} ref={UserEmailInput}/>
      <Input type={"text"} name='input' placeholder={"password"} ref={UserPasswordInput}/>
    

        <Button type={"submit"} width={"328px"} children={'Sign In'}/>

        <div className={styles.formOptions}>
          <p>forgot password</p>
          <p>new account</p>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
