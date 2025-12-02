import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginUser } from "@/hooks/services/useAuthServices";
import { TLoginUser } from "@/services/request";
import { useAuthStore } from "@/store/useAuthStore";
import { useGeneralStore } from "@/store/useGeneralStore";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const { setSection } = useAuthStore((state) => state);
  const { setIsLoading } = useGeneralStore((state) => state);

  const { mutateAsync: loginUser, isPending } = useLoginUser();

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);

  const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const payload: TLoginUser = {
      username: values.username as string,
      password: values.password as string,
    };

    loginUser(payload).then(async (res) => {
      Cookies.set("token", res.data.token);
      await router.push("/");
    });
  };
  return (
    <form
      className="w-full md:w-4/5 flex flex-col gap-6"
      onSubmit={onLoginSubmit}
    >
      <div className="">
        <h1 className="text-2xl md:text-5xl font-bold">Hello</h1>
        <h2 className="text-sm">Sign in to your account to continue</h2>
      </div>
      <div className="flex flex-col gap-2">
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" />
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
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default LoginForm;
