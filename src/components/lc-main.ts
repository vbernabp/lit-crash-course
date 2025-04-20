import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lc-main')
export class LcMain extends LitElement {
  public static readonly styles = css`
    main {
      padding: 2rem;
      margin-top: 2rem;
    }
    main section {
      margin-bottom: 2.5rem;
    }
    main h2, main h3 {
      margin-top: 2rem;
    }
  `;

  render() {
    return html`
      <main>
        <section id="introduccion-web-components">
          <h2>1. Introducción a Web Components</h2>
          <p>Web Components es un conjunto de tecnologías estándar que permite crear elementos personalizados y reutilizables en la web. Incluye Custom Elements, Shadow DOM y HTML Templates. Permiten encapsular funcionalidad, estilos y estructura, facilitando la interoperabilidad entre frameworks y la reutilización de componentes en cualquier proyecto web.</p>
          <ul>
            <li>Custom Elements: define nuevos elementos HTML con comportamiento propio.</li>
            <li>Shadow DOM: encapsula el DOM y los estilos de un componente.</li>
            <li>HTML Templates: define fragmentos de HTML reutilizables y no renderizados hasta ser usados.</li>
          </ul>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components" target="_blank">1. Leer más en MDN</a>
        </section>
        <section id="custom-elements">
          <h3>1.1 Custom Elements</h3>
          <p>Permiten crear etiquetas HTML personalizadas. Se definen extendiendo HTMLElement y registrando el elemento en el navegador. Los custom elements disponen de callbacks de ciclo de vida que permiten reaccionar a su inserción, eliminación o cambios de atributos. Son la base para crear componentes reutilizables y encapsulados en cualquier aplicación web.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements" target="_blank">1.1 Leer más en MDN</a>
        </section>
        <section id="shadow-dom">
          <h3>1.2 Shadow DOM</h3>
          <p>El Shadow DOM encapsula el DOM y los estilos de un componente, evitando colisiones con el resto de la página. Permite definir estilos y estructura interna que no afectan ni son afectados por el exterior. El Shadow DOM puede ser abierto o cerrado, y proporciona aislamiento tanto a nivel de CSS como de JavaScript.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">1.2 Leer más en MDN</a>
        </section>
        <section id="html-template">
          <h3>1.3 HTML Template</h3>
          <p>La etiqueta template permite definir fragmentos de HTML que no se renderizan hasta ser clonados. Es útil para crear contenido dinámico y para la estructura interna de los Web Components, ya que permite separar la definición del contenido de su uso real en el DOM.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/template" target="_blank">1.3 Leer más en MDN</a>
        </section>
        <section id="lit">
          <h2>2. Lit</h2>
          <p>Lit es una librería ligera para crear componentes web rápidos y expresivos. Proporciona una clase base que simplifica la reactividad, el uso de plantillas declarativas y el encapsulamiento de estilos. Lit está diseñado para ser eficiente, fácil de aprender y compatible con los estándares web, permitiendo crear componentes reutilizables y compartibles en cualquier entorno.</p>
          <a href="https://lit.dev/docs/" target="_blank">2. Leer más en la documentación oficial de Lit</a>
        </section>
        <section id="que-es-lit">
          <h3>2.1 ¿Qué es Lit?</h3>
          <p>Lit es una librería sencilla para crear componentes web rápidos y ligeros. Su núcleo es una clase base que elimina el código repetitivo y proporciona estado reactivo, estilos encapsulados y un sistema de plantillas declarativo, pequeño y eficiente.</p>
          <p>Cada componente Lit es un Web Component estándar, lo que permite interoperabilidad total: pueden usarse en cualquier entorno HTML, con cualquier framework o sin ninguno. Esto hace que Lit sea ideal para crear componentes compartibles o sistemas de diseño, y se puede usar para cualquier tipo de interfaz web.</p>
          <p>El peso de Lit es muy reducido (alrededor de 5 KB minificado y comprimido), ayudando a mantener pequeños los bundles y rápidos los tiempos de carga.</p>
          <p>Lit está diseñado para evolucionar junto a la plataforma web, aprovechando las capacidades actuales y preparándose para futuras mejoras. Sus principales características incluyen:</p>
          <ul>
            <li>Clase base LitElement, extensión conveniente de HTMLElement.</li>
            <li>Plantillas declarativas y expresivas usando template literals de JavaScript.</li>
            <li>Propiedades reactivas que actualizan automáticamente el renderizado.</li>
            <li>Estilos encapsulados por defecto.</li>
            <li>Funciona tanto con JavaScript como con TypeScript.</li>
            <li>No requiere compilación durante el desarrollo y tiene soporte de IDE y herramientas de producción.</li>
          </ul>
          <p>Ventajas principales:</p>
          <ul>
            <li>Simple: añade solo lo necesario para ser productivo.</li>
            <li>Rápido: actualiza solo las partes dinámicas del UI.</li>
            <li>Ligero: tamaño muy reducido.</li>
            <li>Flexible: fácil de integrar con otros componentes o frameworks, y permite migraciones progresivas.</li>
            <li>Componentes reutilizables en cualquier app o sitio, incluso en diferentes stacks.</li>
            <li>Perfecto para mejorar progresivamente sitios HTML básicos o construir aplicaciones ricas e interactivas.</li>
          </ul>
          <a href="https://lit.dev/docs/" target="_blank">2.1 Leer más en la documentación oficial de Lit</a>
        </section>
        <section id="primeros-pasos">
          <h3>2.2 Primeros pasos</h3>
          <p>Para empezar con Lit, se recomienda instalar el paquete desde el gestor de dependencias y configurar el entorno de desarrollo. Lit puede integrarse en proyectos nuevos o existentes, y dispone de recursos como playground online, tutoriales interactivos y kits de inicio para diferentes lenguajes y configuraciones. La comunidad y la documentación oficial ofrecen guías detalladas para cada escenario.</p>
          <a href="https://lit.dev/docs/getting-started/" target="_blank">2.2 Leer más sobre primeros pasos en Lit</a>
        </section>
        <section id="componentes">
          <h3>2.3 Componentes</h3>
        </section>
        <section id="componentes-introduccion">
          <h4>2.3.1 Introducción</h4>
          <p>Un componente Lit es una pieza reutilizable de interfaz de usuario. Se puede considerar como un contenedor que tiene un estado y muestra una interfaz basada en ese estado. Además, puede reaccionar a la interacción del usuario, lanzar eventos y realizar cualquier acción esperada de un componente de UI. Un componente Lit es un elemento HTML, por lo que dispone de todas las APIs estándar de los elementos.</p>
          <p>Crear un componente Lit implica varios conceptos:</p>
          <ul>
            <li>Definición del componente: un componente Lit se implementa como un custom element registrado en el navegador.</li>
            <li>Renderizado: el componente tiene un método render que se encarga de renderizar su contenido. En este método se define la plantilla del componente.</li>
            <li>Propiedades reactivas: las propiedades mantienen el estado del componente. Cambiar una o varias de estas propiedades reactivas desencadena un ciclo de actualización y vuelve a renderizar el componente.</li>
            <li>Estilos: un componente puede definir estilos encapsulados para controlar su propia apariencia.</li>
            <li>Ciclo de vida: Lit define un conjunto de callbacks que se pueden sobrescribir para engancharse al ciclo de vida del componente, por ejemplo, para ejecutar código cuando el elemento se añade a la página o cuando el componente se actualiza.</li>
          </ul>
          <a href="https://lit.dev/docs/components/overview/" target="_blank">2.3.1 Leer más sobre componentes en Lit</a>
        </section>
        <section id="componentes-definicion">
          <h4>2.3.2 Definición de un componente</h4>
          <p>Para definir un componente Lit, se crea una clase que extiende de LitElement y se registra la clase como un custom element en el navegador. El decorador @customElement es una forma abreviada de registrar el elemento, asociando la clase a un nombre de etiqueta personalizado.</p>
          <p>Un componente Lit es un elemento HTML, por lo que hereda todas las propiedades y métodos estándar de HTMLElement. Además, LitElement hereda de ReactiveElement, que implementa las propiedades reactivas y la gestión de atributos.</p>
          <p>Esto significa que los componentes Lit pueden usarse como cualquier otro elemento HTML, tanto en el marcado como desde JavaScript, y disponen de todas las capacidades de los elementos personalizados.</p>
          <p>Si se utiliza TypeScript, es recomendable añadir el componente al mapa HTMLElementTagNameMap para que el tipado sea correcto al crear elementos desde el código.</p>
          <a href="https://lit.dev/docs/components/defining/" target="_blank">2.3.2 Leer más sobre la definición de un componente en Lit</a>
        </section>
        <section id="componentes-renderizado">
          <h4>2.3.3 Renderizado</h4>
          <p>Para definir lo que debe renderizar un componente Lit, se añade un método render que retorna una plantilla. Las plantillas pueden incluir expresiones, que son marcadores de posición para contenido dinámico. Se escriben usando template literals de JavaScript y la función html de Lit.</p>
          <p>Las plantillas de Lit pueden contener expresiones JavaScript para establecer contenido de texto, atributos, propiedades y listeners de eventos. El método render puede incluir cualquier lógica de JavaScript necesaria para preparar los datos que se mostrarán.</p>
          <p>El método render normalmente retorna un objeto TemplateResult, pero también puede devolver cualquier valor que Lit pueda renderizar como hijo de un elemento HTML: valores primitivos, nodos DOM, arrays o iterables de estos tipos, o los valores especiales nothing y noChange.</p>
          <p>Lit utiliza shadow DOM para encapsular el DOM que renderiza el componente, proporcionando aislamiento y encapsulamiento de estilos y estructura.</p>
          <p>Un componente Lit se renderiza inicialmente cuando se añade al DOM. Después, cualquier cambio en las propiedades reactivas desencadena un ciclo de actualización y vuelve a renderizar el componente. Lit agrupa las actualizaciones para maximizar el rendimiento y solo actualiza las partes del DOM que han cambiado.</p>
          <p>Para aprovechar el modelo funcional de Lit, el método render debe evitar cambiar el estado del componente o producir efectos secundarios, usar solo las propiedades del componente como entrada y devolver siempre el mismo resultado para los mismos valores de propiedad.</p>
          <a href="https://lit.dev/docs/components/rendering/" target="_blank">2.3.3 Leer más sobre renderizado en Lit</a>
        </section>
        <section id="componentes-propiedades-reactivas">
          <h4>2.3.4 Propiedades Reactivas</h4>
          <p>Las propiedades reactivas en Lit permiten que los componentes reciban datos y almacenen su estado como propiedades de clase. Cuando una propiedad reactiva cambia, Lit programa una actualización y vuelve a renderizar el componente. Además, estas propiedades pueden estar asociadas a atributos HTML, permitiendo la sincronización entre el estado del componente y el marcado.</p>
          <p>Lit gestiona automáticamente los getters y setters de cada propiedad reactiva. Por defecto, cada propiedad reactiva tiene un atributo observado correspondiente, y el valor de la propiedad se actualiza cuando el atributo cambia. También es posible reflejar el valor de la propiedad de vuelta al atributo.</p>
          <p>Las propiedades reactivas pueden declararse usando decoradores o el campo estático properties. Se pueden configurar opciones como el tipo, la conversión personalizada, la reflexión en atributos, el control de cambios y si la propiedad es pública o interna (estado interno).</p>
          <p>El estado interno reactivo funciona igual que las propiedades reactivas públicas, pero no está asociado a ningún atributo y no debe ser accedido desde fuera del componente. Se recomienda marcar estas propiedades como privadas o protegidas.</p>
          <p>Para evitar problemas con los campos de clase y la reactividad, es importante seguir las recomendaciones de la documentación, especialmente al usar TypeScript o Babel.</p>
          <a href="https://lit.dev/docs/components/properties/" target="_blank">2.3.4 Leer más sobre propiedades reactivas en Lit</a>
        </section>
        <section id="componentes-estilos">
          <h4>2.3.5 Estilos</h4>
          <p>Las plantillas de los componentes Lit se renderizan en el shadow root, por lo que los estilos definidos en el componente solo afectan a los elementos dentro de ese shadow root. El encapsulamiento de estilos que proporciona el Shadow DOM evita que los estilos del componente afecten a otros elementos de la página y viceversa.</p>
          <p>Los estilos se definen normalmente en el campo estático styles usando la función css. Esto proporciona el mejor rendimiento y asegura que los estilos estén correctamente encapsulados. Se pueden definir estilos como un único template literal o como un array para heredar o compartir estilos entre componentes.</p>
          <p>También es posible definir estilos dentro de la plantilla usando un elemento &lt;style&gt;, aunque esto solo se recomienda para casos donde se necesiten estilos personalizados por instancia.</p>
          <p>Para personalizar estilos de forma dinámica, se pueden usar variables CSS (custom properties) y los selectores :host y :host(). Además, Lit ofrece directivas como classMap y styleMap para aplicar clases y estilos dinámicos en la plantilla.</p>
          <p>El uso de CSS custom properties facilita la creación de componentes tematizables y la personalización de estilos desde fuera del componente.</p>
          <a href="https://lit.dev/docs/components/styles/" target="_blank">2.3.5 Leer más sobre estilos en Lit</a>
        </section>
        <section id="componentes-ciclo-vida">
          <h4>2.3.6 Ciclo de Vida</h4>
          <p>Los componentes Lit utilizan los métodos estándar del ciclo de vida de los custom elements, como constructor, connectedCallback, disconnectedCallback, attributeChangedCallback y adoptedCallback. Además, Lit introduce un ciclo de actualización reactivo que renderiza los cambios en el DOM cuando cambian las propiedades reactivas.</p>
          <p>El ciclo de vida estándar permite inicializar el componente, reaccionar a su inserción o eliminación del DOM, y responder a cambios en atributos. Es importante llamar a las implementaciones de super en estos métodos para mantener la funcionalidad de Lit.</p>
          <p>El ciclo de actualización reactivo se activa cuando cambia una propiedad reactiva o se llama explícitamente a requestUpdate. Lit agrupa los cambios y realiza las actualizaciones de forma asíncrona para optimizar el rendimiento.</p>
          <p>Lit proporciona métodos adicionales como shouldUpdate, willUpdate, update, firstUpdated, updated y getUpdateComplete para personalizar y controlar el ciclo de actualización y reaccionar a los cambios en el componente.</p>
          <a href="https://lit.dev/docs/components/lifecycle/" target="_blank">2.3.6 Leer más sobre el ciclo de vida en Lit</a>
        </section>
        <section id="componentes-shadow-dom">
          <h4>2.3.7 Shadow DOM</h4>
          <p>Lit utiliza Shadow DOM para encapsular el DOM interno de los componentes. El Shadow DOM permite añadir un árbol DOM aislado y encapsulado a un elemento, lo que proporciona interoperabilidad y evita que scripts o estilos globales afecten al componente.</p>
          <p>El Shadow DOM ofrece tres beneficios principales: aislamiento del DOM (los selectores globales no afectan al interior del componente), encapsulamiento de estilos (los estilos definidos en el componente no afectan al resto de la página) y composición (el shadow root contiene el DOM interno separado de los hijos del componente).</p>
          <p>Por defecto, Lit renderiza los componentes en un shadow root abierto. Es posible personalizar el render root o acceder a nodos internos usando this.renderRoot.querySelector(). También se pueden usar decoradores como @query, @queryAll y @queryAsync para acceder a nodos internos de forma más sencilla.</p>
          <p>Para renderizar hijos del componente, se deben usar elementos &lt;slot&gt; en la plantilla, que actúan como puntos de inserción para los nodos hijos.</p>
          <a href="https://lit.dev/docs/components/shadow-dom/" target="_blank">2.3.7 Leer más sobre Shadow DOM en Lit</a>
        </section>
        <section id="componentes-eventos">
          <h4>2.3.8 Eventos</h4>
          <p>Los eventos son la forma estándar en la que los elementos comunican cambios, normalmente como resultado de la interacción del usuario. Además de los eventos estándar, los componentes Lit pueden emitir eventos personalizados para comunicar cambios o acciones específicas.</p>
          <p>Lit permite escuchar eventos tanto de forma imperativa usando addEventListener como de forma declarativa en la plantilla mediante la sintaxis @evento. Los listeners declarativos se añaden automáticamente al renderizar la plantilla y están ligados al contexto del componente.</p>
          <p>Se pueden personalizar las opciones de los listeners usando el decorador @eventOptions. También es posible escuchar eventos en elementos hijos, en el propio componente o en el shadow root, y aprovechar la delegación de eventos para optimizar el rendimiento.</p>
          <p>Para emitir eventos personalizados, se utiliza dispatchEvent con instancias de CustomEvent. Es importante configurar correctamente las opciones de burbujeo y composición para que los eventos puedan atravesar el shadow DOM y ser escuchados desde el exterior.</p>
          <p>Lit facilita la comunicación entre componentes y la integración con otras partes de la aplicación mediante el uso de eventos estándar y personalizados.</p>
          <a href="https://lit.dev/docs/components/events/" target="_blank">2.3.8 Leer más sobre eventos en Lit</a>
        </section>
        <section id="componentes-decoradores">
          <h4>2.3.9 Decoradores</h4>
          <p>Los decoradores son funciones que permiten anotar y modificar el comportamiento de clases de forma declarativa. Lit proporciona decoradores opcionales para registrar elementos, definir propiedades reactivas, consultar nodos del DOM interno o configurar opciones de eventos.</p>
          <p>Algunos decoradores integrados de Lit son: @customElement para registrar un custom element, @property y @state para definir propiedades reactivas, y @query, @queryAll, @queryAsync, @queryAssignedElements y @queryAssignedNodes para acceder a nodos del shadow DOM. El decorador @eventOptions permite configurar opciones avanzadas en listeners de eventos.</p>
          <p>Los decoradores pueden importarse desde 'lit/decorators.js' o individualmente. Para usarlos es necesario compilar el código con TypeScript o Babel, ya que los navegadores aún no los soportan de forma nativa. Se recomienda usar decoradores experimentales de TypeScript para un mejor resultado en la compilación.</p>
          <p>Lit soporta tanto la versión experimental como la estándar de la propuesta de decoradores en JavaScript. La versión estándar requiere el uso de la palabra clave accessor en las propiedades decoradas.</p>
          <a href="https://lit.dev/docs/components/decorators/" target="_blank">2.3.9 Leer más sobre decoradores en Lit</a>
        </section>
        <section id="plantillas">
          <h3>2.4 Plantillas</h3>
        </section>
        <section id="expresiones-plantillas">
          <h4>2.4.1 Expresiones en plantillas</h4>
          <p>Las plantillas de Lit pueden incluir valores dinámicos llamados expresiones. Una expresión puede ser cualquier expresión de JavaScript y se evalúa cada vez que se renderiza la plantilla. El resultado de la expresión se inserta en la plantilla cuando se llama al método render.</p>
          <p>Las expresiones pueden colocarse en ubicaciones específicas de la plantilla y su interpretación depende de dónde aparecen. Por ejemplo, dentro del contenido de un elemento, la expresión añade nodos hijos o texto; en atributos, modifica el valor del atributo; en propiedades, asigna valores a propiedades del elemento; y en listeners, asocia funciones a eventos.</p>
          <p>Las expresiones pueden aceptar valores primitivos, objetos TemplateResult, nodos DOM, arrays o valores especiales como nothing y noChange. Además, pueden usarse directivas para personalizar el procesamiento y renderizado de la expresión.</p>
          <p>Existen ubicaciones no válidas para expresiones, como nombres de etiquetas o atributos, contenido de elementos template, textarea o contenteditable, y dentro de comentarios HTML.</p>
          <a href="https://lit.dev/docs/templates/expressions/" target="_blank">2.4.1 Leer más sobre expresiones en plantillas en Lit</a>
        </section>
        <section id="condicionales-plantillas">
          <h4>2.4.2 Condicionales</h4>
          <p>Lit permite usar expresiones condicionales estándar de JavaScript en las plantillas, como el operador ternario, llamadas a funciones, y sentencias if o switch fuera de la plantilla para decidir qué contenido renderizar.</p>
          <p>El operador ternario es útil para condicionales en línea, mientras que las sentencias if permiten calcular valores o plantillas antes de insertarlos en la plantilla principal. También se pueden delegar estas decisiones a funciones auxiliares.</p>
          <p>Para evitar renderizar contenido, se pueden usar los valores undefined, null, la cadena vacía o el valor especial nothing de Lit, que no renderizan ningún nodo. En atributos, nothing elimina el atributo del elemento.</p>
          <p>Si se alterna entre plantillas grandes y complejas, se puede usar la directiva cache para mejorar el rendimiento y evitar recrear el DOM innecesariamente.</p>
          <a href="https://lit.dev/docs/templates/conditionals/" target="_blank">2.4.2 Leer más sobre condicionales en plantillas en Lit</a>
        </section>
        <section id="listas-plantillas">
          <h4>2.4.3 Listas</h4>
          <p>Para renderizar listas en Lit se pueden usar las construcciones estándar de JavaScript, como map o bucles, para crear plantillas repetidas. Cuando una expresión en la plantilla devuelve un array o iterable, Lit renderiza todos los elementos de ese array.</p>
          <p>El método más común es usar map para transformar los datos en una lista de plantillas. También se pueden construir arrays de plantillas usando bucles y pasarlos a la plantilla principal.</p>
          <p>Para listas grandes o que cambian de orden, la directiva repeat permite actualizar el DOM de forma más eficiente, reordenando los nodos existentes en vez de recrearlos. repeat requiere una función clave única para cada elemento.</p>
          <p>Se recomienda usar map o bucles para la mayoría de los casos, y recurrir a repeat cuando el rendimiento sea crítico o los nodos tengan estado propio.</p>
          <a href="https://lit.dev/docs/templates/lists/" target="_blank">2.4.3 Leer más sobre listas en plantillas en Lit</a>
        </section>
        <section id="directivas-plantillas">
          <h4>2.4.4 Directivas</h4>
          <p>Las directivas en Lit son funciones que permiten personalizar cómo se renderiza una expresión en la plantilla. Lit incluye varias directivas integradas para cubrir necesidades comunes como aplicar clases o estilos dinámicos, gestionar listas, condicionales, caché, valores especiales, referencias a nodos, renderizado asíncrono y más.</p>
          <p>Cada directiva se importa como un módulo independiente, por lo que solo se incluye en el bundle lo que realmente se usa. Algunas directivas destacadas son: classMap, styleMap, repeat, when, choose, cache, guard, live, unsafeHTML, unsafeSVG, ref, until, asyncAppend, asyncReplace, ifDefined, keyed, templateContent y map.</p>
          <p>Las directivas pueden usarse en diferentes posiciones de la plantilla según su propósito: en atributos, propiedades, eventos, hijos o elementos. También es posible crear directivas personalizadas para necesidades específicas.</p>
          <a href="https://lit.dev/docs/templates/directives/" target="_blank">2.4.4 Leer más sobre directivas en Lit</a>
        </section>
        <section id="directivas-personalizadas-plantillas">
          <h4>2.4.5 Directivas Personalizadas</h4>
          <p>Las directivas personalizadas en Lit permiten extender y personalizar cómo se renderiza una expresión en la plantilla. Se pueden crear como funciones simples que devuelven un valor a renderizar, o como clases que extienden de Directive para acceder al DOM, mantener estado entre renders, actualizar el DOM de forma asíncrona o limpiar recursos cuando la directiva se desconecta.</p>
          <p>Las directivas de clase permiten lógica avanzada, como acceder a partes específicas del DOM, persistir estado, o reaccionar a la conexión y desconexión del componente. Para crearlas, se implementa una clase que extiende Directive y se pasa a la función directive para obtener la función que se usará en la plantilla.</p>
          <p>Las directivas pueden limitarse a ciertos tipos de expresiones (atributos, hijos, propiedades, etc.) y pueden devolver noChange para indicar que no hay cambios que renderizar. También existen directivas asíncronas que extienden AsyncDirective para actualizar el DOM fuera del ciclo de renderizado normal.</p>
          <a href="https://lit.dev/docs/templates/custom-directives/" target="_blank">2.4.5 Leer más sobre directivas personalizadas en Lit</a>
        </section>
        <section id="composicion">
          <h3>2.5 Composición</h3>
        </section>
        <section id="composicion-introduccion">
          <h4>2.5.1 Introducción</h4>
          <p>La composición es una estrategia para gestionar la complejidad y organizar el código en piezas reutilizables. Lit ofrece varias opciones para la composición y la reutilización de código: composición de componentes, controladores reactivos y mixins de clase.</p>
          <p>La composición de componentes consiste en ensamblar componentes complejos a partir de componentes más simples, usando subcomponentes en la plantilla y comunicándose mediante propiedades y eventos.</p>
          <p>Los controladores reactivos permiten encapsular estado y comportamiento relacionado con una funcionalidad en una unidad separada, que puede engancharse al ciclo de vida del componente.</p>
          <p>Los mixins de clase permiten escribir definiciones parciales reutilizables y mezclarlas en la cadena de herencia de un componente.</p>
          <p>En general, se recomienda usar controladores salvo que se necesite añadir API pública al componente o un acceso muy granular al ciclo de vida.</p>
          <a href="https://lit.dev/docs/composition/overview/" target="_blank">2.5.1 Leer más sobre composición en Lit</a>
        </section>
        <section id="composicion-componentes">
          <h4>2.5.2 Composición de Componentes</h4>
          <p>La forma más común de gestionar la complejidad y dividir el código en Lit es la composición de componentes: construir un componente grande y complejo a partir de otros más pequeños y simples. Esto permite aislar la complejidad en componentes específicos y luego componerlos para crear el diseño global.</p>
          <p>Un buen componente suele tener su propio estado, plantilla, un API bien definido y se utiliza en más de un lugar. Los controles reutilizables como botones, inputs o menús, así como piezas de UI más complejas, son buenos candidatos para ser componentes.</p>
          <p>La comunicación entre componentes sigue el modelo de la plataforma web: las propiedades se pasan hacia abajo (del componente padre al hijo) y los eventos se envían hacia arriba (del hijo al padre). Así, los datos fluyen de padres a hijos mediante propiedades, y los cambios o acciones se notifican hacia arriba mediante eventos.</p>
          <p>Para comunicar datos entre componentes que no son padre e hijo directo, se puede usar el patrón mediador, donde un componente intermedio gestiona los eventos y actualiza el estado de los componentes implicados.</p>
          <p>Además, los componentes pueden aceptar nodos hijos (light DOM) que se renderizan mediante slots, permitiendo una mayor flexibilidad y personalización.</p>
          <a href="https://lit.dev/docs/composition/component-composition/" target="_blank">2.5.2 Leer más sobre composición de componentes en Lit</a>
        </section>
        <section id="composicion-mixins">
          <h4>2.5.3 Mixins</h4>
          <p>Los mixins de clase son un patrón estándar de JavaScript para compartir código entre clases mediante la herencia. A diferencia de los controladores reactivos, que implementan una composición "has-a", los mixins implementan una composición "is-a", haciendo que la clase que los usa sea una instancia del comportamiento compartido.</p>
          <p>Un mixin es una función que recibe una clase base y devuelve una subclase extendida con nuevos métodos, propiedades o sobreescrituras de callbacks del ciclo de vida. Los mixins pueden añadir API pública, propiedades reactivas, estilos o lógica adicional, y pueden usarse tanto en JavaScript como en TypeScript.</p>
          <p>En TypeScript, es importante tipar correctamente el superClass y la subclase resultante, y aplicar los decoradores en una declaración de clase, no en una expresión. Si el mixin añade nueva API pública o protegida, se recomienda definir una interfaz para el mixin y castear el tipo de retorno.</p>
          <p>Un mixin puede sobreescribir métodos del ciclo de vida estándar y de actualización reactiva, y debe llamar siempre a super para mantener la funcionalidad de la clase base.</p>
          <a href="https://lit.dev/docs/composition/mixins/" target="_blank">2.5.3 Leer más sobre mixins en Lit</a>
        </section>
        <section id="composicion-controladores">
          <h4>2.5.4 Controladores</h4>
          <p>Los controladores reactivos son objetos que pueden engancharse al ciclo de actualización de un componente Lit. Permiten encapsular estado y comportamiento relacionado con una funcionalidad, haciéndolo reutilizable en varios componentes.</p>
          <p>Un controlador se asocia a un componente host y puede acceder a su ciclo de vida, solicitar actualizaciones y exponer API para ser usada en el método render del host. Los controladores son útiles para gestionar eventos globales, tareas asíncronas, animaciones o conectar el componente con recursos externos.</p>
          <p>Para usar un controlador, se crea una instancia y se registra en el host con addController. El controlador puede implementar callbacks como hostConnected y hostDisconnected para reaccionar a los cambios de estado del host.</p>
          <p>Los controladores pueden componerse entre sí y combinarse con directivas para lógica avanzada. Son una alternativa a los mixins, ya que no modifican la cadena de prototipos y permiten usar varias instancias en un mismo componente.</p>
          <a href="https://lit.dev/docs/composition/controllers/" target="_blank">2.5.4 Leer más sobre controladores en Lit</a>
        </section>
        <section id="gestion-estado">
          <h3>2.6 Gestión del Estado</h3>
        </section>
        <section id="contexto-estado">
          <h4>2.6.1 Contexto</h4>
          <p>Contexto es una forma de hacer datos accesibles a subárboles completos de componentes sin tener que pasar propiedades manualmente a cada uno. Los datos están disponibles de forma contextual, de modo que los elementos intermedios entre el proveedor y el consumidor no necesitan conocerlos.</p>
          <p>El sistema de contexto de Lit, disponible en el paquete @lit/context, es útil para datos globales como el usuario actual, el tema de la interfaz o servicios compartidos. Permite que los componentes consuman datos sin acoplamiento directo y sin necesidad de propagar propiedades por toda la jerarquía.</p>
          <p>El contexto se basa en el Context Community Protocol, lo que permite interoperabilidad entre componentes Lit y otros frameworks. Los proveedores usan un objeto de contexto y exponen datos mediante decoradores o controladores. Los consumidores pueden acceder a los datos usando el decorador @consume o el controlador ContextConsumer.</p>
          <p>El contexto es ideal para servicios globales, temas, datos de usuario, o cualquier información que deba estar disponible en muchos componentes sin acoplamiento directo.</p>
          <a href="https://lit.dev/docs/data/context/" target="_blank">2.6.1 Leer más sobre contexto en Lit</a>
        </section>
        <section id="tareas-asincronas-estado">
          <h4>2.6.2 Tareas Asíncronas</h4>
          <p>Las tareas asíncronas en Lit se gestionan fácilmente usando el controlador Task del paquete @lit/task. Task permite ejecutar funciones asíncronas y gestionar su estado (inicial, pendiente, completada, error) de forma reactiva, actualizando el componente automáticamente cuando cambia el estado de la tarea.</p>
          <p>Se crea una instancia de Task en el componente, indicando la función asíncrona a ejecutar y los argumentos que debe recibir. Task puede ejecutarse automáticamente cuando cambian los argumentos o manualmente llamando a run().</p>
          <p>El método render de Task permite mostrar diferentes plantillas según el estado de la tarea: inicial, cargando, completada o error. Task también gestiona la cancelación de tareas pendientes y el encadenamiento de tareas.</p>
          <p>Este patrón es útil para cargar datos de APIs, gestionar operaciones asíncronas y mostrar el estado de la carga en la interfaz de usuario de forma declarativa y reactiva.</p>
          <a href="https://lit.dev/docs/data/task/" target="_blank">2.6.2 Leer más sobre tareas asíncronas en Lit</a>
        </section>
        <section id="senales-estado">
          <h4>2.6.3 Señales</h4>
          <p>Las señales son estructuras de datos para gestionar estado observable. Una señal puede contener un valor único o un valor calculado que depende de otras señales. Son observables, por lo que los consumidores pueden ser notificados cuando cambian, y los valores calculados se actualizan automáticamente si cambian sus dependencias.</p>
          <p>Las señales son útiles para modelar y gestionar estado compartido y observable entre muchos componentes. Cuando una señal se actualiza, todos los componentes que la usan o dependen de ella se actualizan automáticamente.</p>
          <p>Lit integra señales a través del paquete experimental @lit-labs/signals, compatible con la propuesta TC39 para estandarizar señales en JavaScript. Se pueden usar señales para lograr reactividad granular, optimizar actualizaciones y facilitar la interoperabilidad entre librerías y frameworks.</p>
          <p>Lit ofrece utilidades como SignalWatcher, la directiva watch y una versión especial de html para plantillas que usan señales. Estas herramientas permiten que los componentes reaccionen automáticamente a los cambios de las señales y optimicen el renderizado.</p>
          <a href="https://lit.dev/docs/data/signals/" target="_blank">2.6.3 Leer más sobre señales en Lit</a>
        </section>
        <section id="herramientas-flujos">
          <h3>2.7 Herramientas y Flujos de Trabajo</h3>
        </section>
        <section id="herramientas-requisitos">
          <h4>2.7.1 Requisitos</h4>
          <p>Lit se publica como ES2021 y utiliza importaciones con bare module specifiers, además de APIs modernas como &lt;template&gt;, custom elements y shadow DOM. Estas características están soportadas por los navegadores modernos y las herramientas populares de desarrollo.</p>
          <p>Para usar Lit en navegadores modernos, solo es necesario transformar los bare module specifiers a URLs compatibles. Herramientas como Webpack y Rollup lo gestionan automáticamente. Para navegadores antiguos, se requieren compilación adicional y polyfills.</p>
          <p>Lit 3 no es compatible con navegadores legacy como Internet Explorer 11 o Edge clásico. Si necesitas soporte para estos navegadores, se recomienda usar Lit 2 con los polyfills y configuraciones adecuadas.</p>
          <a href="https://lit.dev/docs/tools/requirements/" target="_blank">2.7.1 Leer más sobre requisitos en Lit</a>
        </section>
        <section id="herramientas-desarrollo">
          <h4>2.7.2 Desarrollo</h4>
          <p>Durante el desarrollo con Lit, se recomienda usar un servidor de desarrollo para previsualizar el código sin necesidad de un paso de build, TypeScript para tipado, un linter para detectar errores, un formateador de código y plugins de IDE específicos para Lit.</p>
          <p>Lit publica builds de desarrollo y producción. El build de desarrollo incluye advertencias y comprobaciones adicionales, mientras que el de producción está optimizado y minificado. Es importante asegurarse de usar el build adecuado según el entorno.</p>
          <p>Se recomienda usar herramientas como Web Dev Server, Rollup, Vite o Webpack para gestionar los módulos y las builds. Para TypeScript, basta con habilitar un nivel moderno de JavaScript y los tipos DOM, y opcionalmente los decoradores experimentales.</p>
          <p>Para mejorar la experiencia, existen plugins de IDE como lit-plugin y ts-lit-plugin, y reglas de ESLint específicas para Lit. El formateo de código puede hacerse con Prettier, Beautifier o Clang.</p>
          <a href="https://lit.dev/docs/tools/development/" target="_blank">2.7.2 Leer más sobre desarrollo en Lit</a>
        </section>
        <section id="herramientas-pruebas">
          <h4>2.7.3 Pruebas de Software</h4>
          <p>Lit es compatible con la mayoría de frameworks de testing modernos como Jest, Karma, Mocha, Jasmine, WebdriverIO y Web Test Runner. Se recomienda realizar las pruebas en un entorno de navegador para reflejar el comportamiento real de los componentes.</p>
          <p>El entorno de pruebas debe soportar JavaScript moderno y módulos ES. Para navegadores antiguos, es necesario cargar polyfills adicionales. Web Test Runner y WebdriverIO son opciones recomendadas para pruebas de componentes Lit, ya que soportan custom elements y shadow DOM.</p>
          <p>Es importante limpiar los componentes del DOM tras cada prueba y asegurarse de que el entorno de pruebas está correctamente configurado para los módulos y polyfills necesarios.</p>
          <a href="https://lit.dev/docs/tools/testing/" target="_blank">2.7.3 Leer más sobre pruebas de software en Lit</a>
        </section>
        <section id="herramientas-publicacion">
          <h4>2.7.4 Publicación</h4>
          <p>Para publicar un componente Lit en npm, configura correctamente el package.json (type, main, module) y proporciona un README. Publica el código como módulos ES2021, sin bundle ni minificación, y usa extensiones de archivo en los imports para compatibilidad futura con import maps.</p>
          <p>Compila el código TypeScript o Babel a ES2021 si usas características no estándar. Publica los archivos de tipado (.d.ts) y añade la entrada correspondiente en package.json. No incluyas polyfills en los módulos publicados; estos deben ser responsabilidad de la aplicación.</p>
          <p>Registra siempre el custom element en el mismo módulo donde se declara la clase, y exporta la clase para permitir la extensión y el uso en registries con scope en el futuro. Consulta la Gold Standard Checklist para mejores prácticas adicionales.</p>
          <a href="https://lit.dev/docs/tools/publishing/" target="_blank">2.7.4 Leer más sobre publicación en Lit</a>
        </section>
        <section id="herramientas-produccion">
          <h4>2.7.5 Producción</h4>
          <p>Para preparar una aplicación Lit para producción, se recomienda usar herramientas como Rollup o Webpack para agrupar los módulos, minificar el código JavaScript (por ejemplo, con Terser), y servir solo código moderno a navegadores modernos. Es importante aplicar compresión en el servidor y usar hash en los assets para facilitar la invalidación de caché.</p>
          <p>Las plantillas de Lit están en literales de template string, por lo que conviene usar plugins como rollup-plugin-minify-html-literals para minificar el HTML dentro de los templates. Se recomienda no hacer bundle ni minificar los componentes antes de publicarlos en npm, pero sí hacerlo al construir la aplicación final.</p>
          <p>La documentación oficial proporciona ejemplos de configuración de Rollup y una lista de plugins recomendados para optimizar el build de producción.</p>
          <a href="https://lit.dev/docs/tools/production/" target="_blank">2.7.5 Leer más sobre producción en Lit</a>
        </section>
        <section id="herramientas-plantillas-inicio">
          <h4>2.7.6 Plantillas de Inicio</h4>
          <p>Las plantillas de inicio de Lit son proyectos base para crear componentes reutilizables y publicables. Hay plantillas tanto para JavaScript como para TypeScript, e incluyen herramientas recomendadas como servidor de desarrollo, ESLint, lit-analyzer, Web Test Runner y documentación estática.</p>
          <p>Para empezar, descarga la plantilla desde GitHub, instala las dependencias y ejecuta el servidor de desarrollo. Puedes editar el componente principal, renombrarlo y personalizarlo según tus necesidades. Las plantillas están preparadas para buenas prácticas de desarrollo, pruebas y publicación.</p>
          <p>Como alternativa, el proyecto Open WC ofrece un generador de proyectos para componentes web con Lit, que permite personalizar la configuración inicial mediante un asistente interactivo.</p>
          <a href="https://lit.dev/docs/tools/starter-kits/" target="_blank">2.7.6 Leer más sobre plantillas de inicio en Lit</a>
        </section>
        <section id="ssr">
          <h3>2.8 Renderizado en el Servidor</h3>
        </section>
        <section id="ssr-introduccion">
          <h4>2.8.1 Introducción al Renderizado en el Servidor</h4>
          <p>El renderizado en el servidor (SSR) es una técnica para generar y servir el HTML de los componentes, incluyendo shadow DOM y estilos, antes de que se cargue y ejecute el JavaScript. SSR mejora el rendimiento, la indexación SEO y la robustez, ya que el HTML estático se muestra incluso si el JavaScript falla o está deshabilitado.</p>
          <p>Lit soporta SSR mediante la librería Lit SSR, que permite renderizar componentes y plantillas Lit a HTML estático en entornos Node sin emular completamente el DOM del navegador. Esto permite un tiempo de respuesta rápido y soporte para streaming.</p>
          <p>Existen integraciones para usar Lit SSR fácilmente en frameworks como Eleventy, Astro, Rocket, Next.js y Nuxt 3.</p>
          <a href="https://lit.dev/docs/ssr/overview/" target="_blank">2.8.1 Leer más sobre SSR en Lit</a>
        </section>
        <section id="ssr-uso-servidor">
          <h4>2.8.2 Uso en el Servidor</h4>
          <p>Para renderizar plantillas Lit en el servidor se utiliza la función render del paquete @lit-labs/ssr. Esta función recibe una plantilla Lit y devuelve un RenderResult, que puede convertirse en HTML para enviar al cliente.</p>
          <p>El resultado puede manejarse como un stream usando RenderResultReadable (ideal para servidores como Koa) o como una cadena usando collectResult() (asíncrono) o collectResultSync() (síncrono). Es posible renderizar en el contexto global o en un contexto VM aislado para separar registros de custom elements entre peticiones.</p>
          <p>Se recomienda importar y registrar los custom elements en el servidor antes de renderizarlos. Existen utilidades para gestionar el resultado del renderizado y opciones avanzadas como deferHydration y elementRenderers.</p>
          <a href="https://lit.dev/docs/ssr/server-usage/" target="_blank">2.8.2 Leer más sobre uso en el servidor con SSR en Lit</a>
        </section>
        <section id="ssr-uso-cliente">
          <h4>2.8.3 Uso en el Cliente</h4>
          <p>Tras renderizar con SSR, el HTML estático se muestra en el navegador. Para que la página sea interactiva, es necesario hidratar las plantillas o componentes Lit en el cliente. Para plantillas Lit, se usa la función hydrate del paquete @lit-labs/ssr-client, pasando la misma plantilla y datos usados en el servidor.</p>
          <p>Para componentes Lit, basta con cargar los módulos que definen los custom elements y el soporte de hidratación de LitElement mediante @lit-labs/ssr-client/lit-element-hydrate-support.js, que debe cargarse antes de cualquier importación de lit. Esto permite que los componentes se activen y sean interactivos tras el renderizado inicial.</p>
          <p>Si el navegador no soporta Declarative Shadow DOM, se puede usar el polyfill template-shadowroot para asegurar la compatibilidad. Es recomendable ocultar el body hasta que el polyfill esté cargado para evitar parpadeos o cambios de layout.</p>
          <a href="https://lit.dev/docs/ssr/client-usage/" target="_blank">2.8.3 Leer más sobre uso en el cliente con SSR en Lit</a>
        </section>
        <section id="ssr-autoria">
          <h4>2.8.4 Autoría</h4>
          <p>Para que los componentes sean compatibles con SSR en Lit, hay que evitar el uso de APIs del navegador en el servidor. Las operaciones imperativas sobre el DOM deben hacerse solo en callbacks que se ejecutan en el cliente. Usa condicionales o el helper isServer para diferenciar entre entorno servidor y cliente.</p>
          <p>Lit SSR solo ejecuta algunos métodos del ciclo de vida en el servidor, como constructor, hasChanged, willUpdate y render. El resto, como connectedCallback, updated o métodos de ReactiveController, solo se ejecutan en el cliente tras la hidratación.</p>
          <p>No incluyas Lit en el bundle de tus componentes publicados, para que se resuelvan correctamente los módulos según el entorno. Si usas bundlers, marca Lit como dependencia externa. Considera usar exports condicionales en package.json para diferenciar entre Node y navegador.</p>
          <p>Las directivas y controladores asíncronos no funcionan en SSR, así que realiza el trabajo asíncrono antes de renderizar la plantilla en el servidor y pasa los datos como propiedades o atributos.</p>
          <a href="https://lit.dev/docs/ssr/authoring/" target="_blank">2.8.4 Leer más sobre autoría SSR en Lit</a>
        </section>
        <section id="ssr-dom-emulacion">
          <h4>2.8.5 Emulación del DOM</h4>
          <p>Cuando Lit se ejecuta en Node para SSR, importa automáticamente un conjunto mínimo de shims de DOM y define el global customElements. Solo se implementan las interfaces mínimas necesarias para definir y registrar componentes, como algunas clases clave del DOM y un CustomElementRegistry funcional.</p>
          <p>Las implementaciones cubren métodos y propiedades esenciales como attributes, setAttribute, removeAttribute, hasAttribute, getAttribute, attachShadow y shadowRoot (con ciertas limitaciones). HTMLElement es una clase vacía y el shadowRoot simulado solo devuelve {host: this} si se usa attachShadow con modo 'open'.</p>
          <p>Esto permite que los componentes Lit se puedan renderizar en el servidor sin requerir un DOM completo, facilitando la compatibilidad y el rendimiento en SSR.</p>
          <a href="https://lit.dev/docs/ssr/dom-emulation/" target="_blank">2.8.5 Leer más sobre emulación del DOM en Lit SSR</a>
        </section>
        <section id="lit-vs-stencil">
          <h2>3. Lit vs Stencil</h2>
          <p>Lit y Stencil son dos soluciones modernas para crear Web Components, pero tienen enfoques y objetivos diferentes. A continuación se muestra una tabla comparativa y una explicación de cuándo elegir cada uno:</p>
          <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;">
            <thead>
              <tr>
                <th style="border:1px solid #ccc;padding:0.5rem;background:#f5f5f5;">Característica</th>
                <th style="border:1px solid #ccc;padding:0.5rem;background:#f5f5f5;">Lit</th>
                <th style="border:1px solid #ccc;padding:0.5rem;background:#f5f5f5;">Stencil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Filosofía</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Simplicidad, ligereza, enfoque en los estándares web</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Tooling avanzado, generación de design systems, integración multiplataforma</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Tamaño del bundle</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Muy pequeño (~5KB)</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Mayor, depende de las features usadas</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Curva de aprendizaje</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Baja</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Media</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Reactividad</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Propiedades reactivas simples</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Sistema de reactividad propio, inspirado en React</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Integración con frameworks</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Manual, wrappers opcionales</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Automática, genera bindings para Angular, React, Vue, etc.</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Tooling</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Básico, centrado en el desarrollo de componentes</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">CLI avanzada, generación de documentación, testing, lazy loading, prerendering</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">SSR (Server Side Rendering)</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Soporte con librerías oficiales</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Soporte integrado</td>
              </tr>
              <tr>
                <td style="border:1px solid #ccc;padding:0.5rem;">Uso recomendado</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Componentes ligeros, integración progresiva, sistemas de diseño simples</td>
                <td style="border:1px solid #ccc;padding:0.5rem;">Librerías de componentes para grandes organizaciones, design systems complejos, integración multiplataforma</td>
              </tr>
            </tbody>
          </table>
          <h3>¿Cuándo elegir Lit?</h3>
          <ul>
            <li>Cuando buscas simplicidad, bundles pequeños y máxima compatibilidad con los estándares web.</li>
            <li>Si quieres integrar componentes en cualquier stack o migrar progresivamente una aplicación.</li>
            <li>Ideal para proyectos pequeños, medianos o sistemas de diseño que no requieran tooling avanzado.</li>
          </ul>
          <h3>¿Cuándo elegir Stencil?</h3>
          <ul>
            <li>Cuando necesitas tooling avanzado, generación automática de documentación, testing y lazy loading.</li>
            <li>Si tu objetivo es crear librerías de componentes para ser usadas en múltiples frameworks (Angular, React, Vue, etc.).</li>
            <li>Recomendado para grandes organizaciones o design systems complejos.</li>
          </ul>
        </section>
      </main>
    `;
  }
}
