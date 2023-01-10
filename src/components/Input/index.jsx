import React from "react";
import styles from "./style.module.css";

function Input({ type, placeholder, pattern, required, inputRef, ...props }) {
  return (
    <div>
      <input
        type={type}
        name="input"
        className={styles.input}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        ref={inputRef}
      />
    </div>
  );
}

export default Input;
