import { Request, Response } from "express";
import { Client } from "./models/Client";
import { Account } from "./models/Account";
import { inactivateClientbyId } from "./utils/inactivateClient";
import { updateAccountOrClient } from "./utils/updateRow";
import { getAccountsByClientId } from "./utils/returnAllAccounts";

export const pingPongController = (req: Request, res: Response) => {
  res.send("pong!");
};

export const createClientController = async (req: Request, res: Response) => {
  try {
    const newClient = await Client.create(req.body);
    res.json(`Cliente ${newClient.id} criado com sucesso!`);
  } catch (err) {
    console.error("Erro ao criar cliente", err);
    res.status(500).send("Erro ao criar cliente");
  }
};

export const createAccountController = async (req: Request, res: Response) => {
  try {
    const newAccount = await Account.create(req.body);
    res.json(`Cliente ${newAccount.id} criado com sucesso!`);
  } catch (err) {
    console.error("Erro ao criar conta", err);
    res.status(500).send("Erro ao criar conta");
  }
};
export const inactivateClientController = async (req: Request,res: Response) => {
  try {
    await inactivateClientbyId(req.body);
    res.json(`Cliente ${req.body.id} inativado com sucesso!`);
  } catch (err) {
    console.error("Erro ao inativar conta", err);
    res.status(500).send("Erro ao criar conta");
  }
};

export const updateAccountOrClientController = async (req: Request, res: Response) => {
  try {
    await updateAccountOrClient(req.body);
    res.json(`${req.body.id} atualizado com sucesso!`);
  } catch (err) {
    console.error("Erro ao atualizar conta", err);
    res.status(500).send("Erro ao atualizar conta");
  }
};

export const returnAllAccountsController = async (req: Request, res: Response) => {
  try {
    await getAccountsByClientId(req.body).then((accounts) => res.json(accounts));
  } catch (err) {
    console.error("Erro ao retornar contas", err);
    res.status(500).send("Erro ao retornar contas");
  }
};
