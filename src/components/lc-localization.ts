import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { msg, localized, configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../generated/locale-codes.ts';

export const {getLocale, setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`../generated/locales/${locale}.ts`),
});

@customElement('lc-localization')
@localized()
export class LcLocalization extends LitElement {
  render() {
    return html`
    <div lang=${getLocale()}>
      <label>
        <select @change=${this._onLanguageChange}>
          <option value="es" ?selected=${getLocale() === 'es'}>Español</option>
          <option value="en" ?selected=${getLocale() === 'en'}>English</option>
          <option value="ja" ?selected=${getLocale() === 'ja'}>日本語</option>
        </select>
      </label>
      <p>
        ${msg('Hola, mundo!')}
      </p>
    </div>
    `;
  }

  private _onLanguageChange(event: Event) {
    setLocale((event.target as HTMLSelectElement).value);
  }
}
