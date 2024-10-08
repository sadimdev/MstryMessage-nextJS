import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const {data, error} = await resend.emails.send({
      from: "dev@sadim.com.np",
      to: email,
      subject: "Mystry message | Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    if(error) {
      return {success: false, message: error.message }
    }
    return { success: true, message: "Emali send successfully" };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return { success: false, message: "Failed to send verification emali" };
  }
}
