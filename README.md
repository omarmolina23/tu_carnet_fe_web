# TuCarnet — Web de validación de carnet (UFPS)

Aplicación web pública para **validar el carnet estudiantil** de la UFPS. Permite verificar, ingresando el **código del estudiante** o **escaneando su código QR**, si la persona pertenece a la universidad y si está activa (matriculada), mostrando su tarjeta con los datos.

Pensada para puntos de control (porterías, eventos, bibliotecas, etc.).

## Tecnologías

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS** + componentes **shadcn/ui** (Radix)
- **@yudiel/react-qr-scanner** (escaneo de QR)
- **React Router**, **React Helmet**, **Axios**

## Funcionamiento

1. El usuario ingresa un **código de estudiante** o pulsa **Escanear código QR**.
2. La app consulta al backend:
   - Por código → `GET /api/student/code/:code`.
   - Por QR → `POST /api/qr/validate` (valida el token del QR).
3. Muestra el resultado:
   - ✅ "El estudiante pertenece a la UFPS" si está `MATRICULADO`.
   - ⚠️ "El estudiante NO se encuentra activo" en otro caso.
4. La foto del carnet se obtiene como **URL firmada** desde el servicio de liveness (`POST /liveness/photo/signedUrl`).

## Requisitos previos

- Node.js 20+ y npm
- El **backend** (`tucarnet_be`) y el **servicio de liveness** (`liveness_tucarnet_service`) desplegados o en local.

## Variables de entorno

Crea un archivo **`.env.local`** en la raíz:

```env
VITE_API_URL=https://tucarnetbe-production.up.railway.app/api
VITE_AWS_API_URL=https://livenesstucarnetservice-production.up.railway.app/liveness
```

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | Base del backend. Como los servicios usan rutas relativas (`student/code/...`, `qr/validate`), **sí debe incluir** `/api` al final. |
| `VITE_AWS_API_URL` | Base del servicio de liveness para las URLs firmadas de fotos. Las rutas son relativas (`photo/signedUrl`), así que **debe incluir** `/liveness` al final. |

## Puesta en marcha (local)

```bash
npm install
# crea el .env.local (ver arriba)
npm run dev
```

Disponible en `http://localhost:5173`.

Otros scripts:
```bash
npm run build     # type-check + build de producción (dist/)
npm run preview   # sirve el build de producción
npm run lint      # ESLint
```

## Estructura

```
src/
  api/           Clientes Axios (backend y liveness)
  components/    Header, Footer, QrScannerBox, StudentCard, UI (shadcn)
  pages/         ValidatePage (pantalla principal de validación)
  services/      student, qr, aws (foto firmada)
  types/         StudentView
  utils/         helpers de QR
```

## Despliegue (Vercel)

1. Importa el repositorio en tu cuenta de **Vercel** (framework **Vite**: build `npm run build`, output `dist`).
2. Configura las **Environment Variables** (las dos de arriba).
3. Deploy.

> El año del pie de página (`Footer.tsx`) se calcula automáticamente con `new Date().getFullYear()`, así que no hay que actualizarlo a mano cada año.
