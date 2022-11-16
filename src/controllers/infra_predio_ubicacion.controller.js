import {InfraPredio} from '../models/infra_predio.js'
const sequelize = InfraPredio.sequelize

export const leeUbicacion = (req,res) => {
    var datosUe_sql = `SELECT jg.*,p.zona,p.direccion,p.gestion_tipo_id as gestion, ipt.nivel as prediotipo
    from infra_predio p inner join infra_predio_tipo ipt on ipt.id = p.infra_predio_tipo_id
   join (SELECT jg.id,lt4.codigo as cod_depto,lt4.lugar as departamento,lt3.codigo as cod_prov,lt3.lugar as provincia
   ,lt2.codigo as cod_mun,lt2.lugar AS municipio,lt1.codigo as cod_canton,lt1.lugar AS canton
   ,lt.codigo as cod_local,lt.lugar AS localidad,
   d.id AS codigo_dist,d.distrito
   from jurisdiccion_geografica jg
   INNER JOIN lugar_tipo lt on jg.lugar_tipo_id_localidad = lt.id
   INNER JOIN lugar_tipo lt1 on lt.lugar_tipo_id = lt1.id
   INNER JOIN lugar_tipo lt2 on lt1.lugar_tipo_id = lt2.id
   INNER JOIN lugar_tipo lt3 on lt2.lugar_tipo_id = lt3.id
   INNER JOIN lugar_tipo lt4 on lt3.lugar_tipo_id = lt4.id
   INNER JOIN distrito_tipo d on jg.distrito_tipo_id = d.id) as jg on p.jurisdiccion_geografica_id = jg.id
   WHERE p.id =` + req.params.predioId;
    return sequelize.query(datosUe_sql, {
    type: sequelize.QueryTypes.SELECT
    }, {
    raw: true
    })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(400).send(error));
}
export const ssssleeUniOperan = (req, res) => {
    
    var consulta = `
    select ipie.id, ip.id as idpredio,ip.jurisdiccion_geografica_id as coddificio,  ie.id as sie,ie.institucioneducativa,iet.descripcion,(per.paterno||' '||per.materno||' '||per.nombre) as director,
    per.celular as telefono,itt.id as tenenciaid,itt.tenencia,ipie.representante,ipie.bth_especialidad as bth
    from infra_predio ip
    inner join infra_predio_institucioneducativa  ipie on ipie.infra_predio_id =ip.id
    inner join institucioneducativa ie on ie.id = ipie.institucioneducativa_id
    inner join institucioneducativa_tipo iet on iet.id =ie.institucioneducativa_tipo_id
    left join maestro_inscripcion mi on mi.institucioneducativa_id =ie.id and mi.cargo_tipo_id = 1 and mi.es_vigente_administrativo = true and mi.gestion_tipo_id =2019
    left join persona per on per.id = mi.persona_id
    left join infra_tenencia_tipo itt on itt.id = ipie.infra_tenencia_tipo_id
    where  ip.id = ` + req.params.predioid;
    
    let  v = sequelize.query(consulta, {
            type: sequelize.QueryTypes.SELECT
        }, {
            raw: true
        })
        .then((data) => res.status(200).send(data))
        .catch((error) => res.status(400).send(error));

}