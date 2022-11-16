/*  
id
cod_depto
departamento
cod_prov
provincia
cod_mun
municipio
cod_canton
canton
cod_local
localidad
codigo_dist
distrito
zona
direccion
gestion
prediotipo
*/

import { DataTypes } from 'sequelize'
import { sequelize } from "../db.js"

    export  const  InfraPredio = sequelize.define ('infra_predio',{
            id : {
                type : DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            cod_depto : DataTypes.STRING,
            departamento : DataTypes.STRING,
            cod_prov : DataTypes.STRING,
            provincia : DataTypes.STRING,
            cod_mun : DataTypes.STRING,
            municipio : DataTypes.STRING,
            cod_canton : DataTypes.STRING,
            canton : DataTypes.STRING,
            cod_local : DataTypes.STRING,
            localidad : DataTypes.STRING,
            codigo_dist : DataTypes.INTEGER,
            distrito : DataTypes.STRING,
            zona : DataTypes.STRING,
            direccion : DataTypes.STRING,
            gestion : DataTypes.INTEGER,
            prediotipo : DataTypes.STRING,
        },{
            timestamps: false,
          })
    