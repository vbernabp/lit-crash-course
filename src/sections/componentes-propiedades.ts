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
  <lc-code-block>
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
  </lc-code-block>
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
    caption="Opciones de configuración de propiedades reactivas en Lit"
  ></lc-table>
  <p>Cuando una propiedad cambia, ocurre la siguiente secuencia:</p>
  <ol>
    <li>Se llama al setter de la propiedad.</li>
    <li>El setter invoca el método <lc-code>requestUpdate</lc-code> del componente.</li>
    <li>Se comparan los valores antiguo y nuevo de la propiedad.</li>
    <li>Por defecto, Lit utiliza una comparación estricta (<lc-code>newValue !== oldValue</lc-code>) para determinar si el valor ha cambiado.</li>
    <li>Si la propiedad tiene una función <lc-code>hasChanged</lc-code>, se llama con los valores antiguo y nuevo.</li>
    <li>Si se detecta un cambio en la propiedad, se programa una actualización de forma asíncrona. Si ya hay una actualización programada, solo se ejecuta una actualización.</li>
    <li>Se llama al método <lc-code>update</lc-code> del componente, reflejando las propiedades cambiadas en los atributos y volviendo a renderizar las plantillas del componente.</li>
  </ol>
  <lc-note>
    <p>Cambiar una propiedad de tipo objeto o array, no se desencadenará una actualización, ya que el objeto en sí no ha cambiado.</p>
  </lc-note>
  <p>Mutar un objeto o array no cambia la referencia del objeto, por lo que no se desencadenará una actualización. Se pueden manejar propiedades de tipo objeto y array de dos maneras:</p>
  <ul>
    <li>
      <strong>Patrón de datos inmutables.</strong> Se deben tratar los objetos y arrays como inmutables. Por ejemplo, para eliminar un elemento de <lc-code>myArray</lc-code>, se construye un nuevo array:
      <lc-code-block>
        <pre><code>this.myArray = this.myArray.filter((_, i) =&gt; i !== indexToRemove);</code></pre>
      </lc-code-block>
      Aunque este ejemplo es simple, a menudo resulta útil utilizar una librería como Immer para gestionar datos inmutables. Esto puede ayudar a evitar código repetitivo cuando se modifican objetos profundamente anidados.
    </li>
    <li>
      <strong>Disparar manualmente una actualización.</strong> Se pueden mutar los datos y llamar a <lc-code>requestUpdate()</lc-code> para forzar una actualización directamente. Por ejemplo:
      <lc-code-block>
        <pre><code>this.myArray.splice(indexToRemove, 1);
this.requestUpdate();</code></pre>
      </lc-code-block>
      Cuando se llama sin argumentos, <lc-code>requestUpdate()</lc-code> programa una actualización sin invocar la función <lc-code>hasChanged()</lc-code>. Sin embargo, <lc-code>requestUpdate()</lc-code> solo actualiza el componente actual. Es decir, si un componente utiliza el código anterior y pasa <lc-code>this.myArray</lc-code> a un subcomponente, el subcomponente detectará que la referencia del array no ha cambiado, por lo que no se actualizará.
    </li>
  </ul>
  <h5>Atributos</h5>
  <p>Además de las propiedades, los <lc-code>atributos</lc-code> permiten configurar componentes desde HTML sin necesidad de JavaScript. Lit asocia automáticamente un atributo observado a cada propiedad reactiva pública, y sincroniza el valor del atributo con la propiedad. Los atributos siempre son cadenas, por lo que Lit realiza la conversión necesaria entre el valor del atributo y el tipo de la propiedad (<lc-code>String</lc-code>, <lc-code>Number</lc-code>, <lc-code>Boolean</lc-code>, <lc-code>Array</lc-code>, <lc-code>Object</lc-code>).</p>
  <p>Por defecto, el nombre del atributo es el nombre de la propiedad en minúsculas, pero se puede personalizar usando la opción <lc-code>attribute</lc-code>:</p>
  <lc-code-block>
    <pre><code>@property({ attribute: 'mi-nombre' })
