import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-table-of-content')
export class LcTableOfContent extends LitElement {
  public static readonly styles = css`
    nav {
      padding: 1rem;
    }
    ol {
      counter-reset: item;
    }
    li {
      display: block;
    }
    li:before {
      content: counters(item, ".") ". ";
      counter-increment: item;
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
        <ol>
          <li><a href="#introduccion-web-components" @click=${this._onLinkClick}>Introducción a Web Components</a>
            <ol>
              <li><a href="#custom-elements" @click=${this._onLinkClick}>Custom Elements</a></li>
              <li><a href="#shadow-dom" @click=${this._onLinkClick}>Shadow DOM</a></li>
              <li><a href="#html-template" @click=${this._onLinkClick}>HTML Template</a></li>
            </ol>
          </li>
          <li><a href="#lit" @click=${this._onLinkClick}>Lit</a>
            <ol>
              <li><a href="#que-es-lit" @click=${this._onLinkClick}>¿Qué es Lit?</a></li>
              <li><a href="#primeros-pasos" @click=${this._onLinkClick}>Primeros pasos</a></li>
              <li><a href="#componentes" @click=${this._onLinkClick}>Componentes</a>
                <ol>
                  <li><a href="#componentes-introduccion" @click=${this._onLinkClick}>Introducción</a></li>
                  <li><a href="#componentes-definicion" @click=${this._onLinkClick}>Definición de un componente</a></li>
                  <li><a href="#componentes-renderizado" @click=${this._onLinkClick}>Renderizado</a></li>
                  <li><a href="#componentes-propiedades-reactivas" @click=${this._onLinkClick}>Propiedades Reactivas</a></li>
                  <li><a href="#componentes-estilos" @click=${this._onLinkClick}>Estilos</a></li>
                  <li><a href="#componentes-ciclo-vida" @click=${this._onLinkClick}>Ciclo de Vida</a></li>
                  <li><a href="#componentes-shadow-dom" @click=${this._onLinkClick}>Shadow DOM</a></li>
                  <li><a href="#componentes-eventos" @click=${this._onLinkClick}>Eventos</a></li>
                  <li><a href="#componentes-decoradores" @click=${this._onLinkClick}>Decoradores</a></li>
                </ol>
              </li>
              <li><a href="#plantillas" @click=${this._onLinkClick}>Plantillas</a>
                <ol>
                  <li><a href="#expresiones-plantillas" @click=${this._onLinkClick}>Expresiones en plantillas</a></li>
                  <li><a href="#condicionales-plantillas" @click=${this._onLinkClick}>Condicionales</a></li>
                  <li><a href="#listas-plantillas" @click=${this._onLinkClick}>Listas</a></li>
                  <li><a href="#directivas-plantillas" @click=${this._onLinkClick}>Directivas</a></li>
                  <li><a href="#directivas-personalizadas-plantillas" @click=${this._onLinkClick}>Directivas Personalizadas</a></li>
                </ol>
              </li>
              <li><a href="#composicion" @click=${this._onLinkClick}>Composición</a>
                <ol>
                  <li><a href="#composicion-introduccion" @click=${this._onLinkClick}>Introducción</a></li>
                  <li><a href="#composicion-componentes" @click=${this._onLinkClick}>Composición de Componentes</a></li>
                  <li><a href="#composicion-controladores" @click=${this._onLinkClick}>Controladores</a></li>
                </ol>
              </li>
              <li><a href="#gestion-estado" @click=${this._onLinkClick}>Gestión del Estado</a>
                <ol>
                  <li><a href="#contexto-estado" @click=${this._onLinkClick}>Contexto</a></li>
                  <li><a href="#tareas-asincronas-estado" @click=${this._onLinkClick}>Tareas Asíncronas</a></li>
                  <li><a href="#senales-estado" @click=${this._onLinkClick}>Señales</a></li>
                </ol>
              </li>
              <li><a href="#herramientas-flujos" @click=${this._onLinkClick}>Herramientas y Flujos de Trabajo</a>
                <ol>
                  <li><a href="#herramientas-requisitos" @click=${this._onLinkClick}>Requisitos</a></li>
                  <li><a href="#herramientas-desarrollo" @click=${this._onLinkClick}>Desarrollo</a></li>
                  <li><a href="#herramientas-pruebas" @click=${this._onLinkClick}>Pruebas de Software</a></li>
                  <li><a href="#herramientas-publicacion" @click=${this._onLinkClick}>Publicación</a></li>
                  <li><a href="#herramientas-produccion" @click=${this._onLinkClick}>Producción</a></li>
                  <li><a href="#herramientas-plantillas-inicio" @click=${this._onLinkClick}>Plantillas de Inicio</a></li>
                </ol>
              </li>
            </ol>
          </li>
          <li><a href="#ssr" @click=${this._onLinkClick}>Renderizado en el Servidor</a>
            <ol>
              <li><a href="#ssr-introduccion" @click=${this._onLinkClick}>Introducción al Renderizado en el Servidor</a></li>
              <li><a href="#ssr-uso-servidor" @click=${this._onLinkClick}>Uso en el Servidor</a></li>
              <li><a href="#ssr-uso-cliente" @click=${this._onLinkClick}>Uso en el Cliente</a></li>
              <li><a href="#ssr-autoria" @click=${this._onLinkClick}>Autoría</a></li>
              <li><a href="#ssr-dom-emulacion" @click=${this._onLinkClick}>Emulación del DOM</a></li>
            </ol>
          </li>
          <li><a href="#frameworks" @click=${this._onLinkClick}>Frameworks</a>
            <ol>
              <li><a href="#frameworks-react" @click=${this._onLinkClick}>React</a></li>
            </ol>
          </li>
          <li><a href="#internacionalizacion" @click=${this._onLinkClick}>Internacionalización</a>
            <ol>
              <li><a href="#internacionalizacion-introduccion" @click=${this._onLinkClick}>Introducción</a></li>
              <li><a href="#internacionalizacion-runtime-mode" @click=${this._onLinkClick}>Modo en Tiempo de Ejecución</a></li>
              <li><a href="#internacionalizacion-transform-mode" @click=${this._onLinkClick}>Modo Transformación</a></li>
              <li><a href="#internacionalizacion-cli-config" @click=${this._onLinkClick}>CLI y Configuración</a></li>
              <li><a href="#internacionalizacion-best-practices" @click=${this._onLinkClick}>Buenas prácticas</a></li>
            </ol>
          </li>
          <li><a href="#lit-vs-stencil" @click=${this._onLinkClick}>Lit vs Stencil</a></li>
          <li><a href="#preguntas-respuestas" @click=${this._onLinkClick}>Preguntas y Respuestas</a></li>
        </ol>
      </nav>
    `;
  }
}
