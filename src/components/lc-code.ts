import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('lc-code')
export class LcCode extends LitElement {
  public static readonly styles = css`
    :host {
      display: inline;
    }
    code {
      font-family: monospace;
      font-size: 1em;
      background: #f5f7fa;
      color: #222;
      border-radius: 4px;
      padding: 0.1em 0.4em;
      margin: 0 0.1em;
      line-height: 1.5;
    }
  `
  render() {
    return html`<code><slot></slot></code>`
  }
}
