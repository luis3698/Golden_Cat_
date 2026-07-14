# Golden Cat — Frontend (Vue 2 + Vuetify)

SPA del sistema de gestión hotelera Golden Cat. Consume la API REST del backend.

## Scripts

```bash
npm install        # instalar dependencias
npm run serve      # servidor de desarrollo (http://localhost:8080)
npm run build      # build de producción (carpeta dist/)
npm run lint       # linter
```

> Los scripts ya incluyen `--openssl-legacy-provider` (necesario para Vue CLI 3
> en Node 17+).

## Configuración

Copia `.env.example` a `.env` y ajusta la URL del backend:

```env
VUE_APP_API_URL=http://localhost:8000
```

📖 **Documentación completa del proyecto** (arquitectura, base de datos,
instalación, funcionalidades, etc.) en el [README principal](../README.md).
