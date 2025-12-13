import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
export const db = mysql.createPool(process.env.DATABASE_URL);











// import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// const isProd = process.env.NODE_ENV === "production";

// export const db = await mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   ssl: isProd
//     ? {
//         rejectUnauthorized: false, // RAILWAY requires this
//       }
//     : false,
// });