miNombre = '';</code></pre>
  </lc-code-block>
  <p>Si se establece <lc-code>attribute</lc-code> a <lc-code>false</lc-code>, la propiedad no se asociará a ningún atributo y no podrá configurarse desde el HTML.</p>
  <p>Para tipos complejos o conversiones personalizadas, se puede usar la opción <lc-code>converter</lc-code> en la declaración de la propiedad. El conversor puede definir funciones <lc-code>fromAttribute</lc-code> y <lc-code>toAttribute</lc-code> para controlar cómo se transforma el valor entre atributo y propiedad:</p>
  <lc-code-block>
    <pre><code>miProp: {
  converter: {
    fromAttribute: (valor) => {/* conversión personalizada */},
    toAttribute: (valor) => {/* conversión personalizada */}
  }
}</code></pre>
  </lc-code-block>
  <p>Lit proporciona un conversor por defecto para los tipos más comunes. Por ejemplo, para <lc-code>Boolean</lc-code>, la presencia del atributo lo convierte en <lc-code>true</lc-code> y su ausencia en <lc-code>false</lc-code>. Para <lc-code>Number</lc-code>, el valor del atributo se convierte con <lc-code>Number()</lc-code>. Para <lc-code>Object</lc-code> y <lc-code>Array</lc-code>, se usa <lc-code>JSON.parse</lc-code> y <lc-code>JSON.stringify</lc-code> para la conversión.</p>
  <p>No se recomienda reflejar propiedades de tipo objeto o array, ya que esto puede afectar negativamente al rendimiento y al consumo de memoria, especialmente si se usan valores grandes o anidados.</p>
  <p>Como buenas prácticas, se recomienda reflejar solo aquellas propiedades que realmente deban ser visibles como atributos, y preferir el uso de <lc-code>useDefault: true</lc-code> para evitar que el componente cree atributos que el usuario no ha definido explícitamente.</p>
  <h5>Accessors personalizados de propiedades</h5>
  <p>Por defecto, Lit genera automáticamente los accessors (getter y setter) para todas las propiedades reactivas. El setter generado invoca <lc-code>requestUpdate()</lc-code> cada vez que se asigna un valor a la propiedad, lo que inicia una actualización del componente si es necesario.</p>
  <p>Si se necesita personalizar cómo se obtiene o establece el valor de una propiedad, se pueden definir accessors personalizados (getter y setter) en la clase. Por ejemplo, se puede forzar que una propiedad numérica siempre almacene el valor redondeado hacia abajo:</p>
  <lc-code-block>
    <pre><code>private _rounded = 0;
@property()
set roundedCount(val: number) {
  this._rounded = Math.floor(val);
}
get roundedCount() { return this._rounded; }</code></pre>
  </lc-code-block>
  <p>El decorador <lc-code>@property</lc-code> debe colocarse en el setter. Los setters decorados con <lc-code>@property</lc-code> o <lc-code>@state</lc-code> llaman automáticamente a <lc-code>requestUpdate()</lc-code> cuando se asigna un valor.</p>
  <p>En la mayoría de los casos no es necesario crear accessors personalizados. Para calcular valores derivados de otras propiedades, se recomienda usar el callback <lc-code>willUpdate</lc-code>. Para realizar acciones tras la actualización, se recomienda <lc-code>updated</lc-code>. Un setter personalizado solo es útil cuando es importante validar o transformar el valor de forma síncrona al asignarlo.</p>
  <p>Si la clase define sus propios accessors para una propiedad, Lit no los sobrescribe. Si no los define, Lit los genera automáticamente, incluso si una superclase ya los ha definido.</p>
  <p>Para evitar que Lit genere un accessor y sobrescriba el de la superclase, se puede usar la opción <lc-code>noAccessor: true</lc-code> en la declaración de la propiedad:</p>
  <lc-code-block>
    <pre><code>static properties = {
  myProp: { type: Number, noAccessor: true }
};</code></pre>
  </lc-code-block>
  <p>No es necesario usar <lc-code>noAccessor</lc-code> si se definen accessors personalizados en la propia clase.</p>
  <lc-properties-wrapper></lc-properties-wrapper>
  <p><a href="https://lit.dev/docs/components/properties/" target="_blank" rel="noopener noreferrer">Más información sobre propiedades reactivas</a></p>
`;

@customElement('lc-properties-wrapper')
export class LcPropertiesWrapper extends LitElement {
  @state() text = 'Lit'
  @state() count = 5
  @state() active = true
  @state() items = [0, 1, 2]
  @state() config = { theme: 'dark' }
  @state() customName = 'atributo'
  @state() csv = ['a', 'b', 'c']
  @state() caseSensitive = 'A'
  @state() roundedCount = 0

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
  private _onSetRounded(e: CustomEvent<number>) {
    this.roundedCount = e.detail
  }

  render() {
    return html`
      <lc-properties
        text=${this.text}
        count=${this.count}
        .active=${this.active}
        .items=${this.items}
        .config=${this.config}
        custom-attr=${this.customName}
        .csv=${this.csv}
        .caseSensitive=${this.caseSensitive}
        .roundedCount=${this.roundedCount}
        @add-exclamation=${this._onAddExclamation}
        @increment-count=${this._onIncrementCount}
        @toggle-active=${this._onToggleActive}
        @push-item=${this._onPushItem}
        @toggle-theme=${this._onToggleTheme}
        @add-star=${this._onAddStar}
        @add-letter=${this._onAddLetter}
        @toggle-case=${this._onToggleCase}
        @set-rounded=${this._onSetRounded}
      ></lc-properties>
    `;
  }
}
