import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-header')
export class LcHeader extends LitElement {
  static readonly styles = css`
    header {
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`<header><slot></slot></header>`;
  }
}
