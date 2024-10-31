import pool from "../configs/connectDB";

const getAllUser = async () => {
  const [rows, fields] = await pool.execute("SELECT * FROM `user`");
  return rows;
};
const getInforUser = async (userId) => {
  const [rows, fields] = await pool.execute(
    "SELECT * FROM `user` WHERE id = ?",
    [userId || null]
  );
  return rows[0];
};
const updateUser = async (userId, newUserData) => {
  const { username, fullname, address, sex, email } = newUserData;
  const [rows, fields] = await pool.execute(
    "UPDATE `user` SET username = ?, fullname = ?, address = ? , sex= ?, email = ? WHERE id = ?",
    [username, fullname, address, sex, email, userId]
  );
  console.log(rows);
  return rows;
};
const deleteUser = async (userId) => {
  const [rows, fields] = await pool.execute("DELETE FROM `user` WHERE id = ?", [
    userId,
  ]);
  return rows;
};
const getProfile = async (id) => {
  const [rows, fields] = await pool.execute(
    "SELECT * FROM `user` WHERE id =?",
    [id]
  );
  return rows;
};
const login = async (userData) => {
  const { email, password } = userData;

  const [rows] = await pool.execute(
    "SELECT * FROM `user` WHERE email = ? AND password = ?",
    [email, password]
  );

  console.log(rows);
  return rows;
};

export default {
  getAllUser,
  getInforUser,
  updateUser,
  deleteUser,
  login,
  getProfile,
};
