import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {SignalWatcher } from '@lit-labs/signals';
import { count } from '../signals/counter';

export const senalesEstadoSection = html`
  <h4>2.6.3 Señales</h4>
  <p>Las señales son estructuras de datos para gestionar estado observable. Una señal puede contener un valor único o un valor calculado que depende de otras señales. Son observables, por lo que los consumidores pueden ser notificados cuando cambian, y los valores calculados se actualizan automáticamente si cambian sus dependencias.</p>
  <p>Las señales son útiles para modelar y gestionar estado compartido y observable entre muchos componentes. Cuando una señal se actualiza, todos los componentes que la usan o dependen de ella se actualizan automáticamente.</p>
  <p>Lit integra señales a través del paquete experimental @lit-labs/signals, compatible con la propuesta TC39 para estandarizar señales en JavaScript. Se pueden usar señales para lograr reactividad granular, optimizar actualizaciones y facilitar la interoperabilidad entre librerías y frameworks.</p>
  <p>Lit ofrece utilidades como SignalWatcher, la directiva watch y una versión especial de html para plantillas que usan señales. Estas herramientas permiten que los componentes reaccionen automáticamente a los cambios de las señales y optimicen el renderizado.</p>
  <lc-shared-counter></lc-shared-counter>
  <a href="https://lit.dev/docs/data/signals/" target="_blank" rel="noopener noreferrer">Más información sobre señales</a>
`

@customElement('lc-shared-counter')
export class LcSharedCounterComponent extends SignalWatcher(LitElement) {
  static readonly styles = css`
    :host {
      display: block;
    }
    p {
      font-weight: 700;
    }
    button {
      margin: 0.625rem 0;
      padding: 0.3125rem 0.625rem;
      font-size: 1rem;
    }
    button:hover {
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <p>The count is ${count.get()}</p>
      <button @click=${this.#onClick}>Increment</button>
    `;
  }

  #onClick() {
    count.set(count.get() + 1);
  }
}
