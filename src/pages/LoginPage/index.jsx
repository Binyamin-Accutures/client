import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { useRef } from "react";
import styles from "./style.module.css";

// creator: david hakak
// color: _______________
// icon: ________________

function LoginPage() {
  const UserEmailInput = useRef(null);
  const UserPasswordInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(UserEmailInput.current.value);
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
