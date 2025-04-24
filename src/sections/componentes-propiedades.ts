import { html, LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js';
import '../components/lc-code';
import '../components/lc-note';
import '../components/lc-properties';
import '../components/lc-table';

export const componentesPropiedadesReactivasSection = html`
  <h4>2.3.3 Propiedades Reactivas</h4>
  <p>Las propiedades reactivas en Lit permiten que los componentes respondan automáticamente a los cambios de datos. Cuando una propiedad reactiva cambia, el componente se vuelve a renderizar para reflejar el nuevo estado.</p>
  <p>Se pueden declarar propiedades reactivas utilizando decoradores o la propiedad estática <strong>properties</strong>. Estas propiedades pueden sincronizarse con atributos HTML, reflejar su valor en los atributos y definir su tipo para conversión automática.</p>
  <p>Las propiedades públicas deben usarse como API de entrada del componente. El componente no debe modificar sus propias propiedades públicas salvo en respuesta a la interacción del usuario, y debe notificar los cambios mediante eventos personalizados.</p>
  <p>Para propiedades internas que no deben ser accedidas desde fuera del componente, se puede usar la opción <strong>state</strong> o el decorador correspondiente.</p>
  <lc-note>
    <p>En JavaScript hay que inicializar las propiedades en el constructor.</p>
  </lc-note>
  <lc-code>
    <pre><code>class MyElement extends LitElement {
  static properties = {
    mode: {type: String},
    data: {attribute: false},
    counter: {state: true},
  };

  constructor() {
    super();
    this.data = {};
  }
}</code></pre>
  </lc-code>
  <lc-properties-wrapper></lc-properties-wrapper>
  <lc-table
    .columns=${['Opción', 'Valor por defecto', 'Descripción']}
    .rows=${[
      ['attribute', 'true', 'Asocia la propiedad a un atributo. Puede ser un nombre personalizado o false para no asociar.'],
      ['converter', 'Conversor por defecto', 'Conversor personalizado para transformar entre propiedad y atributo.'],
      ['hasChanged', '(newValue !== oldValue)', 'Función para determinar si la propiedad ha cambiado y debe actualizarse.'],
      ['noAccessor', 'false', 'Evita generar los accessors por defecto para la propiedad.'],
      ['reflect', 'false', 'Refleja el valor de la propiedad en el atributo asociado.'],
      ['state', 'false', 'Declara la propiedad como estado interno reactivo.'],
      ['type', 'String', 'Tipo usado para convertir entre atributo (string) y propiedad.'],
      ['useDefault', 'false', 'Evita la reflexión inicial del valor por defecto y resetea la propiedad si se elimina el atributo.'],
    ]}
  ></lc-table>
  <p><a href="https://lit.dev/docs/components/properties/" target="_blank" rel="noopener">Más información sobre propiedades reactivas</a></p>
`;

@customElement('lc-properties-wrapper')
export class LcPropertiesWrapper extends LitElement {
  @state() text = 'Lit'
  @state() count = 5
  @state() active = true
  @state() items = [0, 1, 2]
  @state() config = { theme: 'dark' }
  @state() customName = 'desde fuera'
  @state() csv = ['a', 'b', 'c']
  @state() caseSensitive = 'A'

  private _onAddExclamation(e: CustomEvent<string>) {
    this.text = e.detail
  }
  private _onIncrementCount(e: CustomEvent<number>) {
    this.count = e.detail
  }
  private _onToggleActive(e: CustomEvent<boolean>) {
    this.active = e.detail
  }
  private _onPushItem(e: CustomEvent<number[]>) {
    this.items = e.detail
  }
  private _onToggleTheme(e: CustomEvent<{ theme: string }>) {
    this.config = e.detail
  }
  private _onAddStar(e: CustomEvent<string>) {
    this.customName = e.detail
  }
  private _onAddLetter(e: CustomEvent<string[]>) {
    this.csv = e.detail
  }
  private _onToggleCase(e: CustomEvent<string>) {
    this.caseSensitive = e.detail
  }

  render() {
    return html`
      <lc-properties
        .text=${this.text}
        .count=${this.count}
        .active=${this.active}
        .items=${this.items}
        .config=${this.config}
        .customName=${this.customName}
        .csv=${this.csv}
        .caseSensitive=${this.caseSensitive}
        @add-exclamation=${this._onAddExclamation}
        @increment-count=${this._onIncrementCount}
        @toggle-active=${this._onToggleActive}
        @push-item=${this._onPushItem}
        @toggle-theme=${this._onToggleTheme}
        @add-star=${this._onAddStar}
        @add-letter=${this._onAddLetter}
        @toggle-case=${this._onToggleCase}
      ></lc-properties>
    `;
  }
}
