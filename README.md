# 📝 Task Manager API

Una API RESTful desarrollada con **NestJS**, **JWT**, **Prisma** y **PostgreSQL**, diseñada para gestionar tareas protegidas por autenticación.

---

## 🚀 Características

- Registro y login de usuarios
- Autenticación con JWT
- CRUD de tareas por usuario
- Validación de acceso por token
- Conexión con PostgreSQL mediante Prisma
- Docker Compose para base de datos local
- Documentación Swagger automática

---

## 📦 Tecnologías

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Docker](https://www.docker.com/)

---


---

## 📦 Dependencias Principales

Estas son las bibliotecas usadas en el proyecto:

- `@nestjs/core` – Core del framework NestJS
- `@nestjs/common` – Utilidades comunes de NestJS
- `@nestjs/jwt` – Manejo de JWT
- `@nestjs/passport` – Integración de Passport
- `passport` – Autenticación con estrategias
- `passport-jwt` – Estrategia JWT para Passport
- `bcrypt` – Hash de contraseñas
- `@prisma/client` – Cliente de base de datos Prisma
- `prisma` – ORM para base de datos PostgreSQL
- `@nestjs/swagger` – Documentación Swagger para NestJS
- `swagger-ui-express` – UI para Swagger

Instálalas con:

```bash
npm install @nestjs/core @nestjs/common @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt @prisma/client @nestjs/swagger swagger-ui-express
npm install prisma --save-dev
```


## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/task-manager-api.git
cd task-manager-api
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura el entorno

Crea un archivo `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/taskmanager"
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=3600s
```

### 4. Ejecuta PostgreSQL con Docker

```bash
docker-compose up -d
```

### 5. Ejecuta migraciones de la base de datos

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 6. Inicia el servidor

```bash
npm run start:dev
```

---

## 📚 Documentación de la API

Una vez en ejecución, accede a:

```
http://localhost:3000/api
```

---

## 🛡 Endpoints principales

### 🔐 Autenticación

| Método | Ruta           | Descripción           |
|--------|----------------|------------------------|
| POST   | /auth/register | Registro de usuarios   |
| POST   | /auth/login    | Login y obtención JWT  |

### 📋 Tareas (Requiere JWT)

| Método | Ruta         | Descripción                |
|--------|--------------|-----------------------------|
| GET    | /tasks       | Obtener tareas del usuario |
| POST   | /tasks       | Crear nueva tarea          |
| PATCH  | /tasks/:id   | Marcar como hecha/no hecha |
| DELETE | /tasks/:id   | Eliminar tarea             |

---

## 👨‍💻 Autor

Desarrollado por [Tu Nombre o Usuario de GitHub].

---

## 📄 Licencia

MIT
