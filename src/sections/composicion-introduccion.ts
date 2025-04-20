import { html } from 'lit'
export const composicionIntroduccionSection = html`
  <h4>2.5.1 Introducción</h4>
  <p>La composición es una estrategia para gestionar la complejidad y organizar el código en piezas reutilizables. Lit ofrece varias opciones para la composición y la reutilización de código: composición de componentes, controladores reactivos y mixins de clase.</p>
  <p>La composición de componentes consiste en ensamblar componentes complejos a partir de componentes más simples, usando subcomponentes en la plantilla y comunicándose mediante propiedades y eventos.</p>
  <p>Los controladores reactivos permiten encapsular estado y comportamiento relacionado con una funcionalidad en una unidad separada, que puede engancharse al ciclo de vida del componente.</p>
  <p>Los mixins de clase permiten escribir definiciones parciales reutilizables y mezclarlas en la cadena de herencia de un componente.</p>
  <p>En general, se recomienda usar controladores salvo que se necesite añadir API pública al componente o un acceso muy granular al ciclo de vida.</p>
  <a href="https://lit.dev/docs/composition/overview/" target="_blank">2.5.1 Leer más sobre composición en Lit</a>
`
