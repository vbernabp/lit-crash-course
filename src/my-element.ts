import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { localeContext } from './contexts/locale-context';
import './components/lc-layout.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @provide({ context: localeContext })
  locale = 'es';

  render() {
    return html`<lc-layout @locale-changed=${this._onLocaleChanged}></lc-layout>`;
  }

  private _onLocaleChanged(e: CustomEvent) {
    this.locale = e.detail;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
