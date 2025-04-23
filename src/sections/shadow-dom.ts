import { html } from 'lit'
import '../components/lc-note';

export const shadowDomSection = html`
  <h3>1.2 Shadow DOM</h3>
  <p>El Shadow DOM encapsula el DOM y los estilos de un componente, evitando colisiones con el resto de la página. Permite definir estilos y estructura interna que no afectan ni son afectados por el exterior. El Shadow DOM puede ser abierto o cerrado, y proporciona aislamiento tanto a nivel de CSS como de JavaScript.</p>
  <lc-note>
    <p>Shadow DOM cerrado impide el acceso con JavaScript (lc-header vs lc-note)</p>
  </lc-note>
  <lc-note>El Shadow DOM tiene ventajas e inconvenientes (ver tabla de contenidos).</lc-note>
  <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
    <select id="shadow-dom-example" aria-label="Ejemplo de Shadow DOM">
      <option value="shadow-dom-example-1">Opción 1</option>
      <option value="shadow-dom-example-2">Opción 2</option>
    </select>
  </div>
  <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Más información sobre Shadow DOM</a>
`
