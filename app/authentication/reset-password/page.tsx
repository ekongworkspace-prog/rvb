"use client";


import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      
      <ResetPasswordForm />
    </Suspense>
  );
};

export default Page;
