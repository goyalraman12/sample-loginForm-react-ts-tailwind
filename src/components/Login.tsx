import React, { useState } from "react";
import FieldError from "./FieldError";
import { validateEmail, validatePassword } from "../util/helper";
import SuccessAlert from "./SuccessAlert";

const EMAIL_ERROR_MSG = "Please enter valid Email";
const PASSWORD_ERROR_MSG = "Password must contain atleast 8 characters";

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isSubmittedOnce, setIsSubmittedOnce] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!isSubmittedOnce) setIsSubmittedOnce(true);

    emailValidator(emailValue);
    passwordValidator(passwordValue);

    if (!validateEmail(emailValue) || !validatePassword(passwordValue)) {
      return false;
    } else {
      setEmailError("");
      setPasswordError("");
      setSuccessMsg("Login Successful !");
      setEmailValue("");
      setPasswordValue("");

      setTimeout(() => {
        setSuccessMsg("");
      }, 1300);
    }
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;

    setEmailValue(value);
    if (isSubmittedOnce) emailValidator(value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    setPasswordValue(value);
    if (isSubmittedOnce) passwordValidator(value);
  };

  const emailValidator = (value: string) => {
    setEmailError(!validateEmail(value) ? EMAIL_ERROR_MSG : "");
  };
  const passwordValidator = (value: string) => {
    setPasswordError(!validatePassword(value) ? PASSWORD_ERROR_MSG : "");
  };

  return (
    <>
      {successMsg && <SuccessAlert msg={successMsg} />}
      <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample "
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center text-2xl mb-5">
            <label className="mr-1">Login to your account</label>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="text-sm w-full px-4 py-2 mt-5 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Email Address"
              onChange={emailChangeHandler}
              value={emailValue}
            />
            {emailError && <FieldError errorMsg={emailError} />}
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              value={passwordValue}
            />
            {passwordError && <FieldError errorMsg={passwordError} />}
            <div className="text-center">
              <button
                className="mt-4 bg-blue-dark hover:bg-blue-darker disabled:bg-blue-light disabled:cursor-not-allowed px-4 py-2 text-white uppercase rounded text-xs tracking-wider cursor-pointer"
                type="submit"
                disabled={!!(emailError || passwordError)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
