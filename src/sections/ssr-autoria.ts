import { html } from 'lit'
export const ssrAutoriaSection = html`
  <h4>2.8.4 Autoría</h4>
  <p>Para que los componentes sean compatibles con SSR en Lit, hay que evitar el uso de APIs del navegador en el servidor. Las operaciones imperativas sobre el DOM deben hacerse solo en callbacks que se ejecutan en el cliente. Usa condicionales o el helper isServer para diferenciar entre entorno servidor y cliente.</p>
  <p>Lit SSR solo ejecuta algunos métodos del ciclo de vida en el servidor, como constructor, hasChanged, willUpdate y render. El resto, como connectedCallback, updated o métodos de ReactiveController, solo se ejecutan en el cliente tras la hidratación.</p>
  <p>No incluyas Lit en el bundle de tus componentes publicados, para que se resuelvan correctamente los módulos según el entorno. Si usas bundlers, marca Lit como dependencia externa. Considera usar exports condicionales en package.json para diferenciar entre Node y navegador.</p>
  <p>Las directivas y controladores asíncronos no funcionan en SSR, así que realiza el trabajo asíncrono antes de renderizar la plantilla en el servidor y pasa los datos como propiedades o atributos.</p>
  <a href="https://lit.dev/docs/ssr/authoring/" target="_blank">Más información sobre autoría SSR</a>
`
