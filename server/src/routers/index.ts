import { Router } from "express";
import achievements from "./achievements.router";
import docs from "./docs.router";
import events from "./events.router";
import hardathons from "./hardathons.router";
import news from "./news.router";

const router = Router({ mergeParams: true });

router.use("/achievements", achievements);
router.use("/docs", docs);
router.use("/events", events);
router.use("/hardathons", hardathons);
router.use("/news", news);

export default router;
