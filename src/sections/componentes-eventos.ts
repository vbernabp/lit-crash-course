import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../components/lc-code'
import '../components/lc-events'

export const componentesEventosSection = html`
  <h4>2.3.7 Eventos</h4>
  <p>Los eventos son la forma estándar en la que los elementos comunican cambios, normalmente como resultado de la interacción del usuario. Además de los eventos estándar, los componentes Lit pueden emitir eventos personalizados para comunicar cambios o acciones específicas.</p>
  <p>Lit permite escuchar eventos tanto de forma imperativa usando addEventListener como de forma declarativa en la plantilla mediante la sintaxis <lc-code>@evento</lc-code>. Los listeners declarativos se añaden automáticamente al renderizar la plantilla y están ligados al contexto del componente.</p>
  <p>Se pueden personalizar las opciones de los listeners usando el decorador <lc-code>@eventOptions</lc-code>. También es posible escuchar eventos en elementos hijos, en el propio componente o en el shadow root, y aprovechar la delegación de eventos para optimizar el rendimiento.</p>
  <p>Para emitir eventos personalizados, se utiliza dispatchEvent con instancias de CustomEvent. Es importante configurar correctamente las opciones de burbujeo y composición para que los eventos puedan atravesar el shadow DOM y ser escuchados desde el exterior.</p>
  <p>Lit facilita la comunicación entre componentes y la integración con otras partes de la aplicación mediante el uso de eventos estándar y personalizados.</p>
  <lc-events-wrapper></lc-events-wrapper>
  <a href="https://lit.dev/docs/components/events/" target="_blank">Más información sobre eventos</a>
`

@customElement('lc-events-wrapper')
export class LcEventsWrapper extends LitElement {
  @state() declarativeLogs: string[] = []
  @state() imperativeLogs: string[] = []

  private _onDeclarativeEvent(e: CustomEvent) {
    this.declarativeLogs = [...this.declarativeLogs, `Declarativo ${e.type}: ${e.detail}`]
  }
  private _onImperativeEvent(e: CustomEvent) {
    this.imperativeLogs = [...this.imperativeLogs, `Imperativo ${e.type}: ${e.detail}`]
  }

  private _clearLogs() {
    this.declarativeLogs = []
    this.imperativeLogs = []
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('test-event', this._onImperativeEvent as EventListener)
    window.addEventListener('test-event', (e: Event) => this._onImperativeEvent(e as CustomEvent))
  }

  render() {
    return html`
      <button @click=${this._clearLogs}>Limpiar logs</button>
      <lc-events
        @test-event=${this._onDeclarativeEvent}
      ></lc-events>
      <div>
        <strong>Logs declarativos:</strong>
        <ul>
          ${this.declarativeLogs.map(log => html`<li>${log}</li>`)}
        </ul>
        <strong>Logs imperativos:</strong>
        <ul>
          ${this.imperativeLogs.map(log => html`<li>${log}</li>`)}
        </ul>
      </div>
    `
  }
}
