import { html } from 'lit'
export const senalesEstadoSection = html`
  <h4>2.6.3 Señales</h4>
  <p>Las señales son estructuras de datos para gestionar estado observable. Una señal puede contener un valor único o un valor calculado que depende de otras señales. Son observables, por lo que los consumidores pueden ser notificados cuando cambian, y los valores calculados se actualizan automáticamente si cambian sus dependencias.</p>
  <p>Las señales son útiles para modelar y gestionar estado compartido y observable entre muchos componentes. Cuando una señal se actualiza, todos los componentes que la usan o dependen de ella se actualizan automáticamente.</p>
  <p>Lit integra señales a través del paquete experimental @lit-labs/signals, compatible con la propuesta TC39 para estandarizar señales en JavaScript. Se pueden usar señales para lograr reactividad granular, optimizar actualizaciones y facilitar la interoperabilidad entre librerías y frameworks.</p>
  <p>Lit ofrece utilidades como SignalWatcher, la directiva watch y una versión especial de html para plantillas que usan señales. Estas herramientas permiten que los componentes reaccionen automáticamente a los cambios de las señales y optimicen el renderizado.</p>
  <a href="https://lit.dev/docs/data/signals/" target="_blank">2.6.3 Leer más sobre señales en Lit</a>
`
