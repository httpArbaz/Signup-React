import React, { useEffect, useState } from "react";
import Validation from "./Validation";

const SignUpForm = ({ SubmitButton }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [erros, setErros] = useState({});
  const [Data, setData] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErros(Validation(values));
    setData(true);
  };

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(erros).length === 0 && Data) {
      SubmitButton(true);
    }
  }, [erros]);

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form" autoComplete="off">
        <h3 className="h3">SignUp Here</h3>
        <label htmlFor="username" className="label">
          Full Name
        </label>
        <input
          onChange={handleOnChange}
          value={values.fullname}
          name="fullname"
          className="input"
          placeholder="Enter Your Full Name"
          type="text"
        />
        {erros.fullname && <p className="p">{erros.fullname}</p>}
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          onChange={handleOnChange}
          value={values.email}
          name="email"
          className="input"
          placeholder="Enter Your Email"
          type="email"
        />
        {erros.email && <p className="p">{erros.email}</p>}
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          onChange={handleOnChange}
          value={values.password}
          name="password"
          className="input"
          placeholder="Enter Your Password"
          type="password"
        />
        {erros.password && <p className="p">{erros.password}</p>}
        <button className="button" onClick={handleOnSubmit}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
