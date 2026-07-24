# 🐱 Golden Cat — Sistema de gestión hotelera

Aplicación web full‑stack para un hotel boutique. Permite a los clientes explorar
habitaciones y servicios, registrarse e iniciar sesión, y al personal administrar
usuarios, habitaciones, tarifas, reservas y facturación desde un panel de
administración.

> **Estado del proyecto:** migrado por completo de **Firebase** a una base de datos
> **SQL** (SQLite por defecto, MySQL en producción). El proyecto compila, arranca y
> es totalmente operativo sin servicios externos.

---

## 📑 Tabla de contenidos

1. [Puesta en marcha rápida](#-puesta-en-marcha-rápida)
2. [Arquitectura y tecnologías](#-arquitectura-y-tecnologías)
3. [Requisitos previos](#-requisitos-previos)
4. [Instalación y configuración](#-instalación-y-configuración)
5. [Configuración de la base de datos SQL](#-configuración-de-la-base-de-datos-sql)
6. [Estructura del proyecto](#-estructura-del-proyecto)
7. [Funcionalidades implementadas](#-funcionalidades-implementadas)
8. [Guía de uso](#-guía-de-uso)
9. [Variables de entorno](#-variables-de-entorno)
10. [Dependencias](#-dependencias)
11. [Decisiones técnicas relevantes](#-decisiones-técnicas-relevantes)
12. [Posibles mejoras futuras](#-posibles-mejoras-futuras)
13. [Licencia](#-licencia)
14. [Contribuyentes](#-contribuyentes)

---

## ⚡ Puesta en marcha rápida

El proyecto se compone de **dos servicios** que se ejecutan de forma simultánea,
cada uno en **su propia terminal**. El backend expone la API REST y el frontend
es la aplicación web que la consume:

| Servicio     | Carpeta               | Puerto | Descripción                          |
|--------------|-----------------------|:------:|--------------------------------------|
| **Backend**  | `backend/`            |  8000  | API REST · Express + Sequelize (SQLite) |
| **Frontend** | `golden-cat-frontend/`|  8080  | SPA · Vue 2 + Vuetify                 |

> 💡 El backend usa **SQLite por defecto**, así que **no necesitas instalar ninguna
> base de datos** ni ningún servicio externo. Todo funciona en local.

### 1️⃣ Instalación (solo la primera vez)

Abre **dos terminales**, una en cada carpeta.

**Terminal 1 — Backend** (instala dependencias y crea la base de datos con datos de ejemplo):

```bash
cd backend
npm install
npm run setup
```

**Terminal 2 — Frontend** (instala dependencias):

```bash

npm install
```

### 2️⃣ Ejecutar todos los servicios

Deja **ambas terminales abiertas**, una con cada servicio corriendo:

**Terminal 1 — Backend** → API en <http://localhost:8000>

```bash
cd backend
npm start
```

**Terminal 2 — Frontend** → App en <http://localhost:8080>

```bash
cd golden-cat-frontend
npm run serve
```

### 3️⃣ Abrir la aplicación

Abre <http://localhost:8080> en el navegador e inicia sesión con un usuario de ejemplo:

| Rol           | Correo                  | Contraseña   |
|---------------|-------------------------|--------------|
| Administrador | `admin@goldencat.com`   | `admin123`   |
| Cliente       | `cliente@goldencat.com` | `cliente123` |

### 📋 Referencia de comandos

**Backend** (dentro de `backend/`):

| Comando         | Descripción                                                        |
|-----------------|--------------------------------------------------------------------|
| `npm install`   | Instala las dependencias.                                          |
| `npm run setup` | Crea/recrea el esquema de la BD y carga los datos de ejemplo.      |
| `npm run seed`  | Alias de `setup` (recarga los datos de ejemplo).                   |
| `npm start`     | Inicia el servidor en modo producción (puerto 8000).              |
| `npm run dev`   | Inicia el servidor con recarga automática (nodemon).              |

**Frontend** (dentro de `golden-cat-frontend/`):

| Comando         | Descripción                                                        |
|-----------------|--------------------------------------------------------------------|
| `npm install`   | Instala las dependencias.                                          |
| `npm run serve` | Servidor de desarrollo con recarga en caliente (puerto 8080).     |
| `npm run build` | Genera el build de producción en `dist/`.                         |
| `npm run lint`  | Ejecuta el linter.                                                 |

> El flag `--openssl-legacy-provider` (necesario para Vue CLI 3 en Node 17+) ya está
> incluido en los scripts del frontend; no hay que configurar nada manualmente.

---

## 🏗 Arquitectura y tecnologías

El proyecto está dividido en dos aplicaciones independientes que se comunican por
una API REST:

```
┌──────────────────────────┐        HTTP/JSON        ┌───────────────────────────┐
│   golden-cat-frontend     │  ───────────────────▶  │         backend            │
│   (SPA · Vue 2 + Vuetify) │  ◀───────────────────  │  (API REST · Express)      │
│   Puerto 8080             │                         │  Puerto 8000               │
└──────────────────────────┘                         └────────────┬──────────────┘
                                                                   │ Sequelize ORM
                                                                   ▼
                                                        ┌───────────────────────┐
                                                        │   SQLite  /  MySQL     │
                                                        └───────────────────────┘
```

### Backend
- **Node.js** + **Express 4** — servidor HTTP y enrutado.
- **Sequelize 5** — ORM SQL (dialectos **SQLite** y **MySQL**).
- **bcryptjs** — hash de contraseñas.
- **multer** — subida de imágenes (reemplazo de Firebase Storage).
- **helmet** + **cors** — seguridad y CORS.
- **bole** / **morgan** — logging.
- Organizado como *monorepo* con paquetes locales (`@golden-cat/api`, `db`,
  `config`, `utils`, `errors`).

### Frontend
- **Vue 2** + **Vue Router** + **Vuex** (con `vuex-persist`).
- **Vuetify 1.5** — biblioteca de componentes Material Design.
- **axios** — cliente HTTP.
- **vuelidate** — validación de formularios.
- **sweetalert2** — notificaciones.
- **@northwalker/vue-hotel-datepicker** — selección de fechas de reserva.

---

## ✅ Requisitos previos

- **Node.js ≥ 16** (probado con Node 24) y **npm ≥ 8**.
- Opcional: **MySQL 8+** si se desea usar MySQL en lugar de SQLite.
- No se requiere ninguna cuenta ni servicio en la nube.

---

## 🚀 Instalación y configuración

Clona el repositorio y instala las dependencias de cada aplicación.

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env        # opcional: por defecto usa SQLite
npm run setup               # crea el esquema y carga datos de ejemplo
npm start                   # arranca la API en http://localhost:8000
```

> `npm run setup` **recrea** la base de datos y la puebla con datos de ejemplo,
> incluyendo dos usuarios de prueba (ver [Guía de uso](#-guía-de-uso)).

### 2. Frontend

```bash
cd golden-cat-frontend
npm install
cp .env.example .env        # opcional: configura la URL del backend
npm run serve               # http://localhost:8080
```

Para generar el build de producción:

```bash
npm run build               # genera la carpeta dist/
```

> El flag `--openssl-legacy-provider` (necesario para Vue CLI 3 en Node 17+) ya está
> incluido en los scripts, por lo que no hay que configurarlo manualmente.

---

## 🗄 Configuración de la base de datos SQL

El backend soporta **dos dialectos** mediante la variable `DB_DIALECT`:

### Opción A — SQLite (por defecto, cero configuración)

No requiere ningún servidor. El archivo se crea automáticamente en
`backend/data/golden-cat.sqlite`.

```env
DB_DIALECT=sqlite
```

### Opción B — MySQL

1. Crea la base de datos y el usuario (o usa el script `backend/db/schema.sql`).
2. Configura el `.env`:

```env
DB_DIALECT=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=golden_cat
DB_USER=root
DB_PASS=tu_password
```

3. Provisiona el esquema de una de estas dos formas:
   - **Automática:** `npm run setup` (Sequelize crea las tablas y carga datos).
   - **Manual:** ejecuta el script DDL normalizado:
     ```bash
     mysql -u root -p < backend/db/schema.sql
     ```

El script [`backend/db/schema.sql`](backend/db/schema.sql) documenta el diseño
relacional normalizado (claves primarias, foráneas, índices y restricciones).

---

## 📁 Estructura del proyecto

```
Golden_Cat_/
├── backend/                        # API REST (Node + Express + Sequelize)
│   ├── api/                        # Rutas Express por recurso
│   │   ├── user.js  room.js  reservation.js  invoice.js
│   │   ├── image.js                # subida de imágenes (multer)
│   │   └── index.js                # agregador de rutas + errorHandler
│   ├── config/                     # Configuración (BD, puerto, uploads, .env)
│   ├── db/
│   │   ├── models/                 # Modelos Sequelize (user, room, ...)
│   │   ├── lib/                    # Acceso a datos (CRUD) por modelo
│   │   ├── index.js                # Inicialización + relaciones (singleton)
│   │   ├── seed.js                 # Datos de ejemplo
│   │   ├── setup.js                # Crea esquema + siembra datos
│   │   └── schema.sql              # Script DDL normalizado (MySQL)
│   ├── utils/                      # Logger, password (bcrypt), cache, terminate
│   ├── errors/                     # Errores HTTP reutilizables
│   ├── uploads/                    # Imágenes subidas (servidas en /uploads)
│   ├── server.js                   # Punto de entrada
│   └── .env.example
│
└── golden-cat-frontend/            # SPA (Vue 2 + Vuetify)
    ├── public/                     # index.html, favicon
    ├── src/
    │   ├── assets/                 # Imágenes optimizadas
    │   ├── layouts/                # PrincipalLayout / AdministradorLayout
    │   ├── views/
    │   │   ├── Principal/           # Vistas públicas (Inicio, Login, ...)
    │   │   └── Administrador/       # Panel de administración
    │   ├── plugins/
    │   │   ├── api.js               # Instancia axios (VUE_APP_API_URL)
    │   │   ├── upload.js            # Helper de subida de imágenes
    │   │   └── vuetify.js           # Tema e idioma
    │   ├── router.js               # Rutas de la SPA
    │   ├── store.js                # Estado global (Vuex + persistencia)
    │   └── main.js
    └── .env.example
```

---

## 🧩 Funcionalidades implementadas

- **Autenticación** de usuarios (registro, inicio de sesión) con contraseñas
  cifradas (bcrypt) y validación de formularios.
- **Roles** de usuario: `cliente` y `administrador`, con redirección y layout
  según el rol.
- **Catálogo público**: página de inicio con buscador, habitaciones, servicios,
  eventos, sección "¿Qué es Golden Cat?", contacto, términos y FAQ.
- **Panel de administración**: gestión de usuarios, habitaciones, tarifas,
  reservas, contabilidad y galería de imágenes.
- **Subida y gestión de imágenes** almacenadas en el servidor y registradas en
  SQL (reemplazo completo de Firebase Storage).
- **API REST** para todos los recursos: `user`, `room`, `type_room`, `rate`,
  `season`, `season_date`, `reservation`, `detail_reservation`, `invoice`,
  `invoice_detail`, `services`, `image`.
- **Perfil de usuario** editable con avatar.
- **Interfaz responsiva** con identidad visual consistente (azul noche + dorado),
  navegación adaptable (menú lateral en móvil) y componentes Material Design.

### Endpoints principales de la API

| Método | Ruta                | Descripción                                  |
|--------|---------------------|----------------------------------------------|
| POST   | `/user`             | Registrar usuario (`{ userNew }`)            |
| POST   | `/user/login`       | Iniciar sesión (`{ email, password }`)       |
| GET    | `/user`             | Listar usuarios                              |
| PUT    | `/user/:uuid`       | Actualizar usuario (`{ userUpdate }`)        |
| DELETE | `/user/:uuid`       | Eliminar usuario                             |
| GET    | `/room`             | Listar habitaciones                          |
| POST   | `/room`             | Crear habitación (`{ roomNew }`)             |
| GET    | `/services`         | Listar servicios                             |
| GET    | `/reservation`      | Listar reservas                              |
| POST   | `/image`            | Subir imagen (multipart, campo `image`)      |
| GET    | `/image`            | Listar imágenes                              |
| DELETE | `/image/:uuid`      | Eliminar imagen (archivo + registro SQL)     |
| GET    | `/uploads/:archivo` | Servir imagen estática                       |

---

## 📖 Guía de uso

1. Arranca **backend** (`npm start`) y **frontend** (`npm run serve`).
2. Abre <http://localhost:8080>.
3. Inicia sesión con uno de los usuarios de ejemplo creados por `npm run setup`:

   | Rol           | Correo                   | Contraseña   |
   |---------------|--------------------------|--------------|
   | Administrador | `admin@goldencat.com`    | `admin123`   |
   | Cliente       | `cliente@goldencat.com`  | `cliente123` |

4. Como **cliente** puedes navegar el catálogo, ver servicios y editar tu perfil.
5. Como **administrador** accedes al panel (`/administrador/...`) para gestionar
   usuarios, habitaciones, reservas, contabilidad y la galería de imágenes.

---

## 🔧 Variables de entorno

### Backend (`backend/.env`)

| Variable      | Por defecto                         | Descripción                              |
|---------------|-------------------------------------|------------------------------------------|
| `PORT`        | `8000`                              | Puerto del servidor HTTP                 |
| `PUBLIC_URL`  | `http://localhost:8000`             | URL base para las imágenes servidas      |
| `DB_DIALECT`  | `sqlite`                            | `sqlite` o `mysql`                       |
| `DB_STORAGE`  | `backend/data/golden-cat.sqlite`    | Ruta del archivo SQLite                  |
| `DB_HOST`     | `127.0.0.1`                         | Host MySQL                               |
| `DB_PORT`     | `3306`                              | Puerto MySQL                             |
| `DB_NAME`     | `golden_cat`                        | Nombre de la base de datos MySQL         |
| `DB_USER`     | `root`                              | Usuario MySQL                            |
| `DB_PASS`     | *(vacío)*                           | Contraseña MySQL                         |
| `DB_LOGGING`  | `false`                             | Mostrar consultas SQL en consola         |
| `UPLOAD_DIR`  | `backend/uploads`                   | Carpeta de imágenes subidas              |

### Frontend (`golden-cat-frontend/.env`)

| Variable          | Por defecto              | Descripción              |
|-------------------|--------------------------|--------------------------|
| `VUE_APP_API_URL` | `http://localhost:8000`  | URL base del backend     |

---

## 📦 Dependencias

### Backend
`express`, `sequelize`, `sqlite3`, `mysql2`, `bcryptjs`, `multer`, `helmet`,
`cors`, `dotenv`, `bole`, `morgan`, `cross-env`.

### Frontend
`vue`, `vue-router`, `vuex`, `vuex-persist`, `vuetify`, `axios`, `vuelidate`,
`sweetalert2`, `@northwalker/vue-hotel-datepicker`, `flatpickr`,
`@fortawesome/fontawesome-free`, `roboto-fontface`.

---

## 🧠 Decisiones técnicas relevantes

- **Migración de Firebase a SQL.** Firebase se usaba solo para el almacenamiento
  de imágenes; el resto de la lógica (autenticación, CRUD) ya vivía en el backend
  con Sequelize. Se sustituyó Firebase Storage por un **endpoint de subida
  (`multer`)** que guarda los archivos en disco (`/uploads`) y **registra cada
  imagen en una tabla SQL** (`image`), sirviéndolas de forma estática. Esto
  elimina la dependencia de servicios externos y, además, **desbloqueó el build**
  del frontend (la dependencia `firebase@6` arrastraba `grpc`, que no compila en
  Node moderno).
- **SQLite por defecto, MySQL opcional.** Para que el proyecto sea ejecutable y
  verificable sin infraestructura, el dialecto por defecto es **SQLite** (archivo
  local, cero configuración), manteniendo **MySQL** para producción mediante
  variables de entorno. Ambos usan el mismo código gracias a Sequelize.
- **Inicialización de la BD como *singleton*.** `db/index.js` se refactorizó para
  inicializar modelos y relaciones **una sola vez** y cachear el resultado; antes
  se reconstruía en cada petición, redefiniendo modelos y volviendo a autenticar.
- **Corrección de errores del backend.** Se corrigieron múltiples *bugs* de
  copia‑pega en la capa de acceso a datos y rutas (referencias a modelos
  inexistentes en `services`, `type_room`, `season_date`, `reservation`).
- **Logger seguro en desarrollo.** El *logger* solo instancia el rotador de
  ficheros en producción, evitando fallos al no existir la carpeta `logs/`.
- **Optimización de recursos.** Se eliminaron **~181 MB de vídeos** y archivos
  temporales/duplicados, y se optimizaron las imágenes (p. ej. `habitacion2` pasó
  de 10,5 MB a 130 KB), reduciendo el peso del proyecto de **~196 MB a ~4 MB** de
  recursos y acelerando la carga.
- **Identidad visual y responsividad.** Tema Vuetify unificado (azul noche +
  dorado), layouts con navegación adaptable (menú lateral en móvil), avatar
  generado a partir de las iniciales (se eliminó una imagen externa de terceros)
  y configuración de la API mediante variable de entorno.

---

## 🔮 Posibles mejoras futuras

- **Autenticación con JWT** y middleware de autorización por rol en el backend
  (actualmente la sesión se gestiona en el cliente).
- **Migración a Vue 3 + Vuetify 3** y a Vue CLI/Vite modernos (eliminando el flag
  de OpenSSL heredado).
- **Actualizar Sequelize a v6** y añadir migraciones versionadas en lugar de
  `sync({ force: true })`.
- **Validación de entrada** en el backend (p. ej. `joi`/`celebrate`) y manejo de
  duplicados (email único) con mensajes claros.
- **Lógica de reservas completa**: disponibilidad por fechas, cálculo de tarifas
  por temporada y generación automática de facturas.
- **Tests automatizados** (unitarios y de integración) y CI.
- **Almacenamiento de imágenes en la nube** (S3, Cloudinary) para despliegues
  distribuidos.
- **Paginación y búsqueda** en los listados del panel de administración.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo
[`LICENSE`](LICENSE) para el texto completo.

```
Copyright (c) 2026 Golden Cat Contributors
```

Eres libre de usar, copiar, modificar y distribuir el software, siempre que se
mantenga el aviso de copyright y de licencia.

---

## 👥 Contribuyentes

Proyecto desarrollado por:

| Nombre | GitHub |
|--------|--------|
| Luis Gerardo Mancilla Gamboa | [@luis3698](https://github.com/luis3698) |
| Sebastián Mancilla | [@Sebas2125](https://github.com/Sebas2125) |
| Víctor Gabriel Vargas Buitrago | [@GABRIELVARG](https://github.com/GABRIELVARG) |
| Michael Sánchez | [@Sanchez908](https://github.com/Sanchez908) |
| Dixon Cáceres | [@dixoncaceres](https://github.com/dixoncaceres) |
| Camilo Carvajal | [@CamiloCarvajal99](https://github.com/CamiloCarvajal99) |

Ver también [`CONTRIBUTORS.md`](CONTRIBUTORS.md).

---

<p align="center">Hecho con ❤️ para Golden Cat · Hotel Boutique</p>
