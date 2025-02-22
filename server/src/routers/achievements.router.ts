import { Router } from "express";
import controllers from "../controllers";
import { auth } from "../middlewares";

const router = Router({ mergeParams: true });

router.route("/")
    .get(controllers.achievements.getAchievements)
    .post(auth, controllers.achievements.createAchievement)
    .put(auth, controllers.achievements.editAchievement)
    .delete(auth, controllers.achievements.deleteAchievement);

router.get("/:achievementId", controllers.achievements.getAchievementById);

export default router;
