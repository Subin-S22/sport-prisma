import express from "express";
import * as admin from "../controllers/index.js";

const router = express.Router();

/** sport api */
router.route("/admin/sport").post(admin.create);
router.route("/admin/sport").get(admin.find);
router.route("/admin/sport/:id").get(admin.findOne);
router.route("/admin/sport").put(admin.update);
router.route("/admin/sport/:id").delete(admin.remove);

export default router;
