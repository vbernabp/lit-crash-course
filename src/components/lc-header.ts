import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-header')
export class LcHeader extends LitElement {
  static styles = css`
    header {
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`<header><h1>Fundamentos de Web Components y Lit</h1></header>`;
  }
}
