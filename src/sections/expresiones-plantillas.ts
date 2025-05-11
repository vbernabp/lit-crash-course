import { html } from 'lit'
import '../components/lc-code';
export const expresionesPlantillasSection = html`
  <h4>2.4.1 Expresiones en plantillas</h4>
  <p>Las plantillas de Lit pueden incluir valores dinámicos llamados expresiones. Una expresión puede ser cualquier expresión de JavaScript y se evalúa cada vez que se renderiza la plantilla. El resultado de la expresión se inserta en la plantilla cuando se llama al método render.</p>
  <p>Las expresiones pueden colocarse en ubicaciones específicas de la plantilla y su interpretación depende de dónde aparecen. Por ejemplo, dentro del contenido de un elemento, la expresión añade nodos hijos o texto; en atributos, modifica el valor del atributo; en propiedades, asigna valores a propiedades del elemento; y en listeners, asocia funciones a eventos.</p>
  <p>Las expresiones pueden aceptar valores primitivos, objetos TemplateResult, nodos DOM, arrays o valores especiales como <lc-code>nothing</lc-code> y <lc-code>noChange</lc-code>. Además, pueden usarse directivas para personalizar el procesamiento y renderizado de la expresión.</p>
  <p>Existen ubicaciones no válidas para expresiones, como nombres de etiquetas o atributos, contenido de elementos <lc-code>template</lc-code>, <lc-code>textarea</lc-code> o <lc-code>contenteditable</lc-code>, y dentro de comentarios HTML.</p>
  <lc-table
    .columns=${['Tipo de expresión', 'Descripción', 'Ejemplo']}
    .rows=${[
      ['Expresiones de hijo', 'Insertan nodos hijos o texto en el contenido de un elemento. Permiten valores primitivos, plantillas, nodos DOM, arrays, y valores especiales como nothing o noChange.', html`<lc-code-block><pre><code>&lt;p&gt;Hola, \${name}&lt;/p&gt;</code></pre></lc-code-block>`],
      ['Expresiones de atributo', 'Asignan valores a atributos HTML. El valor se convierte a string, y se pueden usar valores especiales para eliminar atributos.', html`<lc-code-block><pre><code>&lt;div class=\${highlightClass}&gt;&lt;/div&gt;</code></pre></lc-code-block>`],
      ['Atributos booleanos', 'Permiten añadir o eliminar atributos booleanos usando el prefijo ?.', html`<lc-code-block><pre><code>&lt;button ?disabled=\${isDisabled}&gt;Click me!&lt;/button&gt;</code></pre></lc-code-block>`],
      ['Expresiones de propiedad', 'Asignan valores a propiedades del elemento usando el prefijo .. Permiten pasar datos complejos.', html`<lc-code-block><pre><code>&lt;input .value=\${currentValue}&gt;</code></pre></lc-code-block>`],
      ['Expresiones de listener', 'Asocian funciones a eventos usando el prefijo @.', html`<lc-code-block><pre><code>&lt;button @click=\${handleClick}&gt;Click Me!&lt;/button&gt;</code></pre></lc-code-block>`],
      ['Expresiones de elemento', 'Permiten aplicar directivas a un elemento completo, como ref.', html`<lc-code-block><pre><code>&lt;button \${ref(myRef)}&gt;&lt;/button&gt;</code></pre></lc-code-block>`],
      ['Expresiones estáticas', 'Permiten interpolar valores estáticos en lugares donde las expresiones normales no son válidas, usando literal y unsafeStatic.', html`<lc-code-block><pre><code>&lt;\${tag}&gt;Texto&lt;/\${tag}&gt;</code></pre></lc-code-block>`]
    ]}
    caption="Tipos de expresiones permitidas en plantillas Lit con ejemplos"
  ></lc-table>
  <a href="https://lit.dev/docs/templates/expressions/" target="_blank" rel="noopener noreferrer">Más información sobre expresiones en plantillas</a>
`
