import { html, LitElement, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import type { ReactiveController, ReactiveControllerHost } from 'lit'

class CounterController implements ReactiveController {
  host: ReactiveControllerHost
  count = 0
  constructor(host: ReactiveControllerHost) {
    this.host = host
    host.addController(this)
  }
  hostDisconnected() {
    // Aquí se pueden limpiar recursos o eventos
  }
  increment() {
    this.count++
    this.host.requestUpdate()
  }
  reset() {
    this.count = 0
    this.host.requestUpdate()
  }
}

@customElement('lc-counter-demo')
export class LcCounterDemo extends LitElement {
  public static readonly styles = css`
    .counter-demo {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-block: 1rem;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      border: 0.1rem solid #888;
      background: #f5f5f5;
      cursor: pointer;
    }
    .count {
      font-weight: bold;
      font-size: 1.25rem;
      min-width: 2.5rem;
      text-align: center;
    }
  `
  readonly counter = new CounterController(this)
  render() {
    return html`
      <div class="counter-demo">
        <span class="count">${this.counter.count}</span>
        <button @click=${() => this.counter.increment()}>Incrementar</button>
        <button @click=${() => this.counter.reset()}>Resetear</button>
      </div>
    `
  }
}

export const composicionControladoresSection = html`
  <h4>2.5.4 Controladores (hook-like)</h4>
  <p>Los controladores reactivos son objetos que pueden engancharse al ciclo de actualización de un componente Lit. Permiten encapsular estado y comportamiento relacionado con una funcionalidad, haciéndolo reutilizable en varios componentes.</p>
  <p>Un controlador se asocia a un componente host y puede acceder a su ciclo de vida, solicitar actualizaciones y exponer API para ser usada en el método render del host. Los controladores son útiles para gestionar eventos globales, tareas asíncronas, animaciones o conectar el componente con recursos externos.</p>
  <p>Para usar un controlador, se crea una instancia y se registra en el host con addController. El controlador puede implementar callbacks como hostConnected y hostDisconnected para reaccionar a los cambios de estado del host.</p>
  <p>Los controladores pueden componerse entre sí y combinarse con directivas para lógica avanzada. Son una alternativa a los mixins, ya que no modifican la cadena de prototipos y permiten usar varias instancias en un mismo componente.</p>
  <h5 style="margin-top:2rem;">Ejemplo de controlador: contador reutilizable</h5>
  <p>Este ejemplo muestra cómo encapsular la lógica de un contador en un controlador y reutilizarlo en un componente:</p>
  <lc-counter-demo></lc-counter-demo>
  <a href="https://lit.dev/docs/composition/controllers/" target="_blank" rel="noopener noreferrer">Más información sobre controladores</a>
`
