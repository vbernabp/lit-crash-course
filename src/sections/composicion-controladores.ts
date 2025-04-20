import { html } from 'lit'
export const composicionControladoresSection = html`
  <h4>2.5.4 Controladores</h4>
  <p>Los controladores reactivos son objetos que pueden engancharse al ciclo de actualización de un componente Lit. Permiten encapsular estado y comportamiento relacionado con una funcionalidad, haciéndolo reutilizable en varios componentes.</p>
  <p>Un controlador se asocia a un componente host y puede acceder a su ciclo de vida, solicitar actualizaciones y exponer API para ser usada en el método render del host. Los controladores son útiles para gestionar eventos globales, tareas asíncronas, animaciones o conectar el componente con recursos externos.</p>
  <p>Para usar un controlador, se crea una instancia y se registra en el host con addController. El controlador puede implementar callbacks como hostConnected y hostDisconnected para reaccionar a los cambios de estado del host.</p>
  <p>Los controladores pueden componerse entre sí y combinarse con directivas para lógica avanzada. Son una alternativa a los mixins, ya que no modifican la cadena de prototipos y permiten usar varias instancias en un mismo componente.</p>
  <a href="https://lit.dev/docs/composition/controllers/" target="_blank">2.5.4 Leer más sobre controladores en Lit</a>
`
