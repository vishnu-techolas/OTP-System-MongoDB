import { connect } from "mongoose";

export const db = {
    connect: async () => {
        try {
            const conn = await connect(process.env.MONGO_URI, {
                dbName: process.env.MONGO_DB_NAME
            });
            return console.log(`📈 MongoDB: ${conn.connection.db.databaseName}`)
        } catch (error) {
            return process.exit(1);
        }
    }
}