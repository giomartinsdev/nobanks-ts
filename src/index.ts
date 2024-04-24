import { getAccountsByClientId } from "./utils/returnAllAccounts";
import { updateAccount } from "./utils/updateRow";
import { createAccount } from "./create/createAccount";
import { createClient } from "./create/createClient";

getAccountsByClientId({ id: 71 }).then((res: any) => console.log(res));
getAccountsByClientId({ id: 38 }).then((res: any) => console.log(res));

// createClient({ name: "maria", document: "99999999999", password: "654789", cellphone: "21981978888", email: "gio@gio.com"})

createAccount({ acc_number: 333222, client_id: 72, balance: 2781362})
