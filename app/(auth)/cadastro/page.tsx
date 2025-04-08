import { SignUpForm } from "@/components/Signup-form";
import React from "react";

export const dynamic = "force-dynamic";
function SignupPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center p-24">
      <SignUpForm />
    </main>
  );
}

export default SignupPage;
