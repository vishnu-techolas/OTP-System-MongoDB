import { model, Schema } from "mongoose";

const schema = new Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    expires_at: {
        type: Number,
        required: true,
    },
    resend_at: {
        type: Number,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

export const OTPModel = model("one_time_passwords", schema);