"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { LogIn, Swords } from "lucide-react";
import { safeReturnTo } from "@/lib/authReturnTo";
import AuthLayout from "@/components/auth/AuthLayout";
import { useState } from "react";
import GoogleIcon from "../GoogleIcon";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const returnTo = safeReturnTo(searchParams.get("returnTo") || "");


  const [error, setError] = useState("");


  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  const handleGoogle = () => {
    // base44.auth.loginWithProvider("google", returnTo);
    return
  };

  return (
    <AuthLayout
      icon={
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <LogIn className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </Link>
      }
      title="Welcome back"
      subtitle="Log in to your account"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href={
              "/authentication/register" +
              (returnTo !== "/dashboard"
                ? "?returnTo=" + encodeURIComponent(returnTo)
                : "")
            }
            className="text-primary font-semibold hover:underline"
          >
            Create one
          </Link>
        </>
      }
    >
      <>

        <Button
          variant="outline"
          className="w-full h-12 text-sm  rounded-lg font-semibold mb-6"
          onClick={handleGoogle}
        >
          <GoogleIcon className="w-5 h-5 mr-2" />
          Continue with Google
        </Button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-3 text-muted-foreground">or</span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
            {error}
          </div>
        )}
        <Form className="flex sm:w-96 w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}

          >
            <Label className="font-semibold">Email</Label>
            <Input placeholder="john@example.com" className={"ring-success pl-4 h-12 rounded-lg"} />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >

            <div className="flex items-center justify-between">
              <Label className="font-semibold">Password</Label>
              <Link href="/authentication/forgot-password" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Input placeholder="Enter your password" className={"ring-success pl-4 h-12 rounded-lg"} />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className={"bg-success rounded-lg h-12 w-full font-semibold"}>
              {/* <Check /> */}
              Log in
            </Button>
            {/* <Button type="reset" variant="secondary">
          Reset
        </Button> */}
          </div>
        </Form>

      </>
    </AuthLayout>
  );
}

export default LoginForm