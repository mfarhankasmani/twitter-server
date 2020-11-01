import { Router } from "express";
import { getSearch } from "../controllers/searchController";

const router = Router();

router.get("/:name", getSearch);

export default router;
