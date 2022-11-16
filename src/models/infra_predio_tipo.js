/*   id serial4 NOT NULL,
	nivel varchar(32) NULL,
	es_vigente varchar(255) NULL,
	fecha_registro2 timestamp NULL,
	fecha_modificacion timestamp NULL, */

import { DataTypes } from 'sequelize'
import { sequelize } from "../db.js"

    export  const  InfraPredioTipo = sequelize.define ('infra_predio_tipo',{
            id : {
                type : DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nivel : DataTypes.STRING,
            es_vigente : DataTypes.STRING,
            fecha_registro2 : DataTypes.DATE,
            fecha_modificacion : DataTypes.DATE
        },{
            tableName: 'infra_predio_tipo',
            timestamps: false,
          })
    