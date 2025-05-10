import { LitElement, html, css } from 'lit'
import { customElement, property, queryAssignedElements } from 'lit/decorators.js'

@customElement('lc-shadow-dom')
export class LcShadowDom extends LitElement {
  @property({ type: String }) title = 'Shadow DOM demo'

  @queryAssignedElements({ slot: 'extra' }) extraSlotElements!: HTMLElement[]

  static readonly styles = css`
    :host {
      display: block;
      border: 2px solid var(--shadow-demo-color, #1976d2);
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem 0;
      background: #f5f7fa;
    }
    .header {
      color: var(--shadow-demo-color, #1976d2);
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 0.5rem;
    }
    .internal {
      color: #fff;
      background: var(--shadow-demo-color, #1976d2);
      padding: 0.2em 0.5em;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 0.5em;
    }
    ::slotted(*) {
      color: #d32f2f;
      font-weight: bold;
    }
    ::slotted([slot='extra']) {
      color: #388e3c;
      font-style: italic;
    }
  `

  protected firstUpdated() {
    console.log('Elementos en el slot extra:', this.extraSlotElements)
  }

  render() {
    return html`
      <div class="header">${this.title}</div>
      <div class="internal">Este contenido está encapsulado en el Shadow DOM</div>
      <slot></slot>
      <slot name="extra">Contenido por defecto del slot extra</slot>
    `
  }
}
