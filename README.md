# sie_be

### Vesion Nodejs
Instalar nvm para windows 
seguir el tutorial
https://4geeks.com/how-to/nvm-install-windows

### mediante nvm instalar la version 16.17.0

### verificar con nvm 

nvm list 

### despliega todas las versiones de nodejs instaladas en windows

 16.17.0 
* 12.13.1 (Currently using 64-bit executable)

### activar la version 16.17.0

nvm use 16.17.0

### verificar el cambio 

nvm list 

* 16.17.0 (Currently using 64-bit executable)
12.13.1 

### ***(Para cambiar la version de nodejs con nvm la linea de comandos se debe ejecutar como ADMINISTRADOR )***

### Para acceso a PG se debe configurar el el archivo 'be_n\config\default.json'

### intalar nodemon de alcance global

npm instal nodemon -g

### para iniciar el BE

nodemon src/index.js -p 4000 

### donde -p es el puerto de escucha 
