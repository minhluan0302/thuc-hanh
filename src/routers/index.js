import {
  getAllUser,
  getInforUser,
  getEditUser,
  getProfile,
  getHome,
  getAbout,
  getRegister,
  getSanpham,
} from "../controllers/userControllers";
import {
  editUser,
  deleteUser,
  login,
  distroySession,
  getGroup,
} from "../controllers/apiControllers";
import { checkUser, checkAdmin } from "../middleware/login";
const initWebRoutes = (app) => {
  app.get("/", checkAdmin, getAllUser);
  app.get("/about", getAbout);
  app.get("/show/:id", checkAdmin, getInforUser);
  app.get("/edit/:id", checkAdmin, getEditUser);
  app.get("/profile/:id", checkUser, getProfile);
  app.get("/home", getHome);
  app.get("/register", getRegister);
  // API
  app.post("/edit/:id/repair", editUser);
  app.post("/delete/:id", deleteUser);
  app.post("/login", login);
  app.post("/disstroy", distroySession);
  app.get("/sanpham", getSanpham);
  app.get("/group", getGroup);
};
export default initWebRoutes;
