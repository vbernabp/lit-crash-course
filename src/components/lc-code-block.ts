import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('lc-code-block')
export class LcCodeBlock extends LitElement {
  public static readonly styles = css`
    :host {
      display: block;
      margin: 1.5rem 0;
      background: #28282c;
      border-radius: 8px;
      overflow-x: auto;
      box-shadow: 0 2px 8px #0002;
    }
    ::slotted(pre) {
      margin: 0;
      padding: 1rem;
      background: none;
      color: #f8f8f2;
      font-size: 0.9rem;
      font-family: 'Fira Mono', 'Consolas', 'Monaco', monospace;
      overflow-x: auto;
    }
    ::slotted(code) {
      background: none;
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      padding: 0;
    }
  `;
  render() {
    return html`<slot></slot>`
  }
}
