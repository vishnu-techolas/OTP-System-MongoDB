import otp_generator, { generate } from "otp-generator";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    }
})

export const generateAndSendOTP = async (receiver_email) => {
    try {
        // Generate OTP
        const otp = generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        // Send OTP
        const response = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: receiver_email,
            subject: "🔑 One-Time Password (OTP) for Verification",
            html: `🔑 Your OTP is <code>${otp}</code>. Do not share it with anyone.`,
        })
        // Handle response
        if (response?.messageId) {
            return { ok: true, message: "OTP sent successfully", otp };
        }
        return { ok: false, message: "OTP ERROR: Failed to send OTP" };
    } catch (err) {
        return { ok: false, message: "OTP ERROR: Failed to send OTP" };
    }
}