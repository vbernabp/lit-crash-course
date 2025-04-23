import { html } from 'lit'
import '../components/lc-note';

export const customElementsSection = html`
  <h3>1.1 Custom Elements</h3>
  <p>Permiten crear etiquetas HTML personalizadas. Se definen extendiendo HTMLElement y registrando el elemento en el navegador. Los custom elements disponen de callbacks de ciclo de vida que permiten reaccionar a su inserción, eliminación o cambios de atributos. Son la base para crear componentes reutilizables y encapsulados en cualquier aplicación web.</p>
  <p>El nombre de un custom element debe estar formado por al menos dos palabras separadas por un guion (<strong>-</strong>), como <strong>mi-componente</strong> o <strong>user-card</strong>.</p>
  <lc-note>
    <p>Este componente es un Custom Element.</p>
  </lc-note>
  <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements" target="_blank">Más información sobre Custom Elements</a>
`
