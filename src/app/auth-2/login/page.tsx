import React from "react";
import LoginForm from "./_loginForm";

const AuthLogin: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-[200px]">
      <p className="self-stretch flex-grow-0 flex-shrink-0 text-3xl font-semibold text-center text-dark dark:text-primary">
        Welcome back!
      </p>
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 rounded-xl">
        <LoginForm />
      </div>
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-5 relative overflow-hidden gap-2">
          <a
            href="/next/auth/forgot-password"
            className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-primary"
          >
            Forgot username/password
          </a>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-5 relative overflow-hidden gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-dark-blue-hue dark:text-primary">
            Not yet registered?
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
            <a
              href="/next/auth/register"
              className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-primary"
            >
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
