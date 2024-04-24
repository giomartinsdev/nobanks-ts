import { Router } from "express";
import {
  pingPongController,
  createClientController,
  createAccountController,
  inactivateClientController,
  updateAccountOrClientController,
  returnAllAccountsController,
} from "./controller";

const router = Router();

router.get("/ping", pingPongController);
router.post("/createClient", createClientController);
router.post("/createAccount", createAccountController);
router.post("/inactivateClient", inactivateClientController);
router.post("/updateAccountOrClient", updateAccountOrClientController);
router.post("/returnAllAccounts", returnAllAccountsController);

export { router };
