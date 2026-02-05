# Sample OTP Authentication Service

Environment variables required:
- `PORT`: Port number to run the service on. Default is `3000`.
- `MONGO_URI`: MongoDB connection URI.
- `MONGO_DB_NAME`: MongoDB database name.
- `GMAIL_USER`: Your Gmail ID (ex: `yourname@gmail.com`).
- `GMAIL_PASS`: Email app password - Get it from [Google App Passwords](https://myaccount.google.com/apppasswords). You need to enable 2FA for your Gmail account and generate an app password.

## How to run

1. Clone or download the repository
    ```bash
    git clone https://github.com/vishnu-techolas/OTP-System-MongoDB.git .
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add the required environment variables listed above
4. Start the service:
   DEVELOPMENT SERVER
   ```bash
   npm run dev
   ```
   PRODUCTION SERVER
   ```bash
   npm start
   ```
5. The server will listen on the port specified by `PORT` (default 3000)
