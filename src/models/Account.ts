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
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: () => Math.floor(Math.random() * 1000000),
    },
    acc_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
