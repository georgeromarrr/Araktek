import React, { useState } from "react";
import {
  Background,
  LoginForm,
  InputClass,
  EyeIcon,
  EyeOffIcon,
  LoginHeader,
  LoginFooter,
  ButtonClass,
} from "../../../components/admin/Login/LoginComponents";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = (e) => {
    e.preventDefault();

    if (showPass === false) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };

  return (
    <>
      <Background />
      <LoginForm>
        <div className="p-4 w-[46vh] mx-auto">
          <LoginHeader />
          <form className="flex flex-col gap-4 pb-4">
            <div className="py-3">
              <input
                className={InputClass}
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <input
                className={InputClass}
                name="password"
                type={showPass ? `text` : `password`}
                placeholder="Password"
                required
              />
              <div className="flex absolute inset-y-0 right-0 items-center pr-2">
                <button onClick={handleShowPass}>
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="flex justify-end my-2">
              <p className="text-xs mb-2 cursor-pointer hover:underline text-white">
                Forgot Password?{" "}
              </p>
            </div>

            <button type="submit" className={ButtonClass}>
              Log In
            </button>
          </form>

          <LoginFooter />
        </div>
      </LoginForm>
    </>
  );
};

export default Login;
