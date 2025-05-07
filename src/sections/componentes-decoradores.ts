import '../components/lc-table';
import { html } from 'lit'
export const componentesDecoradoresSection = html`
  <h4>2.3.8 Decoradores</h4>
  <p>Los decoradores son funciones que permiten anotar y modificar el comportamiento de clases de forma declarativa. Lit proporciona decoradores opcionales para registrar elementos, definir propiedades reactivas, consultar nodos del DOM interno o configurar opciones de eventos.</p>
  <lc-table .columns=${['Decorador', 'Significado']} .rows=${[
    ['@customElement', 'Define un custom element.'],
    ['@property', 'Define una propiedad pública reactiva.'],
    ['@state', 'Define una propiedad privada reactiva.'],
    ['@eventOptions', 'Añade opciones al listener de eventos.'],
    ['@query', 'Devuelve un elemento del template.'],
    ['@queryAll', 'Devuelve una lista de elementos del template.'],
    ['@queryAsync', 'Devuelve una promesa que resuelve a un elemento del template.'],
    ['@queryAssignedElements', 'Devuelve los elementos asignados a un slot.'],
    ['@queryAssignedNodes', 'Devuelve los nodos asignados a un slot.']
  ]} caption="Decoradores principales de Lit y su función"></lc-table>
  <p>Los decoradores pueden importarse desde <lc-code>'lit/decorators.js'</lc-code> o individualmente. Para usarlos es necesario compilar el código con TypeScript o Babel, ya que los navegadores aún no los soportan de forma nativa. Se recomienda usar decoradores experimentales de TypeScript para un mejor resultado en la compilación.</p>
  <p>Lit soporta tanto la versión experimental como la estándar de la propuesta de decoradores en JavaScript. La versión estándar requiere el uso de la palabra clave <lc-code>accessor</lc-code> en las propiedades decoradas.</p>
  <a href="https://lit.dev/docs/components/decorators/" target="_blank">Más información sobre decoradores</a>
`
