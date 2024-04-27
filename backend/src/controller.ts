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
    res.json(`Cliente ${newAccount.client_id} criado com sucesso!`);
  } catch (err) {
    console.error("Erro ao criar conta", err);
    res.status(500).send("Erro ao criar conta");
  }
};
export const getClientController = async (req: Request, res: Response) => {
  try {
    const client = await Client.findByPk(req.params.id);
    res.json(client);
  } catch (err) {
    console.error("Erro ao obter cliente", err);
    res.status(500).send("Erro ao obter cliente");
  }
};

export const updateClientController = async (req: Request, res: Response) => {
  try {
    await updateAccountOrClient(req.body);
    res.json(`Cliente ${req.body.id} atualizado com sucesso!`);
  } catch (err) {
    console.error("Erro ao atualizar cliente", err);
    res.status(500).send("Erro ao atualizar cliente");
  }
};

export const deleteClientController = async (req: Request, res: Response) => {
  try {
    await inactivateClientbyId(req.body);
    res.json(`Cliente ${req.params.id} inativado com sucesso!`);
  } catch (err) {
    console.error("Erro ao inativar cliente", err);
    res.status(500).send("Erro ao inativar cliente");
  }
};

export const getAccountsController = async (req: Request, res: Response) => {
  try {
    const accounts = await getAccountsByClientId({ id: Number(req.params.id) });
    res.json(accounts);
  } catch (err) {
    console.error("Erro ao obter contas", err);
    res.status(500).send("Erro ao obter contas");
  }
};