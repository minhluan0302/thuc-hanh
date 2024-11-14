import userModel from "../model/userModel";
const editUser = async (req, res) => {
  const userData = req.body;
  const userId = req.params.id;
  await userModel.updateUser(userId, userData);
  res.send("User updated successfully");
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  await userModel.deleteUser(userId);
  res.send("User delete successfully");
};
const login = async (req, res) => {
  const userData = req.body;
  const user = await userModel.login(userData);

  // Kiểm tra xem người dùng có tồn tại hay không
  if (!user || user.length === 0) {
    req.session.errorMessage = "Email hoặc mật khẩu không đúng."; // Lưu thông báo lỗi vào session
    return res.redirect("/home"); // Chuyển hướng đến trang chính
  } else {
    req.session.user = {
      id: user[0].id,
      email: user[0].email,
      role: user[0].role,
      fullname: user[0].fullname,
    };
    req.session.successMessage = "Đăng nhập thành công!"; // Lưu thông báo thành công vào session
    return res.redirect("/home"); // Chuyển hướng đến trang chính
  }
};

const distroySession = (req, res) => {
  req.session.destroy();
  res.redirect("/home");
};
const getGroup = async (req, res) => {
  const listGroup = await userModel.getGroup();
  return res.json(listGroup);
};
const getDetailProduct = async (req, res) => {
  const id = req.params.id;
  const product = await userModel.getDetailProduct(id);
  console.log(product);
  return res.json(product);
};
const getProductTheGroup = async (req, res) => {
  const idGroup = req.params.idGroup;
  const productTheGroup = await userModel.getProductTheGroup(idGroup);
  return res.json(productTheGroup);
};
export {
  editUser,
  deleteUser,
  login,
  distroySession,
  getGroup,
  getDetailProduct,
  getProductTheGroup,
};
