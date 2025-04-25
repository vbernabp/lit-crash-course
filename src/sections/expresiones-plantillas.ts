import { html } from 'lit'
import '../components/lc-code';
export const expresionesPlantillasSection = html`
  <h4>2.4.1 Expresiones en plantillas</h4>
  <p>Las plantillas de Lit pueden incluir valores dinámicos llamados expresiones. Una expresión puede ser cualquier expresión de JavaScript y se evalúa cada vez que se renderiza la plantilla. El resultado de la expresión se inserta en la plantilla cuando se llama al método render.</p>
  <p>Las expresiones pueden colocarse en ubicaciones específicas de la plantilla y su interpretación depende de dónde aparecen. Por ejemplo, dentro del contenido de un elemento, la expresión añade nodos hijos o texto; en atributos, modifica el valor del atributo; en propiedades, asigna valores a propiedades del elemento; y en listeners, asocia funciones a eventos.</p>
  <p>Las expresiones pueden aceptar valores primitivos, objetos TemplateResult, nodos DOM, arrays o valores especiales como <lc-code>nothing</lc-code> y <lc-code>noChange</lc-code>. Además, pueden usarse directivas para personalizar el procesamiento y renderizado de la expresión.</p>
  <p>Existen ubicaciones no válidas para expresiones, como nombres de etiquetas o atributos, contenido de elementos <lc-code>template</lc-code>, <lc-code>textarea</lc-code> o <lc-code>contenteditable</lc-code>, y dentro de comentarios HTML.</p>
  <a href="https://lit.dev/docs/templates/expressions/" target="_blank">Más información sobre expresiones en plantillas</a>
`
