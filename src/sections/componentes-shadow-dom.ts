import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../components/lc-shadow-dom'
import '../components/lc-code'

export const componentesShadowDomSection = html`
  <h4>2.3.6 Shadow DOM</h4>
  <p>Lit utiliza Shadow DOM para encapsular el DOM interno de los componentes. El Shadow DOM permite añadir un árbol DOM aislado y encapsulado a un elemento, lo que proporciona interoperabilidad y evita que scripts o estilos globales afecten al componente.</p>
  <p>El Shadow DOM ofrece tres beneficios principales: aislamiento del DOM (los selectores globales no afectan al interior del componente), encapsulamiento de estilos (los estilos definidos en el componente no afectan al resto de la página) y composición (el shadow root contiene el DOM interno separado de los hijos del componente).</p>
  <p>Por defecto, Lit renderiza los componentes en un shadow root abierto. Es posible personalizar el render root o acceder a nodos internos usando this.renderRoot.querySelector(). También se pueden usar decoradores como @query, @queryAll y @queryAsync para acceder a nodos internos de forma más sencilla.</p>
  <p>Para renderizar hijos del componente, se deben usar elementos <lc-code>&lt;slot&gt;</lc-code> en la plantilla, que actúan como puntos de inserción para los nodos hijos.</p>
  <lc-shadow-dom-wrapper></lc-shadow-dom-wrapper>
  <a href="https://lit.dev/docs/components/shadow-dom/" target="_blank">Más información sobre Shadow DOM</a>
`

@customElement('lc-shadow-dom-wrapper')
export class LcShadowDomWrapper extends LitElement {
  @state() color = '#1976d2'
  @state() showFooter = true
  render() {
    return html`
      <button type="button" @click=${() => this.color = this.color === '#1976d2' ? '#d32f2f' : '#1976d2'}>Cambiar color</button>
      <button type="button" @click=${() => this.showFooter = !this.showFooter}>Toggle slot personalizado</button>
      <lc-shadow-dom title="Shadow DOM encapsulación" style="--shadow-demo-color: ${this.color}">
        <div>Este texto es un hijo del slot por defecto</div>
        ${this.showFooter ? html`<span slot="extra">Este es el contenido personalizado del slot 'extra'</span>` : ''}
      </lc-shadow-dom>
    `
  }
}
