import { html } from 'lit';
import '../components/lc-note';

export const ssrIntroduccionSection = html`
  <h4>2.8.1 Introducción al Renderizado en el Servidor</h4>
  <p>El renderizado en el servidor (<abbr title="Server-Side Rendering">SSR</abbr>) es una técnica para generar y servir el HTML de los componentes, incluyendo shadow DOM y estilos, antes de que se cargue y ejecute el JavaScript. SSR mejora el rendimiento, la indexación SEO y la robustez, ya que el HTML estático se muestra incluso si el JavaScript falla o está deshabilitado.</p>
  <p>Lit soporta SSR mediante la librería Lit SSR, que permite renderizar componentes y plantillas Lit a HTML estático en entornos Node sin emular completamente el DOM del navegador. Esto permite un tiempo de respuesta rápido y soporte para streaming.</p>
  <p>Existen integraciones para usar Lit SSR fácilmente en frameworks como Eleventy, Astro, Rocket, Next.js y Nuxt 3.</p>
  <lc-note>
    <p><a href="https://github.com/vbernabp/lit-nextjs" target="_blank" rel="noopener noreferrer">https://github.com/vbernabp/lit-nextjs</a> contiene una aplicación de Nextjs (13) con un ejemplo de componente de lit usando <abbr title="Server-Side Rendering">SSR</abbr></p>
  </lc-note>
  <a href="https://lit.dev/docs/ssr/overview/" target="_blank" rel="noopener noreferrer">Más información sobre SSR</a>
`
