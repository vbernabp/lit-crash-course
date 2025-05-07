import { LitElement, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('lc-life-cycle')
export class LcLifeCycle extends LitElement {
  @property({ type: String }) demoProp = 'valor inicial'

  oldValue = ''

  _logChangedProperties(changedProperties: PropertyValues<this>, hook: string) {
    changedProperties.forEach((oldVal, key) => {
      const newVal = this[key as keyof this]
      console.log(`lc-life-cycle [${hook}]: propiedad '${String(key)}' - valor anterior:`, oldVal, '- valor nuevo:', newVal)
    })
  }

  constructor() {
    super()
    console.log('lc-life-cycle: constructor')
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('lc-life-cycle: connectedCallback')
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    console.log('lc-life-cycle: disconnectedCallback')
  }

  attributeChangedCallback(name: string, oldVal: any, newVal: any) {
    super.attributeChangedCallback(name, oldVal, newVal)
    console.log('lc-life-cycle: attributeChangedCallback', name, oldVal, newVal)
  }

  shouldUpdate(changedProperties: PropertyValues<this>) {
    const result = super.shouldUpdate(changedProperties)
    this._logChangedProperties(changedProperties, 'shouldUpdate')
    return result
  }

  willUpdate(changedProperties: PropertyValues<this>) {
    super.willUpdate(changedProperties)
    if (changedProperties.has('demoProp')) {
      this.oldValue = changedProperties.get('demoProp') as string
    }
    this._logChangedProperties(changedProperties, 'willUpdate')
  }

  update(changedProperties: PropertyValues<this>) {
    super.update(changedProperties)
    this._logChangedProperties(changedProperties, 'update')
  }

  firstUpdated(changedProperties: PropertyValues<this>) {
    super.firstUpdated(changedProperties)
    this._logChangedProperties(changedProperties, 'firstUpdated')
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties)
    this._logChangedProperties(changedProperties, 'updated')
  }

  render() {
    return html`
      <div>
        <strong>lc-life-cycle</strong> demoProp: ${this.demoProp}<br>
        Valor anterior: ${this.oldValue}
      </div>
    `
  }
}
