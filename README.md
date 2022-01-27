La api esta en mi repositorio de github https://github.com/habemur/kubide.git

Hay que bajarsela, hacer npm install y despues entrar en la terminal en la ruta de la api y poner npm start.

Aqui te dejo las rutas de las peticiones con Postman para que las pruebes, estan a traves de localhost.

Crear mensaje => POST http://localhost:3000/mensajes
{"nick": "", "mensaje": ""}

Lista de mensajes => GET http://localhost:3000/mensajes

Editar mensajes => PUT http://localhost:3000/mensajes/:id
{"nick": "", "mensaje": ""}

Eliminar mensaje => DELETE http://localhost:3000/mensajes/:id

Registro con email unico=> POST http://localhost:3000/api/register
{
    "name": "",
    "email": "",
    "password": ""
}

Login con error si pones mal email y/o password => POST http://localhost:3000/api/login
{
    "email": "",
    "password": ""
}