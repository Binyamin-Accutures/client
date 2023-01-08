import styles from "./style.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from 'axios'


// creator: david hakak
// color: _______________
// icon: ________________

function LoginPage({user,setUser}) {
  const UserEmailInput = useRef(null);
  const UserPasswordInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
  
      axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });

    console.log(UserEmailInput.current.value);
  //  setUser(UserEmailInput.current.value) 
    // localStorage.setItem("token",JSON.stringify("Bearer "+response.data[1]))
    localStorage.setItem("token",JSON.stringify("Bearer "+"111111"))
    // console.log(user);
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
