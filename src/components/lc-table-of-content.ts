import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-table-of-content')
export class LcTableOfContent extends LitElement {
  static styles = css`
    nav {
      padding: 1rem;
    }
    li {
      margin: 0.5rem 0;
    }
  `;

  render() {
    return html`
      <nav>
        <h2>Tabla de Contenidos</h2>
        <ul>
          <li><a href="#introduccion-web-components">Introducción a Web Components</a></li>
          <li><a href="#custom-elements">Custom Elements</a></li>
          <li><a href="#shadow-dom">Shadow DOM</a></li>
          <li><a href="#html-template">HTML Template</a></li>
          <li><a href="#lit">Lit</a></li>
          <li><a href="#que-es-lit">¿Qué es Lit?</a></li>
          <li><a href="#primeros-pasos">Primeros pasos</a></li>
          <li><a href="#componentes">Componentes</a></li>
          <li><a href="#plantillas">Plantillas</a></li>
          <li><a href="#organizacion-codigo">Organización del código</a></li>
          <li><a href="#propiedades-reactivas">Propiedades reactivas</a></li>
          <li><a href="#estilos">Estilos</a></li>
          <li><a href="#soporte-ide-herramientas">Soporte de IDE y herramientas</a></li>
          <li><a href="#lit-vs-stencil">Lit vs Stencil</a></li>
        </ul>
      </nav>
    `;
  }
}
