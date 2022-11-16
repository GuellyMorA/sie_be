import dbc from "./config.js"
import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    dbc.dbName,
    dbc.username,
    dbc.pass,
    {
        host:dbc.host,
        dialect:dbc.username
    }
)

//const sequelize = new Sequelize()