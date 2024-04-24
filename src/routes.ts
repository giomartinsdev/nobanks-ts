import { Router } from "express";
import {
  pingPongController,
  getClientController,
  createClientController,
  updateClientController,
  deleteClientController,
  createAccountController,
  getAccountsController,
} from "./controller";

const router = Router();

router.get("/ping", pingPongController);
router.get("/clients/:id", getClientController);
router.post("/clients", createClientController);
router.put("/clients/:id", updateClientController);
router.delete("/clients/:id", deleteClientController);
router.post("/clients/:id/accounts", createAccountController);
router.get("/clients/:id/accounts", getAccountsController);

export { router };
