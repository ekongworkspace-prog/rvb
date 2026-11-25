"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { Button, Description, FieldError, Form, Input, InputOTP, InputOTPGroup, InputOTPSlot, Label, TextField, toast } from "@heroui/react";
import { Check, Loader2, LogIn, Mail, Swords, UserPlus } from "lucide-react";
import { safeReturnTo } from "@/lib/authReturnTo";
import AuthLayout from "@/components/auth/AuthLayout";
import { useState } from "react";
import GoogleIcon from "../GoogleIcon";

const RegisterForm = () => {
  const searchParams = useSearchParams();
  const returnTo = safeReturnTo(searchParams.get("returnTo") || "");
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  

const handleSubmit = async (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      // await base44.auth.register({ email, password });
      setShowOtp(true);
    } catch (err) {
      // setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setError("");
    setLoading(true);
    // try {
    //   const result = await base44.auth.verifyOtp({ email, otpCode });
    //   if (result?.access_token) {
    //     base44.auth.setToken(result.access_token);
    //   }
    //   window.location.href = safeReturnTo();
    // } catch (err) {
    //   setError(err.message || "Invalid verification code");
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleResend = async () => {
    setError("");
    try {
      // await base44.auth.resendOtp(email);
     toast.success("You have upgraded your plan", {
              actionProps: {
                children: "Billing",
                className: "bg-success text-success-foreground",
                // onPress: () => toast.close(id),
              },
              description: "You can continue using HeroUI Chat",
            });
    } catch (err) {
      setError("Failed to resend code");
    }
  };

  const handleGoogle = () => {
    // base44.auth.loginWithProvider("google", safeReturnTo());
     toast.success("You have upgraded your plan", {
              actionProps: {
                children: "Billing",
                className: "bg-success text-success-foreground",
                // onPress: () => toast.close(id),
              },
              description: "You can continue using HeroUI Chat",
            });
  };

    if (showOtp) {
    return (
      <AuthLayout
        icon={ <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            {/* <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} /> */}
            <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </Link>}
        title="Verify your email"
        subtitle={`We sent a code to ${email}`}
      >
       <> {error && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
            {error}
          </div>
        )}
        <div className="flex justify-center mb-6">
          <InputOTP
            maxLength={6}
            value={otpCode}
            onChange={setOtpCode}
            autoFocus
            autoComplete="one-time-code"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button
          className="w-full h-12 font-medium"
          onClick={handleVerify}
          isDisabled={loading || otpCode.length < 6}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify"
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Didn't receive the code?{" "}
          <button onClick={handleResend} className="text-primary font-medium hover:underline">
            Resend
          </button>
        </p></>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      icon={
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            {/* <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} /> */}
            <UserPlus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </Link>
        }
      title="Create your account"
      subtitle="Sign up to get started"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href={"/authentication/login" + (safeReturnTo(searchParams.get("returnTo") || "") !== "/" ? "?returnTo=" + encodeURIComponent(safeReturnTo(searchParams.get("returnTo") || "")) : "")}
            className="text-primary font-medium hover:underline"
          >
            Log in
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
      <Form className="flex sm:w-96 w-full flex-col gap-4" onSubmit={handleSubmit}>
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
          <Label className="font-semibold">Password</Label>
          <Input placeholder="Enter your password" className={"ring-success pl-4 h-12 rounded-lg"} />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className={"bg-success rounded-lg h-12 w-full font-semibold"}>
            {/* <Check /> */}
           Create account
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

export default RegisterForm