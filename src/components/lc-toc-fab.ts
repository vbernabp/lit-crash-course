import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('lc-toc-fab')
export class LcTocFab extends LitElement {
  public static readonly styles = css`
    .fab {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 2rem;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      opacity: 0.9;
      transition: opacity 0.2s;
    }
    .fab[hidden] {
      display: none;
    }
  `;

  @state()
  private visible = false;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this._onScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onScroll);
    super.disconnectedCallback();
  }

  readonly _onScroll = () => {
    this.visible = window.scrollY > 200;
  };

  readonly _onClick = () => {
    this.dispatchEvent(new CustomEvent('toc-fab-click', {
      bubbles: true,
      composed: true
    }));
  };

  render() {
    return html`
      <button class="fab" ?hidden=${!this.visible} @click=${this._onClick}>Ir a tabla de contenidos</button>
    `;
  }
}
