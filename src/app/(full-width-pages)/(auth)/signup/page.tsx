import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-Up for AMS Dashboard",
  description: "Sign-Up for Antario Merchant Services (AMS) Dashboard",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
