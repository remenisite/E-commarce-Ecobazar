"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const ResendOtp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // query থেকে email নেবো
  const emailFromQuery = searchParams.get("email");

  const [errors, setErrors] = useState({
    emailErr: "",
  });

  const [userData, setUserData] = useState({
    email: emailFromQuery || "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/auth/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Email is required") {
          setErrors((prev) => ({ ...prev, emailErr: data.message }));
        }

        if (data.message === "User not found or already verified") {
          setErrors((prev) => ({ ...prev, emailErr: data.message }));
        }

        return;
      }

      toast.success(data.message);

      // OTP verify page এ পাঠানো
      setTimeout(() => {
        router.push(`/verify?email=${userData.email}`);
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
            Resend OTP
          </div>

          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Enter your email to receive a new OTP
          </div>

          <form onSubmit={handelSubmit} className="flex flex-col gap-3">

            <Input
              value={userData.email}
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
                setErrors((prev) => ({ ...prev, emailErr: "" }));
              }}
              label="Email"
              placeholder="Enter your email"
              type="email"
              error={errors?.emailErr}
            />

            <Button type="submit">Resend OTP</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResendOtp;