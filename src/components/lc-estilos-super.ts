import { LitElement, html, css, CSSResultGroup } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('lc-estilos-super')
export class LcEstilosSuper extends LitElement {
  @property({ type: Boolean }) primary = false
  @property({ type: String }) bgColor = ''

  static readonly styles = css`
    :host {
      display: block;
      --box-padding: 1rem;
      --box-border: 2px solid #ccc;
    }
    .box {
      padding: var(--box-padding);
      border: var(--box-border);
      background-color: var(--bg-color, white);
    }
    .primary {
      border-color: #1976d2;
    }
    ::slotted(p) {
      margin: 0;
    }
    ::slotted(*) {
      font-style: italic;
      color: #111111;
    }
  ` as CSSResultGroup;

  render() {
    const classes = { box: true, primary: this.primary }
    const styles = { '--bg-color': this.bgColor }
    return html`<div class=${classMap(classes)} style=${styleMap(styles)}><slot></slot></div>`
  }
}
