import { html } from 'lit'
export const ssrIntroduccionSection = html`
  <h4>2.8.1 Introducción al Renderizado en el Servidor</h4>
  <p>El renderizado en el servidor (SSR) es una técnica para generar y servir el HTML de los componentes, incluyendo shadow DOM y estilos, antes de que se cargue y ejecute el JavaScript. SSR mejora el rendimiento, la indexación SEO y la robustez, ya que el HTML estático se muestra incluso si el JavaScript falla o está deshabilitado.</p>
  <p>Lit soporta SSR mediante la librería Lit SSR, que permite renderizar componentes y plantillas Lit a HTML estático en entornos Node sin emular completamente el DOM del navegador. Esto permite un tiempo de respuesta rápido y soporte para streaming.</p>
  <p>Existen integraciones para usar Lit SSR fácilmente en frameworks como Eleventy, Astro, Rocket, Next.js y Nuxt 3.</p>
  <a href="https://lit.dev/docs/ssr/overview/" target="_blank" rel="noopener noreferrer">Más información sobre SSR</a>
`
