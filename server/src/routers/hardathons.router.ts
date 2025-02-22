import { Router } from "express";
import controllers from "../controllers";
import { auth } from "../middlewares";

const router = Router({ mergeParams: true });

router.route("/")
    .get(controllers.hardathons.getHardathons)
    .post(auth, controllers.hardathons.addHardathon)
    .put(auth, controllers.hardathons.editHardathon)
    .delete(auth, controllers.hardathons.removeHardathon);

router.route("/:hardathonId/projects")
    .get(controllers.hardathons.getHardathonProjects)
    .post(auth, controllers.hardathons.addHardathonProject)
    .put(auth, controllers.hardathons.editHardathonProject)
    .delete(auth, controllers.hardathons.removeHardathonProject);

export default router;
