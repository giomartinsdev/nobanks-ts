import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/database";

class Client extends Model {
  public id!: number;
  public name!: string;
  public document!: string;
  public password!: string;
  public cellphone!: string;
  public email!: string;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: () => Math.floor(Math.random() * 1000000),
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING(14),
      allowNull: false,
      validate: {
        len: {
          args: [11, 14],
          msg: "O campo 'document' deve ter 11 ou 14 caracteres",
        },
      },
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isEmail: {
          msg: "O campo 'email' deve ser um email válido",
        },
      },
    },
    cellphone: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        is: {
          args: [/^\+?[1-9]\d{1,14}$/],
          msg: "O campo 'cellphone' deve ser um número de telefone válido",
        },
      },
    },
  },
  {
    tableName: "clients",
    sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export { Client };
