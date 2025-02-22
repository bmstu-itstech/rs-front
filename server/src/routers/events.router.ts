import { Router } from "express";
import controllers from "../controllers";
import { auth } from "../middlewares";

const router = Router({ mergeParams: true });

router.route("/")
    .get(controllers.events.getEvents)
    .post(auth, controllers.events.addEvent)
    .put(auth, controllers.events.editEvent)
    .delete(auth, controllers.events.removeEvent);

export default router;
