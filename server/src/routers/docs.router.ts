import { Router } from "express";
import controllers from "../controllers";
import { auth } from "../middlewares";

const router = Router({ mergeParams: true });

router.route("/")
    .get(controllers.docs.getDocs)
    .post(auth, controllers.docs.addDoc)
    .delete(auth, controllers.docs.removeDoc);

export default router;
