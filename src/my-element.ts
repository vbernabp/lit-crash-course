import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/lc-layout.js';

@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`<lc-layout></lc-layout>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
