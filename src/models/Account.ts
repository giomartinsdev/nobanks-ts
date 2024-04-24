import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/database";
import { Client } from "./Client";

class Account extends Model {
  public id!: number;
  public acc_number!: number;
  public client_id!: number;
  public balance!: number;
}

Account.init(
  {
    acc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: () => Math.floor(Math.random() * 1000000),
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Client,
        key: "id",
      },
    },
    balance: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "accounts",
    sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export { Account };
