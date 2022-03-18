import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "./validate";
import { notify } from "./toast";
import styles from "./signUp.module.css";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
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
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      };
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitandler} className={styles.formContainer}>
        <h1 className={styles.header}>SignUp</h1>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.name && touched.name && (
            <span className={styles.uncompleted}>{errors.name}</span>
          )}
        </div>
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
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className={styles.uncompleted}>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accet terms of privacy policy :</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>

          {errors.isAccepted && touched.isAccepted && (
            <span className={styles.uncompleted}>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButton}>
          <a href="#">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
