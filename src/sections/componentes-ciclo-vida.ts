import { html, LitElement, css } from 'lit'
import { customElement, state } from 'lit/decorators.js';
import '../components/lc-code';
import '../components/lc-life-cycle';

export const componentesCicloVidaSection = html`
  <h4>2.3.5 Ciclo de Vida</h4>
  <p>Los componentes Lit utilizan los métodos estándar del ciclo de vida de los custom elements, como <lc-code>constructor</lc-code>, <lc-code>connectedCallback</lc-code>, <lc-code>disconnectedCallback</lc-code>, <lc-code>attributeChangedCallback</lc-code> y <lc-code>adoptedCallback</lc-code>. Además, Lit introduce un ciclo de actualización reactivo que renderiza los cambios en el DOM cuando cambian las propiedades reactivas.</p>
  <p>El ciclo de vida estándar permite inicializar el componente, reaccionar a su inserción o eliminación del DOM, y responder a cambios en atributos. Es importante llamar a las implementaciones de <lc-code>super</lc-code> en estos métodos para mantener la funcionalidad de Lit.</p>
  <p>El ciclo de actualización reactivo se activa cuando cambia una propiedad reactiva o se llama explícitamente a <lc-code>requestUpdate</lc-code>. Lit agrupa los cambios y realiza las actualizaciones de forma asíncrona para optimizar el rendimiento.</p>
  <p>Lit proporciona métodos adicionales como <lc-code>shouldUpdate</lc-code>, <lc-code>willUpdate</lc-code>, <lc-code>update</lc-code>, <lc-code>firstUpdated</lc-code>, <lc-code>updated</lc-code> y <lc-code>getUpdateComplete</lc-code> para personalizar y controlar el ciclo de actualización y reaccionar a los cambios en el componente.</p>
  <lc-table
    .columns=${['Método', 'Comportamiento en Lit', 'Caso de uso']}
    .rows=${[
      ['constructor()', 'Solicita una actualización asíncrona y guarda propiedades ya establecidas antes de la actualización.', 'Inicialización de valores o lógica previa al primer renderizado.'],
      ['connectedCallback()', 'Inicia el ciclo de actualización y asegura la creación del renderRoot.', 'Agregar listeners globales o tareas que solo deben ocurrir cuando el elemento está en el DOM.'],
      ['disconnectedCallback()', 'Pausa el ciclo de actualización reactivo.', 'Eliminar listeners globales o limpiar recursos externos.'],
      ['attributeChangedCallback()', 'Sincroniza atributos con propiedades reactivas y gestiona observedAttributes automáticamente.', 'Rara vez es necesario sobrescribirlo; Lit lo gestiona internamente.'],
      ['adoptedCallback()', 'Sin comportamiento especial en Lit.', 'Usado en casos avanzados cuando el elemento cambia de documento.']
    ]}
    caption="Métodos del ciclo de vida estándar de los custom elements y su integración en Lit"
  ></lc-table>
  <lc-table
    .columns=${['Método', '¿Para qué se usa?']}
    .rows=${[
      ['shouldUpdate(changedProperties)', 'Decidir si el componente debe actualizarse en función de los cambios.'],
      ['willUpdate(changedProperties)', 'Preparar lógica antes de la actualización, pero después de que las propiedades hayan cambiado.'],
      ['update(changedProperties)', 'Realizar la actualización del DOM; se puede personalizar el proceso de renderizado.'],
      ['firstUpdated(changedProperties)', 'Lógica que debe ejecutarse tras el primer renderizado.'],
      ['updated(changedProperties)', 'Lógica que debe ejecutarse tras cada actualización.'],
      ['getUpdateComplete()', 'Devuelve una promesa que se resuelve cuando la actualización ha terminado.']
    ]}
    caption="Hooks del ciclo de vida reactivo propios de Lit"
  ></lc-table>
  <lc-life-cycle-wrapper></lc-life-cycle-wrapper>
  <a href="https://lit.dev/docs/components/lifecycle/" target="_blank">Más información sobre el ciclo de vida</a>
`
@customElement('lc-life-cycle-wrapper')
export class LcLifeCycleWrapper extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      margin: 2rem 0;
    }
    .wrapper {
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      background: #fafbfc;
      box-shadow: 0 2px 8px 0 #0001;
      padding: 1.5rem 1rem 1rem 1rem;
      margin-bottom: 2rem;
      max-width: 500px;
    }
    button {
      background: #fff;
      color: #1976d2;
      border: 1px solid #1976d2;
      border-radius: 5px;
      padding: 0.4rem 1.2rem;
      margin-right: 0.7rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    button:hover:enabled {
      background: #1976d2;
      color: #fff;
    }
    lc-life-cycle {
      display: block;
      margin-top: 1.2rem;
      background: #fff;
      border-radius: 6px;
      border: 1px solid #e0e0e0;
      box-shadow: 0 1px 4px 0 #0001;
      padding: 1rem;
      font-size: 1.05rem;
    }
  `;

  @state() show = true
  @state() propValue = 'valor inicial'

  toggle() {
    this.show = !this.show
  }

  changeProp() {
    this.propValue = this.propValue === 'valor inicial' ? 'nuevo valor' : 'valor inicial'
  }

  render() {
    return html`
      <div class="wrapper">
        <button @click=${() => this.toggle()}>${this.show ? 'Quitar' : 'Añadir'} lc-life-cycle</button>
        <button @click=${() => this.changeProp()} ?disabled=${!this.show}>Cambiar propiedad</button>
        ${this.show ? html`<lc-life-cycle .demoProp=${this.propValue}></lc-life-cycle>` : ''}
      </div>
    `
  }
}
