"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [errors, setErrors] = useState({
    otpErr: "",
    emailErr: "",
  });

  const [userData, setUserData] = useState({
    otp: "",
    email: email || "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "OTP is required") {
          setErrors((prev) => ({ ...prev, otpErr: data.message }));
        }

        if (data.message === "Email is required") {
          setErrors((prev) => ({ ...prev, emailErr: data.message }));
        }

        if (data.message === "Invalid or expired OTP") {
          setErrors((prev) => ({ ...prev, otpErr: data.message }));
        }

        return;
      }

      toast.success(data.message);

      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex min-h-[calc(100vh-180px)] items-center justify-center px-4 py-12">
        <Toaster />
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Verify Your Email
          </div>

          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Enter the OTP sent to your email
          </div>

          <form onSubmit={handelSubmit} className="flex flex-col gap-3">
            <Input
              value={userData.email}
              readOnly
              label="Email"
              type="email"
              error={errors?.emailErr}
            />

            <Input
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  otp: e.target.value,
                }));
                setErrors((prev) => ({ ...prev, otpErr: "" }));
              }}
              label="OTP Code"
              placeholder="Enter OTP"
              error={errors?.otpErr}
            />

            <Button type="submit">Verify Email</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default VerifyEmail;