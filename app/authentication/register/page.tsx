"use client";


import RegisterForm from "@/components/auth/RegisterForm";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
};

export default Page;
