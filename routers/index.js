import { getHome } from "../controllers/mainControllers";
const initWebRoutes = (app) => {
  app.get("/", getHome);
};
export default initWebRoutes;
