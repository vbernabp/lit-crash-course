import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/lc-note'
import '../components/lc-conditionals'

export const condicionalesPlantillasSection = html`
  <h4>2.4.2 Condicionales</h4>
  <p>Lit permite usar expresiones condicionales estándar de JavaScript en las plantillas, como el operador ternario, llamadas a funciones, y sentencias if o switch fuera de la plantilla para decidir qué contenido renderizar.</p>
  <p>El operador ternario es útil para condicionales en línea, mientras que las sentencias if permiten calcular valores o plantillas antes de insertarlos en la plantilla principal. También se pueden delegar estas decisiones a funciones auxiliares.</p>
  <p>Para evitar renderizar contenido, se pueden usar los valores undefined, null, la cadena vacía o el valor especial nothing de Lit, que no renderizan ningún nodo. En atributos, nothing elimina el atributo del elemento.</p>
  <p>Si se alterna entre plantillas grandes y complejas, se puede usar la directiva cache para mejorar el rendimiento y evitar recrear el DOM innecesariamente.</p>
  <lc-conditionals-wrapper></lc-conditionals-wrapper>
  <lc-note>
    <p>
      La directiva cache guarda los TemplateResult y los reutiliza cuando se vuelven a renderizar.
    </p>
  </lc-note>
  <a href="https://lit.dev/docs/templates/conditionals/" target="_blank" rel="noopener noreferrer">Más información sobre condicionales en plantillas</a>
`

@customElement('lc-conditionals-wrapper')
export class LcConditionalsWrapper extends LitElement {
  render() {
    return html`<lc-conditionals></lc-conditionals>`
  }
}
