import { LitElement, html, css } from 'lit'

class LcFooterJs extends LitElement {
  static styles = css`
    footer {
      padding: 1rem;
      text-align: center;
    }
  `

  render() {
    return html`<footer><p>Fundamentos de Web Components y Lit</p></footer>`
  }
}

customElements.define('lc-footer-js', LcFooterJs);
