import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { notify } from "./toast";
import styles from "./signUp.module.css";

function Loging() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("signup ", "success");
    } else {
      notify("invalid", "error");
      setTouched = {
        email: true,
        password: true,
      };
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitandler} className={styles.formContainer}>
        <h1 className={styles.header}>Login</h1>

        <div className={styles.formField}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.email && touched.email && (
            <span className={styles.uncompleted}>{errors.email}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.password && touched.password && (
            <span className={styles.uncompleted}>{errors.password}</span>
          )}
        </div>

        <div className={styles.formButton}>
          <a href="#">SignUp</a>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Loging;
