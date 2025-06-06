import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { consume } from '@lit/context'
import { localeContext } from '../contexts/locale-context'

export const contextoEstadoSection = html`
  <h4>2.6.1 Contexto</h4>
  <p>Contexto es una forma de hacer datos accesibles a subárboles completos de componentes sin tener que pasar propiedades manualmente a cada uno. Los datos están disponibles de forma contextual, de modo que los elementos intermedios entre el proveedor y el consumidor no necesitan conocerlos.</p>
  <p>El sistema de contexto de Lit, disponible en el paquete @lit/context, es útil para datos globales como el usuario actual, el tema de la interfaz o servicios compartidos. Permite que los componentes consuman datos sin acoplamiento directo y sin necesidad de propagar propiedades por toda la jerarquía.</p>
  <p>El contexto se basa en el Context Community Protocol, lo que permite interoperabilidad entre componentes Lit y otros frameworks. Los proveedores usan un objeto de contexto y exponen datos mediante decoradores o controladores. Los consumidores pueden acceder a los datos usando el decorador @consume o el controlador ContextConsumer.</p>
  <p>El contexto es ideal para servicios globales, temas, datos de usuario, o cualquier información que deba estar disponible en muchos componentes sin acoplamiento directo.</p>
  <lc-locale-context-subscriber></lc-locale-context-subscriber>
  <a href="https://lit.dev/docs/data/context/" target="_blank">Más información sobre contexto</a>
`

@customElement('lc-locale-context-subscriber')
export class LcLocaleContextSubscriber extends LitElement {
  @consume({ context: localeContext, subscribe: true })
  locale?: string;

  render() {
    return html`<div>Locale actual: <b>${this.locale}</b></div>`;
  }
}
