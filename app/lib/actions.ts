"use server";

import { signIn } from "@/auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
} catch (error) {
  if ((error as Error).message.includes('credentialssignin')) {
    return 'Invalid credentials';
  }

  return "An unknown error occurred";
}
}
