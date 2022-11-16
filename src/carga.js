import { createRequire } from "module";

const require = createRequire(import.meta.url);
const  MENSAJE = require ("./idioma/es/app.json")

export default MENSAJE