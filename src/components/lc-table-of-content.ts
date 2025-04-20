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
    .indent2 {
      margin-left: 3rem;
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
          <li><a href="#introduccion-web-components" @click=${this._onLinkClick}>1. Introducción a Web Components</a></li>
          <li class="indent"><a href="#custom-elements" @click=${this._onLinkClick}>1.1 Custom Elements</a></li>
          <li class="indent"><a href="#shadow-dom" @click=${this._onLinkClick}>1.2 Shadow DOM</a></li>
          <li class="indent"><a href="#html-template" @click=${this._onLinkClick}>1.3 HTML Template</a></li>
          <li><a href="#lit" @click=${this._onLinkClick}>2. Lit</a></li>
          <li class="indent"><a href="#que-es-lit" @click=${this._onLinkClick}>2.1 ¿Qué es Lit?</a></li>
          <li class="indent"><a href="#primeros-pasos" @click=${this._onLinkClick}>2.2 Primeros pasos</a></li>
          <li class="indent"><a href="#componentes" @click=${this._onLinkClick}>2.3 Componentes</a></li>
          <li class="indent indent2"><a href="#componentes-introduccion" @click=${this._onLinkClick}>2.3.1 Introducción</a></li>
          <li class="indent indent2"><a href="#componentes-definicion" @click=${this._onLinkClick}>2.3.2 Definición de un componente</a></li>
          <li class="indent indent2"><a href="#componentes-renderizado" @click=${this._onLinkClick}>2.3.3 Renderizado</a></li>
          <li class="indent indent2"><a href="#componentes-propiedades-reactivas" @click=${this._onLinkClick}>2.3.4 Propiedades Reactivas</a></li>
          <li class="indent indent2"><a href="#componentes-estilos" @click=${this._onLinkClick}>2.3.5 Estilos</a></li>
          <li class="indent indent2"><a href="#componentes-ciclo-vida" @click=${this._onLinkClick}>2.3.6 Ciclo de Vida</a></li>
          <li class="indent indent2"><a href="#componentes-shadow-dom" @click=${this._onLinkClick}>2.3.7 Shadow DOM</a></li>
          <li class="indent indent2"><a href="#componentes-eventos" @click=${this._onLinkClick}>2.3.8 Eventos</a></li>
          <li class="indent indent2"><a href="#componentes-decoradores" @click=${this._onLinkClick}>2.3.9 Decoradores</a></li>
          <li class="indent"><a href="#plantillas" @click=${this._onLinkClick}>2.4 Plantillas</a></li>
          <li class="indent indent2"><a href="#expresiones-plantillas" @click=${this._onLinkClick}>2.4.1 Expresiones en plantillas</a></li>
          <li class="indent indent2"><a href="#condicionales-plantillas" @click=${this._onLinkClick}>2.4.2 Condicionales</a></li>
          <li class="indent indent2"><a href="#listas-plantillas" @click=${this._onLinkClick}>2.4.3 Listas</a></li>
          <li class="indent indent2"><a href="#directivas-plantillas" @click=${this._onLinkClick}>2.4.4 Directivas</a></li>
          <li class="indent indent2"><a href="#directivas-personalizadas-plantillas" @click=${this._onLinkClick}>2.4.5 Directivas Personalizadas</a></li>
          <li class="indent"><a href="#composicion" @click=${this._onLinkClick}>2.5 Composición</a></li>
          <li class="indent indent2"><a href="#composicion-introduccion" @click=${this._onLinkClick}>2.5.1 Introducción</a></li>
          <li class="indent indent2"><a href="#composicion-componentes" @click=${this._onLinkClick}>2.5.2 Composición de Componentes</a></li>
          <li class="indent indent2"><a href="#composicion-controladores" @click=${this._onLinkClick}>2.5.4 Controladores</a></li>
          <li class="indent"><a href="#gestion-estado" @click=${this._onLinkClick}>2.6 Gestión del Estado</a></li>
          <li class="indent indent2"><a href="#contexto-estado" @click=${this._onLinkClick}>2.6.1 Contexto</a></li>
          <li class="indent indent2"><a href="#tareas-asincronas-estado" @click=${this._onLinkClick}>2.6.2 Tareas Asíncronas</a></li>
          <li class="indent indent2"><a href="#senales-estado" @click=${this._onLinkClick}>2.6.3 Señales</a></li>
          <li class="indent"><a href="#herramientas-flujos" @click=${this._onLinkClick}>2.7 Herramientas y Flujos de Trabajo</a></li>
          <li class="indent indent2"><a href="#herramientas-requisitos" @click=${this._onLinkClick}>2.7.1 Requisitos</a></li>
          <li class="indent indent2"><a href="#herramientas-desarrollo" @click=${this._onLinkClick}>2.7.2 Desarrollo</a></li>
          <li class="indent indent2"><a href="#herramientas-pruebas" @click=${this._onLinkClick}>2.7.3 Pruebas de Software</a></li>
          <li class="indent indent2"><a href="#herramientas-publicacion" @click=${this._onLinkClick}>2.7.4 Publicación</a></li>
          <li class="indent indent2"><a href="#herramientas-produccion" @click=${this._onLinkClick}>2.7.5 Producción</a></li>
          <li class="indent indent2"><a href="#herramientas-plantillas-inicio" @click=${this._onLinkClick}>2.7.6 Plantillas de Inicio</a></li>
          <li><a href="#ssr" @click=${this._onLinkClick}>2.8 Renderizado en el Servidor</a></li>
          <li class="indent indent2"><a href="#ssr-introduccion" @click=${this._onLinkClick}>2.8.1 Introducción al Renderizado en el Servidor</a></li>
          <li class="indent indent2"><a href="#ssr-uso-servidor" @click=${this._onLinkClick}>2.8.2 Uso en el Servidor</a></li>
          <li class="indent indent2"><a href="#ssr-uso-cliente" @click=${this._onLinkClick}>2.8.3 Uso en el Cliente</a></li>
          <li class="indent indent2"><a href="#ssr-autoria" @click=${this._onLinkClick}>2.8.4 Autoría</a></li>
          <li class="indent indent2"><a href="#ssr-dom-emulacion" @click=${this._onLinkClick}>2.8.5 Emulación del DOM</a></li>
          <li><a href="#frameworks" @click=${this._onLinkClick}>2.9 Frameworks</a></li>
          <li class="indent indent2"><a href="#frameworks-react" @click=${this._onLinkClick}>2.9.1 React</a></li>
          <li><a href="#internacionalizacion" @click=${this._onLinkClick}>2.10 Internacionalización</a></li>
          <li class="indent indent2"><a href="#internacionalizacion-introduccion" @click=${this._onLinkClick}>2.10.1 Introducción</a></li>
          <li class="indent indent2"><a href="#internacionalizacion-runtime-mode" @click=${this._onLinkClick}>2.10.2 Modo en Tiempo de Ejecución</a></li>
          <li class="indent indent2"><a href="#internacionalizacion-transform-mode" @click=${this._onLinkClick}>2.10.3 Modo Transformación</a></li>
          <li class="indent indent2"><a href="#internacionalizacion-cli-config" @click=${this._onLinkClick}>2.10.4 CLI y Configuración</a></li>
          <li class="indent indent2"><a href="#internacionalizacion-best-practices" @click=${this._onLinkClick}>2.10.5 Buenas prácticas</a></li>
          <li><a href="#lit-vs-stencil" @click=${this._onLinkClick}>3. Lit vs Stencil</a></li>
        </ul>
      </nav>
    `;
  }
}
