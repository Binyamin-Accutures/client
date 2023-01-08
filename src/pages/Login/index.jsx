import styles from "./style.module.css";
import React, { useState } from "react";
import { useRef } from "react";

// creator: david hakak
// color: _______________
// icon: ________________

function Login() {
  const UserEmailInput = useRef(null);
  const UserPasswordInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(UserEmailInput.current.value);
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
      <input type="text" id="username" ref={UserEmailInput} />

      <input type="password" id="password" ref={UserPasswordInput}/>
      <button type="submit">Login</button>

      <div className={styles.formOptions}>
        <p>forgot password</p>
        <p>new account</p>
      </div>
    </form>
  );
}

export default Login;
