import express from 'express';
import authRoute from './Routes/auth.route.mjs';
import { db } from './Config/db.mjs';

await db.connect();
const app = express();
app.use(express.json());

app.use('/auth', authRoute);

const DEFAULT_PORT = 3000;
app.listen(process.env.PORT || DEFAULT_PORT, () => {
    console.log(`🔎 Server: http://localhost:${process.env.PORT || DEFAULT_PORT}`);
});