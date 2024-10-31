import { getAbout } from "../controllers/mainControllers";
import {
  getAllUser,
  getInforUser,
  getEditUser,
  getProfile,
} from "../controllers/userControllers";
import { editUser, deleteUser, login } from "../controllers/apiControllers";
import { checkUser, checkAdmin } from "../middleware/login";
const initWebRoutes = (app) => {
  app.get("/", getAllUser);
  app.get("/about", checkAdmin, getAbout);
  app.get("/show/:id", getInforUser);
  app.get("/edit/:id", getEditUser);
  app.get("/profile/:id", checkUser, getProfile);

  // API
  app.post("/edit/:id/repair", editUser);
  app.post("/delete/:id", deleteUser);
  app.post("/login", login);
};
export default initWebRoutes;
