import express from "express";
import * as controller from "../controllers/index.js";

const router = express.Router();

/** sport api */
router.route("/admin/sport").post(controller.admin.create);
router.route("/admin/sport").get(controller.admin.find);
router.route("/admin/sport/:id").get(controller.admin.findOne);
router.route("/admin/sport").put(controller.admin.update);
router.route("/admin/sport/:id").delete(controller.admin.remove);
router.route("/admin/booking").post(controller.booking.create);
router.route("/admin/booking").get(controller.booking.get);
//user
router.route("/user/signup").post(controller.user.signup);
router.route("/user/login").post(controller.user.login);
router.route("/user/get/:id").get(controller.user.getUser);

export default router;
