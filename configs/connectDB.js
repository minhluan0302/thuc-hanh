import mysql from "mysql2";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "laptrinhweb",
  password: "",
});
const conection = pool.promise();
export default conection;
