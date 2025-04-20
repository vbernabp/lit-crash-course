import { html } from 'lit'
export const componentesDefinicionSection = html`
  <h4>2.3.2 Definición de un componente</h4>
  <p>Para definir un componente Lit, se crea una clase que extiende de LitElement y se registra la clase como un custom element en el navegador. El decorador @customElement es una forma abreviada de registrar el elemento, asociando la clase a un nombre de etiqueta personalizado.</p>
  <p>Un componente Lit es un elemento HTML, por lo que hereda todas las propiedades y métodos estándar de HTMLElement. Además, LitElement hereda de ReactiveElement, que implementa las propiedades reactivas y la gestión de atributos.</p>
  <p>Esto significa que los componentes Lit pueden usarse como cualquier otro elemento HTML, tanto en el marcado como desde JavaScript, y disponen de todas las capacidades de los elementos personalizados.</p>
  <p>Si se utiliza TypeScript, es recomendable añadir el componente al mapa HTMLElementTagNameMap para que el tipado sea correcto al crear elementos desde el código.</p>
  <a href="https://lit.dev/docs/components/defining/" target="_blank">2.3.2 Leer más sobre la definición de un componente en Lit</a>
`
