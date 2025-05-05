"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if ((error as Error).message.includes("credentialssignin")) {
      return "Invalid credentials";
    }

   throw error;
  }
}
