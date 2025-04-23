import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-footer')
export class LcFooter extends LitElement {
  public static readonly styles = css`
    footer {
      padding: 1rem;
      text-align: center;
    }
  `;

  render() {
    return html`<footer><p>Fundamentos de Web Components y Lit</p></footer>`;
  }
}
