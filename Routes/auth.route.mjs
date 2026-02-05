import { Router } from "express";
import authController from "../Controllers/auth.controller.mjs";

const authRoute = Router();

authRoute.post('/otp/send', authController.sendOneTimePassword);
authRoute.post('/otp/verify', authController.verifyOneTimePassword);
authRoute.post('/otp/resend', authController.resendOneTimePassword);

export default authRoute;