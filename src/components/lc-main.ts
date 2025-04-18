import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-main')
export class LcMain extends LitElement {
  public static readonly styles = css`
    main {
      padding: 2rem;
      margin-top: 2rem;
    }
  `;

  render() {
    return html`
      <main>
        <section id="introduccion-web-components">
          <h2>Introducción a Web Components</h2>
          <p>Los Web Components son un conjunto de tecnologías que permiten crear elementos reutilizables y encapsulados para la web.</p>
          <section id="custom-elements">
            <h3>Custom Elements</h3>
            <p>Los Custom Elements permiten definir nuevos elementos HTML personalizados con comportamiento propio, utilizando JavaScript. Estos elementos pueden ser reutilizados en cualquier parte de la web y siguen el estándar del navegador.</p>
            <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements" target="_blank">Más sobre Custom Elements en MDN</a>
          </section>
          <section id="shadow-dom">
            <h3>Shadow DOM</h3>
            <p>El Shadow DOM proporciona encapsulamiento para los elementos, permitiendo que el marcado y los estilos definidos dentro de un componente no afecten ni sean afectados por el resto del documento. Esto ayuda a evitar conflictos de CSS y JavaScript.</p>
            <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Más sobre Shadow DOM en MDN</a>
          </section>
          <section id="html-template">
            <h3>HTML Template</h3>
            <p>La etiqueta &lt;template&gt; permite definir fragmentos de HTML que no se renderizan inmediatamente, sino que pueden ser clonados y utilizados dinámicamente mediante JavaScript. Es fundamental para la creación de Web Components.</p>
            <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/template" target="_blank">Más sobre HTML Template en MDN</a>
          </section>
        </section>
        <section id="lit">
          <h2>Lit</h2>
          <section id="que-es-lit">
            <h3>¿Qué es Lit?</h3>
          </section>
          <section id="primeros-pasos">
            <h3>Primeros pasos</h3>
          </section>
          <section id="componentes">
            <h3>Componentes</h3>
            <p>Un componente en Lit es una clase que extiende de LitElement y define su interfaz y estilos usando JavaScript y plantillas HTML. Puedes ver un ejemplo interactivo en StackBlitz:</p>
            <iframe height="300" style="width: 100%;" scrolling="no" title="Lit - Hola Mundo" src="https://codepen.io/victorbernabeperez/embed/jEEPPLd?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen>
  See the Pen <a href="https://codepen.io/victorbernabeperez/pen/jEEPPLd">
  Lit - Hola Mundo</a> by Victor Bernabe Perez (<a href="https://codepen.io/victorbernabeperez">@victorbernabeperez</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
          </section>
          <section id="plantillas">
            <h3>Plantillas</h3>
          </section>
          <section id="organizacion-codigo">
            <h3>Organización del código</h3>
          </section>
          <section id="propiedades-reactivas">
            <h3>Propiedades reactivas</h3>
          </section>
          <section id="estilos">
            <h3>Estilos</h3>
          </section>
          <section id="soporte-ide-herramientas">
            <h3>Soporte de IDE y herramientas</h3>
          </section>
        </section>
        <section id="lit-vs-stencil">
          <h2>Lit vs Stencil</h2>
        </section>
      </main>
    `;
  }
}
