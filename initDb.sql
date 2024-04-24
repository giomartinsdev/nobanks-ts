CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  document VARCHAR(14) NOT NULL,
  password VARCHAR(128) NOT NULL,
  email VARCHAR(128) NOT NULL,
  cellphone VARCHAR(128) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
  acc_id INT NOT NULL PRIMARY KEY,
  client_id INT NOT NULL,
  balance BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE accounts ADD CONSTRAINT accounts_client_id_fkey FOREIGN KEY (client_id) REFERENCES clients(id);


 -- RODAR PRIMEIRO DPS RODAR ISSO -> 



CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_accounts_modtime
BEFORE UPDATE ON accounts
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();


CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_modtime
BEFORE UPDATE ON clients
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();
