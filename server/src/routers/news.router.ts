import { Router } from "express";
import controllers from "../controllers";
import { auth } from "../middlewares";

const router = Router({ mergeParams: true });

router.route("/")
    .get(controllers.news.getNews)
    .post(auth, controllers.news.addNews);

router.get("/drafts", auth, controllers.news.getDrafts);

router.get("/:newsId", controllers.news.getNewsById);

router.post("/:newsId/publish", auth, controllers.news.publishNews);

export default router;
