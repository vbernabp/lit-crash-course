import { html } from 'lit'
export const ssrUsoClienteSection = html`
  <h4>2.8.3 Uso en el Cliente</h4>
  <p>Tras renderizar con SSR, el HTML estático se muestra en el navegador. Para que la página sea interactiva, es necesario hidratar las plantillas o componentes Lit en el cliente. Para plantillas Lit, se usa la función hydrate del paquete @lit-labs/ssr-client, pasando la misma plantilla y datos usados en el servidor.</p>
  <p>Para componentes Lit, basta con cargar los módulos que definen los custom elements y el soporte de hidratación de LitElement mediante @lit-labs/ssr-client/lit-element-hydrate-support.js, que debe cargarse antes de cualquier importación de lit. Esto permite que los componentes se activen y sean interactivos tras el renderizado inicial.</p>
  <p>Si el navegador no soporta Declarative Shadow DOM, se puede usar el polyfill template-shadowroot para asegurar la compatibilidad. Es recomendable ocultar el body hasta que el polyfill esté cargado para evitar parpadeos o cambios de layout.</p>
  <a href="https://lit.dev/docs/ssr/client-usage/" target="_blank" rel="noopener noreferrer">Más información sobre uso en el cliente</a>
`
