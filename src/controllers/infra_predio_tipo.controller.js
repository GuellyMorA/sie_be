import {InfraPredioTipo} from '../models/infra_predio_tipo.js'
const sequelize = InfraPredioTipo.sequelize
export const getInfraPredioPrincipal = async (req,res) => {
    
    const sql =  `select ip.id as predioid, ip.jurisdiccion_geografica_id as jgid, ip.gestion_tipo_id as gestion,ip.zona as zona,ip.direccion as direccion, ipt.nivel,nombre_predio
    from infra_predio ip
    inner join infra_predio_tipo ipt on ip.infra_predio_tipo_id = ipt.id
    where jurisdiccion_geografica_id=` + req.params.jurisdiccion + ` and ipt.id = 1 and ip.gestion_tipo_id =` + req.params.gestion;

    const infraSql = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    //console.log(infraSql);
    //const infra = await InfraPredioTipo.findAll()
    res.json(infraSql)
}

export const getInfraPredioSecundarios = async (req,res) => {
    
    const sql =  `select ip.id as predioid, ip.jurisdiccion_geografica_id as jgid, ip.gestion_tipo_id as gestion,ip.zona as zona,ip.direccion as direccion, ipt.nivel,nombre_predio
    from infra_predio ip
    inner join infra_predio_tipo ipt on ip.infra_predio_tipo_id = ipt.id
    where jurisdiccion_geografica_id=` + req.params.jurisdiccion + ` and ipt.id = 2 and ip.gestion_tipo_id =` + req.params.gestion;

    const infraSql = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    //console.log(infraSql);
    //const infra = await InfraPredioTipo.findAll()
    res.json(infraSql)
}

export const getInfraPredioTodos = async (req,res) => {
    
    const sql =  `select ip.id as predioid, ip.jurisdiccion_geografica_id as jgid, ip.gestion_tipo_id as gestion,ip.zona as zona,ip.direccion as direccion, ipt.nivel,nombre_predio
    from infra_predio ip
    inner join infra_predio_tipo ipt on ip.infra_predio_tipo_id = ipt.id
    where jurisdiccion_geografica_id=` + req.params.jurisdiccion + ` and ip.gestion_tipo_id =` + req.params.gestion;

    const infraSql = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
    //console.log(infraSql);
    //const infra = await InfraPredioTipo.findAll()
    res.json(infraSql)
}
export const createInfraPredio = (req,res) => {
    const {nivel,es_vigente}=req.body
    InfraPredioTipo.create
    //res.send('este es un crea del infra')
}