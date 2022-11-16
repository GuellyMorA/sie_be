import {Router} from 'express'
import {getInfraPredioSecundarios, createInfraPredio, getInfraPredioPrincipal, getInfraPredioTodos}from '../controllers/infra_predio_tipo.controller.js'
import {creaInfraPredio} from '../controllers/infra_predio.controllers.js'
import {leeUbicacion, leeUniOperan, listaFotosPredio} from '../controllers/infra_predio_datos_generales.controller.js'
const router = Router()

router.get('/infrapredio_p/:jurisdiccion/:gestion',getInfraPredioPrincipal)
router.get('/infrapredio_s/:jurisdiccion/:gestion',getInfraPredioSecundarios)
router.get('/infrapredios/:jurisdiccion/:gestion',getInfraPredioTodos)
router.post('/infrapredio',creaInfraPredio)
router.put('/infrapredio/:id')
router.delete('/infrapredio/:id')
router.get('/infrapredio/:id')

//datos generales : ubicacion

router.get('/infrapredio_ubicacion/:predioId',leeUbicacion)

//datos generales : unidades que operan
router.get('/infrapredio_uni_oper/:predioId',leeUniOperan)

//datos generales : registro fotografico

router.get('/infrapredio_fotografias/:predioId',listaFotosPredio)



export default router