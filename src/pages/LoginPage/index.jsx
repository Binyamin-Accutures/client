import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from 'axios'
import apiCalls, { setToken } from "../../functions/apiRequest";



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
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <input type="text" id="username" ref={UserEmailInput} />

      <input type="password" id="password" ref={UserPasswordInput} />
      <button type="submit">Login</button>

      <div className={styles.formOptions}>
        <p>forgot password</p>
        <p>new account</p>
      </div>
    </form>
  );
}

export default LoginPage;
