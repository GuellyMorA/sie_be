import { DataTypes } from 'sequelize'
import { sequelize } from "../db.js"
export const InfraPredioFotos= sequelize.define('InfraPredioFotos', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		infraPredioId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'infra_predio',
				key: 'id'
			},
			field: 'infra_predio_id'
		},
		imagen: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'imagen'
		},
		fechaRegistro: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'fecha_registro'
		},
		descripcion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'descripcion'
		}
	}, {
		tableName: 'infra_predio_foto',
		timestamps: false
	});
