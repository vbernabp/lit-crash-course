import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('lc-directives')
export class LcDirectives extends LitElement {
  @state() classes = { destacado: true };
  @state() styles = { color: 'black', backgroundColor: 'white' };

  static readonly styles = css`
    .destacado {
      font-weight: bold;
      font-size: 1.2rem;
    }
    :host {
      display: block;
      margin: 2rem 0;
    }
    .demo {
      margin: 1rem 0;
      padding: 1rem;
      border: 0.125rem solid #1976d2;
      border-radius: 0.5rem;
      transition: all 0.3s;
      display: block;
      background: #f8fafd;
    }
    button {
      margin-right: 0.5rem;
    }
  `;

  private _toggleClass() {
    this.classes = {
      destacado: !this.classes.destacado,
    };
  }

  private _toggleStyle() {
    this.styles = this.styles.backgroundColor === 'white'
      ? { color: 'yellow', backgroundColor: '#1976d2' }
      : { color: 'black', backgroundColor: 'white' };
  }

  render() {
    return html`
      <button type="button" @click=${this._toggleClass}>Cambiar clases</button>
      <button type="button" @click=${this._toggleStyle}>Cambiar estilos</button>
      <div class="demo ${classMap(this.classes)}" style=${styleMap(this.styles)}>
        Texto de ejemplo
      </div>
    `;
  }
}
