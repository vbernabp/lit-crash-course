import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './lc-header.js';
import './lc-main.js';
import './lc-footer.js';
import './lc-table-of-content.js';

@customElement('lc-layout')
export class LcLayout extends LitElement {
  public static readonly styles = css`
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 1rem;
      box-sizing: border-box;
    }
  `;
  render() {
    return html`
      <div class="container">
        <lc-header></lc-header>
        <lc-table-of-content></lc-table-of-content>
        <lc-main>
          <p>Fundamentos de Web Components y Lit</p>
        </lc-main>
        <lc-footer></lc-footer>
      </div>
    `;
  }
}
