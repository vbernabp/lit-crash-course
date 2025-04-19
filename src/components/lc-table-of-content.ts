import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-table-of-content')
export class LcTableOfContent extends LitElement {
  public static readonly styles = css`
    nav {
      padding: 1rem;
    }
    li {
      margin: 0.5rem 0;
    }
    .indent {
      margin-left: 1.5rem;
    }
  `;

  private _onLinkClick(e: Event) {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href?.startsWith('#')) {
      const id = href.slice(1);
      this.dispatchEvent(new CustomEvent('toc-link-click', {
        detail: { id },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <nav>
        <h2>Tabla de Contenidos</h2>
        <ul>
          <li><a href="#introduccion-web-components" @click=${this._onLinkClick}>Introducción a Web Components</a></li>
          <li class="indent"><a href="#custom-elements" @click=${this._onLinkClick}>Custom Elements</a></li>
          <li class="indent"><a href="#shadow-dom" @click=${this._onLinkClick}>Shadow DOM</a></li>
          <li class="indent"><a href="#html-template" @click=${this._onLinkClick}>HTML Template</a></li>
          <li><a href="#lit" @click=${this._onLinkClick}>Lit</a></li>
          <li class="indent"><a href="#que-es-lit" @click=${this._onLinkClick}>¿Qué es Lit?</a></li>
          <li class="indent"><a href="#primeros-pasos" @click=${this._onLinkClick}>Primeros pasos</a></li>
          <li class="indent"><a href="#componentes" @click=${this._onLinkClick}>Componentes</a></li>
          <li class="indent"><a href="#plantillas" @click=${this._onLinkClick}>Plantillas</a></li>
          <li class="indent"><a href="#expresiones" @click=${this._onLinkClick}>Expresiones en plantillas</a></li>
          <li class="indent"><a href="#directivas" @click=${this._onLinkClick}>Directivas</a></li>
          <li class="indent"><a href="#organizacion-codigo" @click=${this._onLinkClick}>Organización del código</a></li>
          <li class="indent"><a href="#propiedades-reactivas" @click=${this._onLinkClick}>Propiedades reactivas</a></li>
          <li class="indent"><a href="#ciclo-vida" @click=${this._onLinkClick}>Ciclo de vida</a></li>
          <li class="indent"><a href="#eventos" @click=${this._onLinkClick}>Eventos</a></li>
          <li class="indent"><a href="#estilos" @click=${this._onLinkClick}>Estilos</a></li>
          <li class="indent"><a href="#slots" @click=${this._onLinkClick}>Slots</a></li>
          <li class="indent"><a href="#buenas-practicas" @click=${this._onLinkClick}>Buenas prácticas</a></li>
          <li class="indent"><a href="#soporte-ide-herramientas" @click=${this._onLinkClick}>Soporte de IDE y herramientas</a></li>
          <li><a href="#lit-vs-stencil" @click=${this._onLinkClick}>Lit vs Stencil</a></li>
        </ul>
      </nav>
    `;
  }
}
