import express from "express";
import userModel from "../model/userModel";
import js from "../public/js/js";

const getAllUser = async (req, res) => {
  const user = req.session.user;
  let userList = await userModel.getAllUser();
  res.render("layout", {
    data: {
      title: "/",
      page: "users/user",
      rows: userList,
    },
    user,
  });
};

const getRegister = (req, res) => {
  const user = req.session.user;
  res.render("layout", {
    data: {
      title: "Register",
      page: "users/register",
      includeHeader: false,
      includeFooter: false,
    },
    user,
  });
};
const getHome = async (req, res) => {
  const user = req.session.user;
  const successMessage = req.session.successMessage || ""; // Đảm bảo là chuỗi rỗng nếu không có thông báo
  const errorMessage = req.session.errorMessage || ""; // Đảm bảo là chuỗi rỗng nếu không có thông báo

  req.session.successMessage = null;
  req.session.errorMessage = null;

  res.render("layout", {
    data: {
      title: "Trang chủ",
      page: "users/home",
      includeHeader: true,
      includeFooter: true,
      successMessage,
      errorMessage,
      user,
    },
  });
};

const getAbout = (req, res) => {
  const user = req.session.user;
  res.render("layout", {
    data: {
      title: "about",
      page: "user/about",
    },
    user,
  });
};
const getInforUser = async (req, res) => {
  const userId = req.params.id; // Lấy userId từ URL
  const user = await userModel.getInforUser(userId); // Gọi hàm với userId
  res.render("layout", {
    data: {
      title: "/show",
      page: "users/inforUser",
      rows: user,
    },
  });
};
const getEditUser = async (req, res) => {
  const userId = req.params.id;
  const user = await userModel.getInforUser(userId);
  res.render("layout", {
    data: {
      title: "/edit",
      page: "users/editUser",
      rows: user,
    },
  });
};
const getProfile = async (req, res) => {
  const id = req.session.user.id;
  const user = req.session.user;
  const userProfile = await userModel.getProfile(id);
  res.render("layout", {
    data: {
      title: "/profile",
      page: "users/me/profileUser",
      rows: userProfile,
    },
    user,
  });
};
const getSanpham = async (req, res) => {
  const sanphamData = await userModel.getSanpham();
  return res.json(sanphamData); // Gửi dữ liệu về client dưới dạng JSON
};

export {
  getAllUser,
  getInforUser,
  getEditUser,
  getProfile,
  getHome,
  getAbout,
  getRegister,
  getSanpham,
};
