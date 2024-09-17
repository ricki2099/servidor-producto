
# Servicio/API CRUD con Express, Mongoose y MongoDB

Este repositorio contiene un servicio/API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando **Express** como framework para Node.js, **Mongoose** para interactuar con **MongoDB** y **MongoDB** como base de datos.

## Requisitos

- Node.js (>= 14.x)
- MongoDB (>= 4.x)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/ricki2099/servidor-producto.git
   ```

2. **Accede al directorio del proyecto:**

   ```bash
   cd servidor-producto
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y define la URL de conexión a tu base de datos MongoDB:

   ```env
   MONGO_URI=mongodb://localhost:27017/tu-base-de-datos
   ```

## Ejecución

Para iniciar el servidor, ejecuta:

```bash
npm run dev
```
````

El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### Crear un nuevo recurso

- **Ruta:** `POST /api/productos`
- **Cuerpo:**

      ```json
      {
      "categoria": "Cerveza",
      "nombre": "Andina",
      "precio": 4000,
      "ubicacion": "Colombia"

  }

  ```

  ```

- **Respuesta exitosa:**

  ```json
  {
    "nombre": "Andina",
    "categoria": "Cerveza",
    "ubicacion": "Colombia",
    "precio": 4000,
    "fechaCreacion": "2024-09-17T21:10:59.693Z",
    "_id": "66e9f5370557c2c871a4fb53",
    "__v": 0
  }
  ```

### Leer todos los recursos

- **Ruta:** `GET /api/productos`

- **Respuesta exitosa:**

  ```json
  [
      {
        "_id": "66e9dfc1ebc7c87de271c856",
        "nombre": "Prueba",
        "categoria": "123",
        "ubicacion": "132",
        "precio": 1,
        "fechaCreacion": "2024-09-17T19:59:50.938Z",
        "__v": 0
    },
      ...
  ]
  ```

### Leer un recurso por ID

- **Ruta:** `GET /api/productos/:id`

- **Respuesta exitosa:**

  ```json
  {
    "campo1": "valor1",
    "campo2": "valor2",
    "_id": "id_del_recurso"
  }
  ```

### Actualizar un recurso por ID

- **Ruta:** `PUT /api/productos:id`
- **Cuerpo:**

  ```json
  {
    "categoria": "bebidas",
    "nombre": "Coca cola",
    "precio": 2000,
    "ubicacion": "Valencia"
  }
  ```

- **Respuesta exitosa:**

  ```json
  {
    "_id": "66e9e0bfebc7c87de271c858",
    "nombre": "Coca cola",
    "categoria": "bebidas",
    "ubicacion": "Valencia",
    "precio": 2000,
    "fechaCreacion": "2024-09-17T19:59:50.938Z",
    "__v": 0
  }
  ```

### Eliminar un recurso por ID

- **Ruta:** `DELETE /api/productos/:id`

- **Respuesta exitosa:**

  ```json
  {
    "mensaje": "Recurso eliminado exitosamente",
    
  }
  ```

## Estructura del Proyecto

- `index.js`: Archivo principal donde se configura y se inicializa el servidor Express.
- `models/`: Contiene los modelos de Mongoose.
- `routes/`: Define las rutas y controladores de la API.
- `controllers/`: Implementa la lógica de negocio para las rutas.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias, errores o mejoras, siéntete libre de abrir un **issue** o enviar un **pull request**.

## Contacto

Para más información, visita mi perfil de LinkedIn: [Richard](https://www.linkedin.com/in/ricardo-rodriguez-bareño/)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

```

Este `README.md` proporciona una guía completa para instalar, ejecutar y utilizar el servicio/API. También incluye detalles sobre los endpoints y cómo interactuar con ellos, así como información sobre cómo contribuir al proyecto. ¡Espero que te sea útil!
```