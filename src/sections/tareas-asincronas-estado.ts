import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { Task } from '@lit/task'

export const tareasAsincronasEstadoSection = html`
  <h4>2.6.2 Tareas Asíncronas</h4>
  <p>Las tareas asíncronas en Lit se gestionan fácilmente usando el controlador Task del paquete @lit/task. Task permite ejecutar funciones asíncronas y gestionar su estado (inicial, pendiente, completada, error) de forma reactiva, actualizando el componente automáticamente cuando cambia el estado de la tarea.</p>
  <p>Se crea una instancia de Task en el componente, indicando la función asíncrona a ejecutar y los argumentos que debe recibir. Task puede ejecutarse automáticamente cuando cambian los argumentos o manualmente llamando a run().</p>
  <p>El método render de Task permite mostrar diferentes plantillas según el estado de la tarea: inicial, cargando, completada o error. Task también gestiona la cancelación de tareas pendientes y el encadenamiento de tareas.</p>
  <p>Este patrón es útil para cargar datos de APIs, gestionar operaciones asíncronas y mostrar el estado de la carga en la interfaz de usuario de forma declarativa y reactiva.</p>
  <lc-tarea-asincrona></lc-tarea-asincrona>
  <a href="https://lit.dev/docs/data/task/" target="_blank" rel="noopener noreferrer">Más información sobre tareas asíncronas</a>
`
@customElement('lc-tarea-asincrona')
export class LcTareaAsincrona extends LitElement {
  static readonly styles = css`
    .api-box {
      border: 0.125rem solid #1976d2;
      border-radius: 0.5rem;
      padding: 1rem;
      margin: 1rem 0;
      background: #f8fafd;
      font-size: 1rem;
    }
    .api-title {
      font-weight: bold;
      color: #1976d2;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    .dog-btn {
      margin-bottom: 1rem;
      padding: 0.5rem 1.2rem;
      font-size: 1rem;
      border-radius: 0.3rem;
      border: none;
      background: #1976d2;
      color: #fff;
      cursor: pointer;
    }
  `
  @state()
  private counter = 0

  private fetchTask = new Task(this, {
    task: async ([_counter], { signal }) => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random', { signal })
      if (!res.ok) throw new Error('Error al cargar la imagen')
      const data = await res.json()
      return data.message
    },
    args: () => [this.counter]
  })

  private readonly _fetchNewDog = () => {
    this.counter++
  }

  render() {
    return html`
      <div class="api-box">
        <div class="api-title">Imagen aleatoria de perro desde API pública</div>
        <div>
          <button class="dog-btn" @click=${this._fetchNewDog}>Nueva imagen</button>
        </div>
        <div>
          ${this.fetchTask.render({
            pending: () => html`Cargando...`,
            complete: (imgUrl: string) => html`<img src="${imgUrl}" alt="Perro aleatorio" style="max-width: 100%; height: auto; border-radius: 0.5rem; margin-top: 1rem;" />`,
            error: () => html`<div>Error al cargar la imagen</div>`
          })}
        </div>
      </div>
    `
  }
}
