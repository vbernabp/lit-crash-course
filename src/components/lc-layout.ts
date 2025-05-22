import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { state } from 'lit/decorators.js';
import './lc-header.js';
import './lc-footer.js';
import './lc-table-of-content.js';
import './lc-toc-fab.js';
import './lc-main.js';

@customElement('lc-layout')
export class LcLayout extends LitElement {
  public static readonly styles = css`
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 1rem;
      box-sizing: border-box;
    }
    .main-placeholder {
      min-height: 8rem;
    }
  `;

  // static lazyLoadMain = false;

  // @state()
  // private _mainVisible = false;

  // private _mainObserver?: IntersectionObserver;

  // firstUpdated() {
  //   if ((this.constructor as typeof LcLayout).lazyLoadMain) {
  //     const mainPlaceholder = this.renderRoot.querySelector('.main-placeholder');
  //     if (mainPlaceholder) {
  //       this._mainObserver = new IntersectionObserver(entries => {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting) {
  //             import('./lc-main.js').then(() => {
  //               this._mainVisible = true;
  //             });
  //             if (this._mainObserver) {
  //               this._mainObserver.disconnect();
  //             }
  //           }
  //         });
  //       }, { rootMargin: '1px' });
  //       this._mainObserver.observe(mainPlaceholder);
  //     }
  //   } else {
  //     import('./lc-main.js').then(() => {
  //       this._mainVisible = true;
  //     });
  //   }
  // }

  private _prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private _onTocLinkClick(e: CustomEvent) {
    const id = e.detail.id;
    const main = this.renderRoot.querySelector('lc-main') as HTMLElement & { shadowRoot: ShadowRoot };
    if (main && main.shadowRoot) {
      const el = main.shadowRoot.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: this._prefersReducedMotion() ? 'auto' : 'smooth' });
      }
    }
  }

  private _onTocFabClick() {
    const toc = this.renderRoot.querySelector('lc-table-of-content') as HTMLElement;
    if (toc) {
      toc.scrollIntoView({ behavior: this._prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  }

  // For lazy loading the main content, has to be included in the template
  // ${this._mainVisible
  //   ? html`<lc-main>
  //       <p>Fundamentos de Web Components y Lit</p>
  //     </lc-main>`
  //   : html`<div class="main-placeholder"></div>`
  // }

  render() {
    return html`
      <div class="container" @toc-link-click=${this._onTocLinkClick} @toc-fab-click=${this._onTocFabClick}>
        <lc-header>
          <h1>Fundamentos de Web Components y Lit</h1>
        </lc-header>
        <lc-table-of-content></lc-table-of-content>
        <lc-main></lc-main>
        <lc-footer></lc-footer>
        <lc-toc-fab></lc-toc-fab>
      </div>
    `;
  }
}
