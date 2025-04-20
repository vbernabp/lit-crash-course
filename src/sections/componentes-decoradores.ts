import { html } from 'lit'
export const componentesDecoradoresSection = html`
  <h4>2.3.9 Decoradores</h4>
  <p>Los decoradores son funciones que permiten anotar y modificar el comportamiento de clases de forma declarativa. Lit proporciona decoradores opcionales para registrar elementos, definir propiedades reactivas, consultar nodos del DOM interno o configurar opciones de eventos.</p>
  <p>Algunos decoradores integrados de Lit son: @customElement para registrar un custom element, @property y @state para definir propiedades reactivas, y @query, @queryAll, @queryAsync, @queryAssignedElements y @queryAssignedNodes para acceder a nodos del shadow DOM. El decorador @eventOptions permite configurar opciones avanzadas en listeners de eventos.</p>
  <p>Los decoradores pueden importarse desde 'lit/decorators.js' o individualmente. Para usarlos es necesario compilar el código con TypeScript o Babel, ya que los navegadores aún no los soportan de forma nativa. Se recomienda usar decoradores experimentales de TypeScript para un mejor resultado en la compilación.</p>
  <p>Lit soporta tanto la versión experimental como la estándar de la propuesta de decoradores en JavaScript. La versión estándar requiere el uso de la palabra clave accessor en las propiedades decoradas.</p>
  <a href="https://lit.dev/docs/components/decorators/" target="_blank">2.3.9 Leer más sobre decoradores en Lit</a>
`
