const Validation = (values) => {
  let error = {};

  if (!values.fullname) {
    error.fullname = "Name Is Required";
  }
  if (!values.email) {
    error.email = "Email is Requierd";
  } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(values.email)) {
    error.email = "Email invalid";
  }

  if (!values.password) {
    error.password = "Password Is Required";
  } else if (values.password.length < 5) {
    error.password = "Password Is Invalid";
  }

  return error;
};

export default Validation;
