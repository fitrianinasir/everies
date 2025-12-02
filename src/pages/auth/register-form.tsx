import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegisterUser } from "@/hooks/services/useAuthServices";
import { TRegisterUser } from "@/services/request";
import { useAuthStore } from "@/store/useAuthStore";
import { useGeneralStore } from "@/store/useGeneralStore";
import React, { FormEvent, useEffect, useState } from "react";

const RegisterForm = () => {
  const { setSection } = useAuthStore((state) => state);
  const { setIsLoading } = useGeneralStore((state) => state);
  const { mutateAsync: registerUser, isPending } = useRegisterUser();

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);

  const submitRegisterForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const payload: TRegisterUser = {
      fullname: `${values.first_name} ${values.last_name}`,
      username: values.username as string,
      email: values.email as string,
      password: values.password as string,
    };

    registerUser(payload);
  };
  return (
    <form
      className="flex w-full md:w-4/5 flex-col gap-6"
      onSubmit={submitRegisterForm}
    >
      <div className="">
        <h1 className="text-2xl md:text-5xl font-bold">Hello</h1>
        <h2 className="text-sm">Create your account to get started</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Input name="first_name" placeholder="First Name" />
          <Input name="last_name" placeholder="Last Name" />
        </div>
        <Input name="username" placeholder="username" />
        <Input name="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
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
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default RegisterForm;
