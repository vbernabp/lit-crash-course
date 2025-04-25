import './lc-code'
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('lc-section')
export class LcSection extends LitElement {
  public static readonly styles = css`
    :host {
      display: block;
      margin-bottom: 2.5rem;
    }
  `
  render() {
    return html`<section><slot></slot></section>`
  }
}
