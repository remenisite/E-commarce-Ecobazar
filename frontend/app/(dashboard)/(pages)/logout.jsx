"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove auth data (example)
    localStorage.removeItem("token");

    // Redirect to login page
    router.push("/login");
  };

  useEffect(() => {
    // Auto logout after 2 seconds (optional)
    const timer = setTimeout(() => {
      handleLogout();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md rounded-2xl shadow-sm">
        <CardContent className="p-6 text-center space-y-4">
          <h1 className="text-xl font-bold">Logging Out...</h1>
          <p className="text-gray-500">
            You are being logged out. Please wait.
          </p>

          <Button onClick={handleLogout} className="w-full">
            Logout Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
