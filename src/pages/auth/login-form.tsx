import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";

const LoginForm = () => {
  const { setSection } = useAuthStore((state) => state);
  return (
    <div className="w-full md:w-4/5 flex flex-col gap-6">
      <div className="">
        <h1 className="text-2xl md:text-5xl font-bold">Hello</h1>
        <h2 className="text-sm">Sign in to your account to continue</h2>
      </div>
      <div className="flex flex-col gap-2">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <p className="text-xs text-right text-everies-primary-20">
          Doesn't have an account ?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setSection("register")}
          >
            Register
          </span>
        </p>
      </div>
      <Button onClick={() => (window.location.href = "/")}>Sign In</Button>
    </div>
  );
};

export default LoginForm;
