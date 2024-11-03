import { Router } from "express";
import userRouter from "./user";
import adminRouter from "./admin";
import spaceRouter from "./space";

const router = Router();

router.post("/signin", (req, res) => {
  console.log(req);
  res.json({
    message: "Working",
  });
});

router.post("/signup", (req, res) => {
  console.log(req);
  res.json({
    message: "Working",
  });
});
router.get("/elements", (req, res) => {});
router.get("/avatars", (req, res) => {});
router.use("/user", userRouter);
router.use("/space", spaceRouter);
router.use("/admin", adminRouter);
export default router;
