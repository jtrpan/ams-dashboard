import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-In to AMS Dashboard",
  description: "Sign in to your AMS Dashboard account",
};

export default function SignIn() {
  return <SignInForm />;
}
