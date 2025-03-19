"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";
import { Label } from "@/components/shadcn/label";

const RegistratioPage = () => {
  const [isIdentifierValid, setIsIdentifierValid] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleEmailValidation = () => {
    // Add your email validation logic here
    setLoading(true);
    setTimeout(() => {
      setIsIdentifierValid(true);
      setLoading(false);
    }, 2000);
  };

  const handlePasswordValidation = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch("/next/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.entityId) {
          // Handle successful authentication
          console.log("Password is correct");
          setErrors([]);
        } else {
          // Handle authentication failure
          console.log("Password is incorrect");
          setErrors(["Email, username or password is not correct"]);
        }
      } else {
        console.error("Failed to validate password");
        setErrors(["Internal Server Error: response not ok"]);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors(["Internal Server Error"]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isIdentifierValid) {
      return handleEmailValidation();
    } else {
      // await handlePasswordValidation(email, password);
      const result = await signIn("credentials", {
        email_or_username: email,
        password,
        redirect: true,
        callbackUrl: "http://localhost:3003/next/api/auth/callback/credentials",
      });

      if (result?.error) {
        setErrors([result.error]);
      } else {
        window.location.href = "/next";
      }
    }
  };

  const handleSignInWithGoogle = () => {
    signIn("google", { callbackUrl: "/next/" });
  };

  const handleSignInWithLinkedin = () => {
    signIn("linkedin", { callbackUrl: "/next/" });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      router.push("/");
    }
    const timeout = setTimeout(() => {
      setLoadingPage(false);
    }, 5000);

    if (session && !session.user) {
      setLoadingPage(false);
    }

    return () => clearTimeout(timeout);
  }, [session, router]);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-[50px]">
        {loadingPage && (
          <div className="text-center mb-4">
            <p className="text-gray-500">Checking your credentials, please wait...</p>
          </div>
        )}
        <div className="p-6 bg-white rounded-lg shadow-lg flex-col align-middle justify-items-center">
          <Button
            type="button"
            {...(loadingPage ? { disabled: true } : {})}
            className={`mb-2 w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg bg-white text-dark dark:bg-dark dark:text-white border border-gray-300 ${loadingPage ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleSignInWithGoogle()}
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
            Sign-up with Google
          </Button>
          {/* <Button
            type="button"
            {...(loadingPage ? { disabled: true } : {})}
            className={`mb-2 w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg bg-white dark:bg-dark dark:text-white border border-gray-300 ${loadingPage ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleSignInWithLinkedin()}
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
            Sign up with LinkedIn
          </Button>*/}
          <div className="flex items-center justify-center my-4 w-full">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>
          <h2 className="text-2xl font-semibold text-center dark:text-black">
            Sign-up with ProZ.com account
          </h2>
          <form className="mt-6 w-full" onSubmit={handleSubmit}>
            <Label className="block text-sm font-medium text-gray-700">Email</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="example@mail.com"
            />
            <Label className="mt-4 block text-sm font-medium text-gray-700">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="*******"
            />
            <div className="mt-4">
              <Label className="flex items-center">
                <Input
                  type="checkbox"
                  checked={agreementChecked}
                  onChange={() => setAgreementChecked(!agreementChecked)}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="/next/agreement" className="text-indigo-500 hover:underline">
                    terms and conditions
                  </a>
                </span>
              </Label>
            </div>
            <Button
              type={!isIdentifierValid ? "button" : "submit"}
              onClick={!isIdentifierValid ? handleEmailValidation : undefined}
              className={`block w-full mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-700 ${loading || !agreementChecked ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading && !agreementChecked}
            >
              Sign up
            </Button>
          </form>

          {errors.length > 0 && (
            <div id="errors" className="mt-4 text-red-500">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <div className="text-center mt-4">
            {/* <a
              href="/next/auth/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot your password?
            </a> */}
            <p className="mt-2 text-sm">
              Do you have an account?{" "}
              <a href="/next/signin" className="text-indigo-500 hover:underline">
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistratioPage;
