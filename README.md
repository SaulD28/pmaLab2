# API del Sistema de Adopción

Esta API está diseñada para gestionar citas para adopciones de mascotas. Incluye funcionalidades para crear, actualizar y listar citas, así como gestionar la información del usuario.

## Variables de Entorno

Cree un archivo `.env` en el directorio raíz y agregue las siguientes variables:

```
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

## Endpoints de la API

### Citas

- **Crear Cita**
  - **URL:** `/api/appointment/createAppointment`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "date": "2023-10-15T14:48:00.000Z",
      "status": "CREATED",
      "pet": "<pet_id>",
      "user": "<user_id>"
    }
    ```

### Usuarios

- **Registrar Usuario**
  - **URL:** `/api/user/register`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```

- **Iniciar Sesión**
  - **URL:** `/api/user/login`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- **Obtener Usuario por ID**
  - **URL:** `/api/use/:uid`
  - **Método:** `GET`

- **Eliminar Usuario**
  - **URL:** `/api/user/:uid`
  - **Método:** `DELETE`

- **Actualizar Contraseña del Usuario**
  - **URL:** `/api/user/:uid/password`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
      "newPassword": "string"
    }
    ```

### Mascotas

- **Registrar Mascota**
  - **URL:** `/api/pet/register`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "age": "number",
      "type": "string",
      "breed": "string"
    }
    ```

- **Obtener Mascota por ID**
  - **URL:** `/api/pet/:pid`
  - **Método:** `GET`

- **Eliminar Mascota**
  - **URL:** `/api/pet/:pid`
  - **Método:** `DELETE`

- **Actualizar Información de la Mascota**
  - **URL:** `/api/pet/:pid`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
      "name": "string",
      "age": "number",
      "type": "string",
      "breed": "string"
    }
    ```

## Funcionalidades Adicionales

Las siguientes funcionalidades necesitan ser desarrolladas:

1. **Actualizar Foto del Usuario**
   - Descripción: Implementar funcionalidad para actualizar la foto de perfil del usuario.

    **Actualizar foto de perfil del usuario**
  - **URL:** `/adoptionSystem/v1/user/updateProfilePicture/:uid`
  - **Método:** `PATCH`
  - **Cuerpo:**
    ```json
    {
      "key": "profilePicture",
		  "type": "file",
		  "src": "postman-cloud:///1ef4dc1f-9b79-4680-a529-ea114dc8ffeb"
    }



2. **Listar Citas**
   - Descripción: Implementar funcionalidad para listar todas las citas de un usuario.

  - **Obtener cita por ID**
  - **URL:** ` http://127.0.0.1:3001/adoptionSystem/v1/appointment/getAppointmentUser/`
  - **Método:** `GET`
    ```json
    {
        "success": true,
        "total": 0,
        "appointments": []
    }



3. **Actualizar Cita**
   - Descripción: Implementar funcionalidad para actualizar una cita existente.

    **Actualizar Información de la cita**
  - **URL:** ` http://127.0.0.1:3001/adoptionSystem/v1/appointment/updateAppointment/:uid`
  - **Método:** `PUT`
  - **Cuerpo:**
  ```json
  {
    "date": "2028-12-15T14:24:00.0000",
    "status": "CREATED",
    "pet": "uid",
    "user": "uid"
  }



4. **Cancelar Cita**
   - Descripción: Implementar funcionalidad para cancelar una cita existente.

    **CANCELAR CITA**
    **Método:** `DELETE`
    **URL:** ` http://127.0.0.1:3001/adoptionSystem/v1/appointment/cancelAppointment/:uid`