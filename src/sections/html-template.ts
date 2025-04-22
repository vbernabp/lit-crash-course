import { html } from 'lit'
export const htmlTemplateSection = html`
  <h3>1.3 HTML Template</h3>
  <p>La etiqueta template permite definir fragmentos de HTML que no se renderizan hasta ser clonados. Es útil para crear contenido dinámico y para la estructura interna de los Web Components, ya que permite separar la definición del contenido de su uso real en el DOM.</p>
  <lc-question question="¿Cómo?">
    <p>Se trata de una etiqueta <code>&lt;template&gt;</code> que sirve para dos cosas:</p>
    <ul style="margin-bottom:0">
      <li>Definir un fragmento de HTML que no se renderiza inmediatamente.</li>
      <li>Facilitar la creación de Web Components.</li>
    </ul>
  </lc-question>
  <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/template" target="_blank">Más información sobre HTML Template</a>
`
