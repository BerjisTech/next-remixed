"use client";
import React, { useState, useCallback } from "react";
import { signIn } from "next-auth/react";

interface Credentials {
  email: string;
  password: string;
}

const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}> = ({ label, name, type, value, onChange, placeholder }) => (
  <div className="w-full">
    <label className="text-sm font-medium text-dark-blue-hue dark:text-primary">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 rounded-xl border text-base outline-none focus:ring"
      required
    />
  </div>
);

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
  const [authError, setAuthError] = useState(false);
  const [error, setError] = useState("Error logging in. Please try again.");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [linkedinLoading, setLinkedinLoading] = useState(false);

  // useEffect(() => {
  //   const checkSession = async () => {
  //     try {
  //       const session = await getSession();
  //       if (session) {
  //         window.location.href = "/next";
  //       }
  //     } catch (error) {
  //       console.error("Error checking session:", error);
  //     }
  //   };

  //   checkSession();
  // }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCredentials((prev) => ({ ...prev, [name]: value }));
      if (authError) setAuthError(false);
    },
    [authError]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setLoading(true);
      setAuthError(false);

      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: credentials.email,
          password: credentials.password,
          callbackUrl: "/next",
        });

        // console.log(result);
        if (result?.error) {
          setError(result.error || "Invalid credentials");
          setAuthError(true);
        } else {
          window.location.href = "/next";
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
        setAuthError(true);
      } finally {
        setLoading(false);
      }
    },
    [credentials]
  );

  const handleGoogleSignIn = useCallback(async () => {
    setGoogleLoading(true);
    setAuthError(false);

    try {
      const result = await signIn("google", {
        redirect: false,
      });

      console.log(result);
      if (result?.error) {
        setError(result.error || "Error signing in with Google");
        setAuthError(true);
      } else {
        // window.location.href = "/next";
      }
    } catch (error) {
      setError("Error with Google sign-in. Please try again.");
      setAuthError(true);
    } finally {
      setGoogleLoading(false);
    }
  }, []);

  const handleLinkedInSignIn = useCallback(async () => {
    setLinkedinLoading(true);
    try {
      const result = await signIn("linkedin", {
        redirect: false,
      });

      if (result?.error) {
        setError(result.error || "Error signing in with LinkedIn");
        setAuthError(true);
      } else {
        window.location.href = "/next";
      }
    } catch (error) {
      setError("Error with LinkedIn sign-in. Please try again.");
      setAuthError(true);
    } finally {
      setLinkedinLoading(false);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4"
    >
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
            <InputField
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="••••••••"
            />
          </div>
        </div>
        {authError && (
          <div className="w-full h-[40px] border border-red-400 text-red-400 rounded-md my-5">
            {JSON.stringify(error)}
          </div>
        )}
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
          <p className="flex-grow w-[411px] text-[10px] text-left text-dark">
            <span className="flex-grow w-[411px] text-[10px] text-left text-dark dark:text-primary">
              Note: cookies must be enabled in your browser.
            </span>
            <br />
            <span className="flex-grow w-[411px] text-[10px] text-left text-dark dark:text-primary">
              Passwords are case-sensitive (password is not the same as PassWord)
            </span>
            <br />
            <span className="flex-grow w-[411px] text-[10px] text-left text-dark dark:text-primary">
              Also ensure your computer's system clock is set correctly.
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2.5 rounded-xl text-white font-semibold ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-blue-700"
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className={`w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg bg-white border border-gray-300 ${
                googleLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.266 12.276c0-.816-.066-1.636-.207-2.438H12.74v4.62h6.482a5.55 5.55 0 0 1-2.399 3.647v2.999h3.867c2.27-2.09 3.576-5.177 3.576-8.828"
                  fill="#4285F4"
                />
                <path
                  d="M12.74 24.001c3.237 0 5.966-1.062 7.955-2.897l-3.867-2.998c-1.076.732-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.951h-3.99v3.09a12 12 0 0 0 10.723 6.61"
                  fill="#34A853"
                />
                <path
                  d="M6.003 14.3a7.2 7.2 0 0 1 0-4.594v-3.09H2.016a12.01 12.01 0 0 0 0 10.776z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.74 4.75a6.52 6.52 0 0 1 4.603 1.799l3.427-3.426A11.53 11.53 0 0 0 12.74 0 12 12 0 0 0 2.017 6.615l3.986 3.09C6.95 6.863 9.609 4.75 12.74 4.75"
                  fill="#EA4335"
                />
              </svg>
              {googleLoading ? "Signing in with Google..." : "Sign in with Google"}
            </button>
            <button
              type="button"
              onClick={handleLinkedInSignIn}
              disabled={linkedinLoading}
              className={`w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg bg-white border border-gray-300 ${
                linkedinLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.728 0H2.272A1.77 1.77 0 0 0 .5 1.772v20.456A1.77 1.77 0 0 0 2.272 24h20.456a1.77 1.77 0 0 0 1.772-1.772V1.772A1.77 1.77 0 0 0 22.728 0M7.653 20.445H4.045V8.983h3.608zM5.847 7.395a2.072 2.072 0 1 1 2.083-2.07 2.04 2.04 0 0 1-2.083 2.07m15.106 13.06h-3.606v-6.262c0-1.846-.785-2.416-1.799-2.416-1.07 0-2.12.806-2.12 2.463v6.215H9.82V8.992h3.47v1.588h.047c.348-.705 1.568-1.91 3.43-1.91 2.013 0 4.188 1.195 4.188 4.695z"
                  fill="#0A66C2"
                />
              </svg>
              {linkedinLoading ? "Signing in with LinkedIn..." : "Sign in with LinkedIn"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
