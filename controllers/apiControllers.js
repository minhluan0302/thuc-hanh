import userModel from "../model/userModel";

const editUser = async (req, res) => {
  const userData = req.body;
  const userId = req.params.id;
  console.log("Dữ liệu từ form:", userData);
  await userModel.updateUser(userId, userData);
  res.send("User updated successfully");
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await userModel.deleteUser(userId);
  res.send("User delete successfully");
};
const login = async (req, res) => {
  const userData = req.body;
  const user = await userModel.login(userData);
  if (user) {
    req.session.user = {
      id: user[0].id,
      email: user[0].email,
      role: user[0].role,
    };
    console.log("User đã đăng nhập:", req.session.user.role);
    res.redirect("/profile/" + req.session.user.id);
  } else {
    res.status(401).send("Email hoặc mật khẩu không đúng.");
  }
};

export { editUser, deleteUser, login };
