# API Backend

API REST construida con Express y TypeScript que consume una API externa.

## Instalación

```bash
npm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Actualiza las variables de entorno en `.env`:
- `PORT`: Puerto donde ejecutar el servidor (default: 4000)
- `EXTERNAL_API_URL`: URL de la API externa
- `API_KEY`: Token de autenticación
- `FRONTEND_URL`: URL del frontend (para CORS)

## Scripts

- `npm run dev`: Ejecuta el servidor en modo desarrollo
- `npm run build`: Compila TypeScript a JavaScript
- `npm start`: Ejecuta el servidor compilado

## Estructura

```
src/
├── index.ts           # Punto de entrada
├── app.ts            # Configuración de Express
├── controllers/      # Controladores de rutas
├── services/         # Lógica de negocio
├── routes/           # Definición de rutas
├── interfaces/       # Tipos TypeScript
└── config/           # Configuraciones
```

## Endpoints

- `GET /api/v1/data`: Obtiene datos de la API externa

## Docker

### Ejecutar con Docker Compose

1. Asegúrate de tener Docker y Docker Compose instalados

2. El archivo `.env` debe existir con la `API_KEY`:
```bash
PORT=4000
EXTERNAL_API_URL=https://api.rawg.io/api/games
API_KEY=tu_api_key_aqui
FRONTEND_URL=http://localhost:3000
```

3. Ejecuta Docker Compose:
```bash
docker-compose up -d
```

4. El servidor estará disponible en `http://localhost:4000`

5. Para detener:
```bash
docker-compose down
```

### Build manual de Docker

```bash
docker build -t api-back .
docker run -p 4000:4000 --env-file .env api-back
```
