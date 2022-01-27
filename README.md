Peticiones:

Crear mensaje => POST http://localhost:3000/mensajes
{"nick": "", "mensaje": ""}

Lista de mensajes => GET http://localhost:3000/mensajes

Editar mensajes => PUT http://localhost:3000/mensajes/:id
{"nick": "", "mensaje": ""}

Eliminar mensaje => DELETE http://localhost:3000/mensajes/:id

Registro => POST http://localhost:3000/api/register
{
    "name": "",
    "email": "",
    "password": ""
}

Login => POST http://localhost:3000/api/login
{
    "email": "",
    "password": ""
}