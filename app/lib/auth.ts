"use server";

import { signIn } from "@/auth";
import bcrypt from "bcrypt";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if ((error as Error).message.toLowerCase().includes("credentialssignin")) {
      return "Invalid credentials";
    }

    throw error;
  }
}

export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string,
) {
  return bcrypt.compare(plainPassword, hashedPassword);
}
