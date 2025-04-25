import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('lc-properties')
export class LcProperties extends LitElement {
  @property({ type: String }) text = 'Hello'
  @property({ type: Number, reflect: true }) count = 0
  @property({ type: Boolean, reflect: true }) active = true
  @property({ type: Array }) items: number[] = []
  @property({ type: Object }) config = { theme: 'light' }
  @property({ attribute: 'custom-attr' }) customName = 'custom'
  @property({
    type: Array,
    converter: {
      fromAttribute: (value: string) => value ? value.split(',') : [],
      toAttribute: (value: string[]) => value.join(',')
    }
  }) csv = ['a', 'b']
  @property({
    hasChanged(newVal: string, oldVal: string) {
      return newVal !== oldVal
    }
  }) caseSensitive = 'A'
  @state() private internalState = 42
  private _rounded = 0
  @property({ type: Number })
  set roundedCount(val: number) {
    this._rounded = Math.floor(val)
  }
  get roundedCount() {
    return this._rounded
  }

  public static readonly styles = css`
    :host {
      display: block;
      border: 1px solid #1976d2;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem 0;
    }
    .row {
      margin-bottom: 0.5rem;
    }
    button {
      margin-left: 0.5rem;
    }
    .internal {
      color: #1976d2;
    }
    .title {
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 1rem;
      color: #1976d2;
    }
    .desc {
      font-size: 0.95em;
      color: #444;
      margin-bottom: 0.2em;
    }
  `

  private _addExclamation() {
    this.dispatchEvent(
      new CustomEvent('add-exclamation', {
        detail: this.text + '!',
        bubbles: true,
        composed: true
      })
    )
  }

  private _incrementCount() {
    this.dispatchEvent(
      new CustomEvent('increment-count', {
        detail: this.count + 1,
        bubbles: true,
        composed: true
      })
    )
  }

  private _toggleActive() {
    this.dispatchEvent(
      new CustomEvent('toggle-active', {
        detail: !this.active,
        bubbles: true,
        composed: true
      })
    )
  }

  private _pushItem() {
    this.dispatchEvent(
      new CustomEvent('push-item', {
        detail: [...this.items, this.items.length],
        bubbles: true,
        composed: true
      })
    )
  }

  private _toggleTheme() {
    this.dispatchEvent(
      new CustomEvent('toggle-theme', {
        detail: { theme: this.config.theme === 'light' ? 'dark' : 'light' },
        bubbles: true,
        composed: true
      })
    )
  }

  private _addStar() {
    this.dispatchEvent(
      new CustomEvent('add-star', {
        detail: this.customName + '*',
        bubbles: true,
        composed: true
      })
    )
  }

  private _addLetter() {
    this.dispatchEvent(
      new CustomEvent('add-letter', {
        detail: [...this.csv, String.fromCharCode(97 + this.csv.length)],
        bubbles: true,
        composed: true
      })
    )
  }

  private _toggleCase() {
    this.dispatchEvent(
      new CustomEvent('toggle-case', {
        detail: this.caseSensitive === 'A' ? 'a' : 'A',
        bubbles: true,
        composed: true
      })
    )
  }

  private _setRounded() {
    this.dispatchEvent(
      new CustomEvent('set-rounded', {
        detail: this.roundedCount + 2.7,
        bubbles: true,
        composed: true
      })
    )
  }

  render() {
    return html`
      <div class="title">lc-properties</div>
      <div class="row">
        <span class="desc">@property: String, actualiza al cambiar</span>
        text: <b>${this.text}</b>
        <button @click=${this._addExclamation}>Add !</button>
      </div>
      <div class="row">
        <span class="desc">@property: Number, reflejado en el atributo</span>
        count: <b>${this.count}</b>
        <button @click=${this._incrementCount}>+1</button>
      </div>
      <div class="row">
        <span class="desc">@property: Boolean, reflejado en el atributo</span>
        active: <b>${this.active ? 'true' : 'false'}</b>
        <button @click=${this._toggleActive}>Toggle</button>
      </div>
      <div class="row">
        <span class="desc">@property: Array, conversión de tipo</span>
        items: <b>${JSON.stringify(this.items)}</b>
        <button @click=${this._pushItem}>Push</button>
      </div>
      <div class="row">
        <span class="desc">@property: Object, conversión de tipo</span>
        config: <b>${JSON.stringify(this.config)}</b>
        <button @click=${this._toggleTheme}>Toggle theme</button>
      </div>
      <div class="row">
        <span class="desc">@property: nombre de atributo personalizado</span>
        customName (atributo 'custom-attr'): <b>${this.customName}</b>
        <button @click=${this._addStar}>Add *</button>
      </div>
      <div class="row">
        <span class="desc">@property: conversor personalizado</span>
        csv: <b>${this.csv.join(',')}</b>
        <button @click=${this._addLetter}>Add letter</button>
      </div>
      <div class="row">
        <span class="desc">@property: hasChanged para detección de cambios personalizada</span>
        caseSensitive: <b>${this.caseSensitive}</b>
        <button @click=${this._toggleCase}>Toggle A/a</button>
      </div>
      <div class="row internal">
        <span class="desc">@state: estado interno reactivo</span>
        internalState: <b>${this.internalState}</b>
        <button @click=${() => this.internalState++}>+1</button>
      </div>
      <div class="row">
        <span class="desc">@property: accessors personalizados (redondea hacia abajo)</span>
        roundedCount: <b>${this.roundedCount}</b>
        <button @click=${this._setRounded}>+2.7 (redondea)</button>
      </div>
    `
  }
}
