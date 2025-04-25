import '../components/lc-code';
import { html } from 'lit'
export const componentesDecoradoresSection = html`
  <h4>2.3.8 Decoradores</h4>
  <p>Los decoradores son funciones que permiten anotar y modificar el comportamiento de clases de forma declarativa. Lit proporciona decoradores opcionales para registrar elementos, definir propiedades reactivas, consultar nodos del DOM interno o configurar opciones de eventos.</p>
  <p>Algunos decoradores integrados de Lit son: <lc-code>@customElement</lc-code> para registrar un custom element, <lc-code>@property</lc-code> y <lc-code>@state</lc-code> para definir propiedades reactivas, y <lc-code>@query</lc-code>, <lc-code>@queryAll</lc-code>, <lc-code>@queryAsync</lc-code>, <lc-code>@queryAssignedElements</lc-code> y <lc-code>@queryAssignedNodes</lc-code> para acceder a nodos del shadow DOM. El decorador <lc-code>@eventOptions</lc-code> permite configurar opciones avanzadas en listeners de eventos.</p>
  <p>Los decoradores pueden importarse desde <lc-code>'lit/decorators.js'</lc-code> o individualmente. Para usarlos es necesario compilar el código con TypeScript o Babel, ya que los navegadores aún no los soportan de forma nativa. Se recomienda usar decoradores experimentales de TypeScript para un mejor resultado en la compilación.</p>
  <p>Lit soporta tanto la versión experimental como la estándar de la propuesta de decoradores en JavaScript. La versión estándar requiere el uso de la palabra clave <lc-code>accessor</lc-code> en las propiedades decoradas.</p>
  <a href="https://lit.dev/docs/components/decorators/" target="_blank">Más información sobre decoradores</a>
`
