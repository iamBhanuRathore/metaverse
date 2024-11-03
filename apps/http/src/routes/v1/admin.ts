import { Router } from "express";

const adminRouter = Router();
adminRouter.post("/element", (req, res) => {});
adminRouter.put("/element/:elementId", (req, res) => {});
adminRouter.get("/avatar", (req, res) => {});
adminRouter.post("/map", (req, res) => {});
export default adminRouter;
