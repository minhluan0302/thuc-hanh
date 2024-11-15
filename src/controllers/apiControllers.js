import userModel from "../model/userModel";
import jwt from "jsonwebtoken";
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
    return res.status(400).json({ message: "Email hoặc mật khẩu không đúng." }); // Trả về lỗi JSON
  } else {
    req.session.user = {
      id: user[0].id,
      email: user[0].email,
      role: user[0].role,
      fullname: user[0].fullname,
    };

    // Tạo token
    const token = jwt.sign(
      {
        id: user[0].id,
        email: user[0].email,
        role: user[0].role,
        fullname: user[0].fullname,
      },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: "15m", // Chỉnh thành phút thay vì "15" để tránh nhầm lẫn
      }
    );

    // Lưu token vào cookie
    res.cookie("authToken", token, {
      httpOnly: true, // Không thể truy cập cookie từ JavaScript client-side
      secure: process.env.NODE_ENV === "production", // Chỉ sử dụng cookie với HTTPS khi ở môi trường production
      maxAge: 15 * 60 * 1000, // Hết hạn sau 15 phút
    });

    req.session.successMessage = "Đăng nhập thành công!"; // Lưu thông báo thành công vào session

    // Trả về JSON thông báo đăng nhập thành công
    return res.status(200).json({
      message: "Đăng nhập thành công!",
      user: {
        id: user[0].id,
        email: user[0].email,
        fullname: user[0].fullname,
        role: user[0].role,
      },
    });
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
