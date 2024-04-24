import { getAccountsById } from "./utils/returnAllAccounts";
import { updateAccount } from "./utils/updateAccount";

getAccountsById({ id: 71 }).then((res) => console.log(res));
updateAccount({
  id: 71,
  column: "name",
  table: "clients",
  data: "Joao da silva batista"
}).then((res) => console.log(res));
getAccountsById({ id: 71 }).then((res) => console.log(res));