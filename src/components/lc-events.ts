import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('lc-events')
export class LcEvents extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      border: 1px solid #1976d2;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 8px;
    }
    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
    }
    label {
      display: flex;
      flex-direction: column;
      font-size: 0.95em;
    }
  `

  @state() private bubbles: string = 'true'
  @state() private composed: string = 'true'
  @state() private dispatchTarget: string = 'component'

  render() {
    return html`
      <div class="controls">
        <label>
          bubbles
          <select .value=${this.bubbles} @change=${(e: Event) => this.bubbles = (e.target as HTMLSelectElement).value}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </label>
        <label>
          composed
          <select .value=${this.composed} @change=${(e: Event) => this.composed = (e.target as HTMLSelectElement).value}>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </label>
        <label>
          Lanzar desde
          <select .value=${this.dispatchTarget} @change=${(e: Event) => this.dispatchTarget = (e.target as HTMLSelectElement).value}>
            <option value="component">lc-events</option>
            <option value="window">window</option>
          </select>
        </label>
        <button @click=${this._dispatchSelectedEvent}>Emitir evento</button>
      </div>
    `
  }

  private _dispatchSelectedEvent() {
    const bubbles = this.bubbles === 'true'
    const composed = this.composed === 'true'
    const detail = `Evento test-event disparado`
    const event = new CustomEvent('test-event', { detail, bubbles, composed })
    if (this.dispatchTarget === 'window') {
      window.dispatchEvent(event)
    } else {
      this.dispatchEvent(event)
    }
  }
}
