/*  id serial4 NOT NULL,
	jurisdiccion_geografica_id int4 NULL,
	latitud_x varchar(255) NULL,
	longitud_y varchar(255) NULL,
	direccion varchar NULL,
	zona varchar NULL,
	gestion_tipo_id int4 NULL,
	fecha_registro date NULL,
	tramo_troncal varchar(255) NULL,
	tramo_complementario varchar(255) NULL,
	tramo_vecinal varchar(255) NULL,
	infra_predio_tipo_id int4 NULL,
	descripcion varchar(255) NULL,
	nombre_predio varchar(100) NULL,
	operativo bool NULL, */

import { DataTypes } from 'sequelize'
import { sequelize } from "../db.js"

    export  const  InfraPredio = sequelize.define ('infra_predio',{
            id : {
                type : DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            jurisdiccion_geografica_id : DataTypes.INTEGER,
            latitud_x : DataTypes.STRING,
            longitud_y : DataTypes.STRING,
            direccion : DataTypes.STRING,
            zona : DataTypes.STRING,
            gestion_tipo_id : DataTypes.INTEGER,
            fecha_registro : DataTypes.DATEONLY,
            tramo_troncal : DataTypes.STRING,
            tramo_complementario : DataTypes.STRING,
            tramo_vecinal : DataTypes.STRING,
            infra_predio_tipo_id : DataTypes.INTEGER,
            descripcion : DataTypes.STRING,
            nombre_predio : DataTypes.STRING,
            operativo : DataTypes.BOOLEAN,
        },{
            tableName: 'infra_predio',
            timestamps: false,
          })
    