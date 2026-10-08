# Twitter Card

Tarjeta de perfil estilo Twitter con botón de seguir, hecha con React, TypeScript y Tailwind CSS.

**Demo:** https://mballesterdev.github.io/react-twitter-card/

## Funcionalidades

- Componente reutilizable con props tipadas
- Botón Seguir / Siguiendo con estado
- Estilos con Tailwind CSS (modo claro y oscuro)

## Tecnologías

React 19 · Vite · TypeScript · Tailwind CSS 4

## Uso en local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

El proyecto ya está configurado para GitHub Pages:

- `vite.config.ts` define `base: '/react-twitter-card/'` (el nombre del repositorio).
- `package.json` incluye `homepage` y los scripts `predeploy` y `deploy` (paquete `gh-pages`).

Para publicar una nueva versión:

```bash
npm run deploy
```

Esto genera `dist/` y lo sube a la rama `gh-pages`. En el repositorio, **Settings → Pages** debe tener como origen la rama `gh-pages` y la carpeta `/ (root)`.
