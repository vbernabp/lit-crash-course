import { html } from 'lit'
export const tareasAsincronasEstadoSection = html`
  <h4>2.6.2 Tareas Asíncronas</h4>
  <p>Las tareas asíncronas en Lit se gestionan fácilmente usando el controlador Task del paquete @lit/task. Task permite ejecutar funciones asíncronas y gestionar su estado (inicial, pendiente, completada, error) de forma reactiva, actualizando el componente automáticamente cuando cambia el estado de la tarea.</p>
  <p>Se crea una instancia de Task en el componente, indicando la función asíncrona a ejecutar y los argumentos que debe recibir. Task puede ejecutarse automáticamente cuando cambian los argumentos o manualmente llamando a run().</p>
  <p>El método render de Task permite mostrar diferentes plantillas según el estado de la tarea: inicial, cargando, completada o error. Task también gestiona la cancelación de tareas pendientes y el encadenamiento de tareas.</p>
  <p>Este patrón es útil para cargar datos de APIs, gestionar operaciones asíncronas y mostrar el estado de la carga en la interfaz de usuario de forma declarativa y reactiva.</p>
  <a href="https://lit.dev/docs/data/task/" target="_blank">Más información sobre tareas asíncronas</a>
`
