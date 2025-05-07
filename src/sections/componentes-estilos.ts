import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../components/lc-code'
import '../components/lc-estilos'

export const componentesEstilosSection = html`
  <h4>2.3.4 Estilos</h4>
  <p>Las plantillas de los componentes Lit se renderizan en el shadow root, por lo que los estilos definidos en el componente solo afectan a los elementos dentro de ese shadow root. El encapsulamiento de estilos que proporciona el Shadow DOM evita que los estilos del componente afecten a otros elementos de la página y viceversa.</p>
  <p>Los estilos se definen normalmente en el campo estático <lc-code>styles</lc-code> usando la función <lc-code>css</lc-code>. Esto proporciona el mejor rendimiento y asegura que los estilos estén correctamente encapsulados. Se pueden definir estilos como un único template literal o como un array para <strong>heredar o compartir</strong> estilos entre componentes.</p>
  <p>También es posible definir estilos dentro de la plantilla usando un elemento <lc-code>&lt;style&gt;</lc-code>, aunque esto solo se recomienda para casos donde se necesiten estilos personalizados por instancia.</p>
  <p>Para personalizar estilos de forma dinámica, se pueden usar variables CSS (custom properties) y los selectores <lc-code>:host</lc-code> y <lc-code>:host()</lc-code>. Además, Lit ofrece directivas como <lc-code>classMap</lc-code> y <lc-code>styleMap</lc-code> para aplicar clases y estilos dinámicos en la plantilla.</p>
  <p>El uso de CSS custom properties facilita la creación de componentes tematizables y la personalización de estilos desde fuera del componente.</p>
  <lc-estilos-wrapper></lc-estilos-wrapper>
  <p><a href="https://lit.dev/docs/components/styles/" target="_blank" rel="noopener">Más información sobre estilos</a></p>
`

@customElement('lc-estilos-wrapper')
export class LcEstilosWrapper extends LitElement {
  @state() primary = true
  @state() bgColor = 'lightyellow'

  render() {
    return html`
      <lc-estilos .primary=${this.primary} .bgColor=${this.bgColor}>
        <!-- <p style="margin: 2rem">Contenido slotted</p> -->
        <p>Contenido slotted</p>
      </lc-estilos>
      <button type="button" @click=${() => this.primary = !this.primary}>Toggle Class</button>
      <button type="button" @click=${() => this.bgColor = this.bgColor === 'lightyellow' ? 'lightblue' : 'lightyellow'}>Toggle Style</button>
    `
  }
}
