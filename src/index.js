import {exit} from 'process'
import argv from "./args.js"
import app  from "./app.js"
import Men from "./carga.js"
import {sequelize} from "./db.js"

import infrePredio from "../src/routes/infea_pedio_tipo.js"

app.use(infrePredio)


let PORT = null

argv.p ? PORT=argv.p : PORT=3000 


app.listen(PORT,()=>{
  console.log(Men.ESC,PORT);
}).on('error',(err)=>{
  if(err.code='EADDRINUSE')
  {
  console.log(`El puerto ${PORT} esta en uso, intente con un puerto diferente`)
  exit(1)
  }
   
})


console.log('**',argv); 

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }