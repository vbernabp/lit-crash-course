import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-footer')
export class LcFooter extends LitElement {
  static styles = css`
    footer {
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    const year = new Date().getFullYear();
    return html`<footer><p>&copy; ${year} NTT Data</p></footer>`;
  }
}
