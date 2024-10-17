import pool from "../configs/connectDB";
const getAllUser = async () => {
  const [rows, fields] = await pool.execute("SELECT * FORM `user`");
  return rows;
};
export default { getAllUser };
