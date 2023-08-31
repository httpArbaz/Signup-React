import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import SignUped from "./components/SignUped";

function App() {
  const [Submit, setSubmit] = useState(false);

  const SubmitButton = () => {
    setSubmit(true);
  };
  return (
    <>
      <>{!Submit ? <SignUpForm SubmitButton={SubmitButton} /> : <SignUped />}</>
    </>
  );
}

export default App;
