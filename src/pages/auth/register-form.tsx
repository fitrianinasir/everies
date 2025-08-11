import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";

const RegisterForm = () => {
  const { setSection } = useAuthStore((state) => state);
  return (
    <div className="flex w-full md:w-4/5 flex-col gap-6">
      <div className="">
        <h1 className="text-2xl md:text-5xl font-bold">Hello</h1>
        <h2 className="text-sm">Create your account to get started</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <p className="text-xs text-right text-everies-primary-20">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setSection("login")}
          >
            Sign in
          </span>
        </p>
      </div>
      <Button>Sign Up</Button>
    </div>
  );
};

export default RegisterForm;
