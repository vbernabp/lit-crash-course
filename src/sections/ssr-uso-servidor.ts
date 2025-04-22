import { html } from 'lit'
export const ssrUsoServidorSection = html`
  <h4>2.8.2 Uso en el Servidor</h4>
  <p>Para renderizar plantillas Lit en el servidor se utiliza la función render del paquete @lit-labs/ssr. Esta función recibe una plantilla Lit y devuelve un RenderResult, que puede convertirse en HTML para enviar al cliente.</p>
  <p>El resultado puede manejarse como un stream usando RenderResultReadable (ideal para servidores como Koa) o como una cadena usando collectResult() (asíncrono) o collectResultSync() (síncrono). Es posible renderizar en el contexto global o en un contexto VM aislado para separar registros de custom elements entre peticiones.</p>
  <p>Se recomienda importar y registrar los custom elements en el servidor antes de renderizarlos. Existen utilidades para gestionar el resultado del renderizado y opciones avanzadas como deferHydration y elementRenderers.</p>
  <a href="https://lit.dev/docs/ssr/server-usage/" target="_blank">Más información sobre uso en el servidor</a>
`
