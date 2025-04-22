import { html } from 'lit'
import '../components/lc-question';

export const shadowDomSection = html`
  <h3>1.2 Shadow DOM</h3>
  <p>El Shadow DOM encapsula el DOM y los estilos de un componente, evitando colisiones con el resto de la página. Permite definir estilos y estructura interna que no afectan ni son afectados por el exterior. El Shadow DOM puede ser abierto o cerrado, y proporciona aislamiento tanto a nivel de CSS como de JavaScript.</p>
  <lc-question question="¿Dónde se puede encontrar un ejemplo de un Shadow DOM?">
    <p>Dentro de cualquier Web Component.</p>
  </lc-question>
  <lc-question question="¿Qué quiere decir abierto o cerrado?">
    <p>Un Shadow DOM abierto permite acceder a su contenido desde el exterior, mientras que un Shadow DOM cerrado no lo permite. Esto afecta la forma en que se pueden manipular los elementos internos del componente.</p>
  </lc-question>
  <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
    <select id="shadow-dom-example" aria-label="Ejemplo de Shadow DOM">
      <option value="shadow-dom-example-1">Opción 1</option>
      <option value="shadow-dom-example-2">Opción 2</option>
    </select>
  </div>
  <lc-question question="¿Tiene el Shadow DOM algún inconveniente?">
    <p>La misma encapsulación que ofrece el Shadow DOM puede dificultar algunas funcionalidades. Como ejemplo se puede ver la navegación con la tabla de contenidos de esta página.</p>
  </lc-question>
  <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Más información sobre Shadow DOM</a>
`
