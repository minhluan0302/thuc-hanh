import express from "express";
import userModel from "../model/userModel";
const getAllUser = async (req, res) => {
  let userList = await userModel.getAllUser();
  res.render("views/layout", {
    data: {
      title: "/",
      page: "user",
      rows: userList,
    },
  });
};
const getInforUser = async (req, res) => {
  const userId = req.params.id; // Lấy userId từ URL
  const user = await userModel.getInforUser(userId); // Gọi hàm với userId
  res.render("views/layout", {
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
  res.render("views/layout", {
    data: {
      title: "/edit",
      page: "users/editUser",
      rows: user,
    },
  });
};
const getProfile = async (req, res) => {
  const id = req.session.user.id;
  const user = await userModel.getProfile(id);
  res.render("views/layout", {
    data: {
      title: "/profile",
      page: "users/profileUser",
      rows: user,
    },
  });
};
export { getAllUser, getInforUser, getEditUser, getProfile };
