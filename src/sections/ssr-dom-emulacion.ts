import { html } from 'lit'
export const ssrDomEmulacionSection = html`
  <h4>2.8.5 Emulación del DOM</h4>
  <p>Cuando Lit se ejecuta en Node para SSR, importa automáticamente un conjunto mínimo de shims de DOM y define el global customElements. Solo se implementan las interfaces mínimas necesarias para definir y registrar componentes, como algunas clases clave del DOM y un CustomElementRegistry funcional.</p>
  <p>Las implementaciones cubren métodos y propiedades esenciales como attributes, setAttribute, removeAttribute, hasAttribute, getAttribute, attachShadow y shadowRoot (con ciertas limitaciones). HTMLElement es una clase vacía y el shadowRoot simulado solo devuelve {host: this} si se usa attachShadow con modo 'open'.</p>
  <p>Esto permite que los componentes Lit se puedan renderizar en el servidor sin requerir un DOM completo, facilitando la compatibilidad y el rendimiento en SSR.</p>
  <a href="https://lit.dev/docs/ssr/dom-emulation/" target="_blank">2.8.5 Leer más sobre emulación del DOM en Lit SSR</a>
`
