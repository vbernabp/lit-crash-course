import { html } from 'lit'
import '../components/lc-code';
export const componentesCicloVidaSection = html`
  <h4>2.3.5 Ciclo de Vida</h4>
  <p>Los componentes Lit utilizan los métodos estándar del ciclo de vida de los custom elements, como <lc-code>constructor</lc-code>, <lc-code>connectedCallback</lc-code>, <lc-code>disconnectedCallback</lc-code>, <lc-code>attributeChangedCallback</lc-code> y <lc-code>adoptedCallback</lc-code>. Además, Lit introduce un ciclo de actualización reactivo que renderiza los cambios en el DOM cuando cambian las propiedades reactivas.</p>
  <p>El ciclo de vida estándar permite inicializar el componente, reaccionar a su inserción o eliminación del DOM, y responder a cambios en atributos. Es importante llamar a las implementaciones de <lc-code>super</lc-code> en estos métodos para mantener la funcionalidad de Lit.</p>
  <p>El ciclo de actualización reactivo se activa cuando cambia una propiedad reactiva o se llama explícitamente a <lc-code>requestUpdate</lc-code>. Lit agrupa los cambios y realiza las actualizaciones de forma asíncrona para optimizar el rendimiento.</p>
  <p>Lit proporciona métodos adicionales como <lc-code>shouldUpdate</lc-code>, <lc-code>willUpdate</lc-code>, <lc-code>update</lc-code>, <lc-code>firstUpdated</lc-code>, <lc-code>updated</lc-code> y <lc-code>getUpdateComplete</lc-code> para personalizar y controlar el ciclo de actualización y reaccionar a los cambios en el componente.</p>
  <a href="https://lit.dev/docs/components/lifecycle/" target="_blank">Más información sobre el ciclo de vida</a>
`
