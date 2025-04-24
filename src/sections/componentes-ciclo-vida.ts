import { html } from 'lit'
export const componentesCicloVidaSection = html`
  <h4>2.3.5 Ciclo de Vida</h4>
  <p>Los componentes Lit utilizan los métodos estándar del ciclo de vida de los custom elements, como constructor, connectedCallback, disconnectedCallback, attributeChangedCallback y adoptedCallback. Además, Lit introduce un ciclo de actualización reactivo que renderiza los cambios en el DOM cuando cambian las propiedades reactivas.</p>
  <p>El ciclo de vida estándar permite inicializar el componente, reaccionar a su inserción o eliminación del DOM, y responder a cambios en atributos. Es importante llamar a las implementaciones de super en estos métodos para mantener la funcionalidad de Lit.</p>
  <p>El ciclo de actualización reactivo se activa cuando cambia una propiedad reactiva o se llama explícitamente a requestUpdate. Lit agrupa los cambios y realiza las actualizaciones de forma asíncrona para optimizar el rendimiento.</p>
  <p>Lit proporciona métodos adicionales como shouldUpdate, willUpdate, update, firstUpdated, updated y getUpdateComplete para personalizar y controlar el ciclo de actualización y reaccionar a los cambios en el componente.</p>
  <a href="https://lit.dev/docs/components/lifecycle/" target="_blank">Más información sobre el ciclo de vida</a>
`
