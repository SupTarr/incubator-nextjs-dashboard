import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const authenticate = async (
  prevData: string | undefined,
  formData: FormData
) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "error";
        default:
          return "error";
      }
    }
    throw error;
  }
};
