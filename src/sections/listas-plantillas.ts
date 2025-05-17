import { html } from 'lit'
import '../components/lc-code-block.js';
export const listasPlantillasSection = html`
  <h4>2.4.3 Listas</h4>
  <p>Para renderizar listas en Lit se pueden usar las construcciones estándar de JavaScript, como map o bucles, para crear plantillas repetidas. Cuando una expresión en la plantilla devuelve un array o iterable, Lit renderiza todos los elementos de ese array.</p>
  <p>El método más común es usar map para transformar los datos en una lista de plantillas. También se pueden construir arrays de plantillas usando bucles y pasarlos a la plantilla principal.</p>
  <p>Para listas grandes o que cambian de orden, la directiva repeat permite actualizar el DOM de forma más eficiente, reordenando los nodos existentes en vez de recrearlos. repeat requiere una función clave única para cada elemento.</p>
  <p>Se recomienda usar map o bucles para la mayoría de los casos, y recurrir a repeat cuando el rendimiento sea crítico o los nodos tengan estado propio.</p>
  <lc-code-block>
    <pre><code>@property() colors = ['red', 'green', 'blue'];

render() {
  return html&#96;&lt;p&gt;Colors \${this.colors}&lt;/p&gt;&#96;;
}

Output: Colors redgreenblue</code>
    </pre>
  </lc-code-block>
  <lc-code-block>
    <pre><code>@property() colors = ['red', 'green', 'blue'];

render() {
  return html&#96;
    &lt;ul&gt;
      \${this.colors.map((color) =&gt;
        html&#96;&lt;li&gt;\${color}&lt;/li&gt;&#96;
      )}
    &lt;/ul&gt;
  &#96;;
}

Output:
- red
- green
- blue
</code></pre>
  </lc-code-block>
  <lc-code-block>
    <pre><code>import {repeat} from 'lit/directives/repeat.js';

render() {
  return html&#96;
    &lt;ul&gt;
      \${repeat(this.employees, (employee) =&gt; employee.id, (employee, index) =&gt; html&#96;
        &lt;li&gt;\${index}: \${employee.familyName}, \${employee.givenName}&lt;/li&gt;
      &#96;)}
    &lt;/ul&gt;
  &#96;;
}

Output:
- 0: Doe, John
- 1: Smith, Jane
- 2: Johnson, Emily
- 3: Brown, Michael
</code></pre>
  </lc-code-block>
  <a href="https://lit.dev/docs/templates/lists/" target="_blank" rel="noopener noreferrer">Más información sobre listas</a>
`
