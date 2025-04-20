import { html } from 'lit'
export const componentesIntroduccionSection = html`
  <h4>2.3.1 Introducción</h4>
  <p>Un componente Lit es una pieza reutilizable de interfaz de usuario. Se puede considerar como un contenedor que tiene un estado y muestra una interfaz basada en ese estado. Además, puede reaccionar a la interacción del usuario, lanzar eventos y realizar cualquier acción esperada de un componente de UI. Un componente Lit es un elemento HTML, por lo que dispone de todas las APIs estándar de los elementos.</p>
  <p>Crear un componente Lit implica varios conceptos:</p>
  <ul>
    <li>Definición del componente: un componente Lit se implementa como un custom element registrado en el navegador.</li>
    <li>Renderizado: el componente tiene un método render que se encarga de renderizar su contenido. En este método se define la plantilla del componente.</li>
    <li>Propiedades reactivas: las propiedades mantienen el estado del componente. Cambiar una o varias de estas propiedades reactivas desencadena un ciclo de actualización y vuelve a renderizar el componente.</li>
    <li>Estilos: un componente puede definir estilos encapsulados para controlar su propia apariencia.</li>
    <li>Ciclo de vida: Lit define un conjunto de callbacks que se pueden sobrescribir para engancharse al ciclo de vida del componente, por ejemplo, para ejecutar código cuando el elemento se añade a la página o cuando el componente se actualiza.</li>
  </ul>
  <a href="https://lit.dev/docs/components/overview/" target="_blank">2.3.1 Leer más sobre componentes en Lit</a>
`
