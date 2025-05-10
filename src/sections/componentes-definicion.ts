import { html } from 'lit'
import '../components/lc-code'
import '../components/lc-code-block'

export const componentesDefinicionSection = html`
  <h4>2.3.1 Definición de un componente</h4>
  <p>Para definir un componente Lit, se crea una clase que extiende de LitElement y se registra la clase como un custom element en el navegador. El decorador <lc-code>@customElement</lc-code> es una forma abreviada de registrar el elemento, asociando la clase a un nombre de etiqueta personalizado.</p>
  <lc-code-block>
    <pre><code>@customElement('simple-greeting')
export class SimpleGreeting extends LitElement { /* ... */ }</code></pre>
  </lc-code-block>
  <p>Usando JavaScript, se puede definir un componente haciendo uso del método define del objeto <lc-code>customElements</lc-code>.</p>
  <lc-code-block>
    <pre><code>customElements.define('simple-greeting', SimpleGreeting)</code></pre>
  </lc-code-block>
  <p>Un componente Lit es un elemento HTML, por lo que hereda todas las propiedades y métodos estándar de <lc-code>HTMLElement</lc-code>. Además, <lc-code>LitElement</lc-code> hereda de <lc-code>ReactiveElement</lc-code>, que implementa las propiedades reactivas y la gestión de atributos.</p>
  <p>Esto significa que los componentes Lit pueden usarse como cualquier otro elemento HTML, tanto en el marcado como desde JavaScript, y disponen de todas las capacidades de los elementos personalizados.</p>
  <p>Si se utiliza TypeScript, es recomendable añadir el componente al mapa <lc-code>HTMLElementTagNameMap</lc-code> para que el tipado sea correcto al crear elementos desde el código.</p>
  <lc-code-block>
    <pre><code>@customElement('my-element')
export class MyElement extends LitElement {
  @property({type: Number})
  aNumber: number = 5;
  /* ... */
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}</code></pre>
  </lc-code-block>
  <lc-code-block>
    <pre><code>const myElement = document.createElement('my-element');
myElement.aNumber = 10;</code></pre>
  </lc-code-block>
  <a href="https://lit.dev/docs/components/defining/" target="_blank" rel="noopener noreferrer">Más información sobre la definición de un componente</a>
`
