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
          <h2>Introducción a Web Components</h2>
          <p>Web Components es un conjunto de tecnologías estándar que permite crear elementos personalizados y reutilizables en la web. Incluye Custom Elements, Shadow DOM y HTML Templates. Permiten encapsular funcionalidad, estilos y estructura, facilitando la interoperabilidad entre frameworks y la reutilización de componentes en cualquier proyecto web.</p>
          <ul>
            <li>Custom Elements: define nuevos elementos HTML con comportamiento propio.</li>
            <li>Shadow DOM: encapsula el DOM y los estilos de un componente.</li>
            <li>HTML Templates: define fragmentos de HTML reutilizables y no renderizados hasta ser usados.</li>
          </ul>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components" target="_blank">Leer más en MDN</a>
        </section>
        <section id="custom-elements">
          <h3>Custom Elements</h3>
          <p>Permiten crear etiquetas HTML personalizadas. Se definen extendiendo HTMLElement y registrando el elemento en el navegador. Los custom elements disponen de callbacks de ciclo de vida que permiten reaccionar a su inserción, eliminación o cambios de atributos. Son la base para crear componentes reutilizables y encapsulados en cualquier aplicación web.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements" target="_blank">Leer más en MDN</a>
        </section>
        <section id="shadow-dom">
          <h3>Shadow DOM</h3>
          <p>El Shadow DOM encapsula el DOM y los estilos de un componente, evitando colisiones con el resto de la página. Permite definir estilos y estructura interna que no afectan ni son afectados por el exterior. El Shadow DOM puede ser abierto o cerrado, y proporciona aislamiento tanto a nivel de CSS como de JavaScript.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">Leer más en MDN</a>
        </section>
        <section id="html-template">
          <h3>HTML Template</h3>
          <p>La etiqueta template permite definir fragmentos de HTML que no se renderizan hasta ser clonados. Es útil para crear contenido dinámico y para la estructura interna de los Web Components, ya que permite separar la definición del contenido de su uso real en el DOM.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/template" target="_blank">Leer más en MDN</a>
        </section>
        <section id="lit">
          <h2>Lit</h2>
          <p>Lit es una librería ligera para crear componentes web rápidos y expresivos. Proporciona una clase base que simplifica la reactividad, el uso de plantillas declarativas y el encapsulamiento de estilos. Lit está diseñado para ser eficiente, fácil de aprender y compatible con los estándares web, permitiendo crear componentes reutilizables y compartibles en cualquier entorno.</p>
          <a href="https://lit.dev/docs/" target="_blank">Leer más en la documentación oficial de Lit</a>
        </section>
        <section id="que-es-lit">
          <h3>¿Qué es Lit?</h3>
          <p>Lit es una librería basada en Web Components que facilita la creación de interfaces modernas. Su núcleo es una clase base que ofrece estado reactivo, estilos encapsulados y un sistema de plantillas eficiente y expresivo. Lit se integra fácilmente con cualquier framework o aplicación, y permite crear componentes reutilizables y compartibles, promoviendo la interoperabilidad y la adopción progresiva.</p>
          <a href="https://lit.dev/docs/" target="_blank">Leer más en la documentación oficial de Lit</a>
        </section>
        <section id="primeros-pasos">
          <h3>Primeros pasos</h3>
          <p>Para empezar con Lit, se recomienda instalar el paquete desde el gestor de dependencias y configurar el entorno de desarrollo. Lit puede integrarse en proyectos nuevos o existentes, y dispone de recursos como playground online, tutoriales interactivos y kits de inicio para diferentes lenguajes y configuraciones. La comunidad y la documentación oficial ofrecen guías detalladas para cada escenario.</p>
          <a href="https://lit.dev/docs/getting-started/" target="_blank">Leer más sobre primeros pasos en Lit</a>
        </section>
        <section id="componentes">
          <h3>Componentes</h3>
          <p>Un componente en Lit es una clase que extiende la clase base de Lit. Define propiedades reactivas, métodos y una función de renderizado que retorna una plantilla declarativa. Los componentes pueden comunicarse mediante propiedades, eventos y slots, y pueden ser reutilizados en diferentes aplicaciones o proyectos.</p>
          <a href="https://lit.dev/docs/components/overview/" target="_blank">Leer más sobre componentes en Lit</a>
        </section>
        <section id="plantillas">
          <h3>Plantillas</h3>
          <p>Las plantillas en Lit se definen usando la función html y template literals de JavaScript. Permiten interpolar variables, componer la interfaz de usuario de forma declarativa y eficiente, y soportan expresiones, bucles y condicionales. Las plantillas son altamente expresivas y permiten construir interfaces complejas de manera sencilla.</p>
          <a href="https://lit.dev/docs/templates/overview/" target="_blank">Leer más sobre plantillas en Lit</a>
        </section>
        <section id="expresiones">
          <h3>Expresiones en plantillas</h3>
          <p>Las expresiones permiten insertar valores dinámicos en la plantilla. Se pueden usar en texto, atributos, propiedades, eventos y más. Las expresiones pueden ser cualquier valor de JavaScript, incluyendo variables, funciones, objetos o resultados de operaciones. Lit optimiza el renderizado para actualizar solo las partes de la plantilla que cambian.</p>
          <a href="https://lit.dev/docs/templates/expressions/" target="_blank">Leer más sobre expresiones en plantillas</a>
        </section>
        <section id="directivas">
          <h3>Directivas</h3>
          <p>Las directivas son funciones especiales que extienden la funcionalidad de las plantillas. Lit incluye directivas para renderizar listas, gestionar condicionales, aplicar clases y estilos dinámicos, renderizar HTML seguro o asíncrono, y más. Las directivas permiten adaptar el comportamiento del renderizado a necesidades avanzadas sin perder eficiencia.</p>
          <a href="https://lit.dev/docs/templates/directives/" target="_blank">Leer más sobre directivas en Lit</a>
        </section>
        <section id="organizacion-codigo">
          <h3>Organización del código</h3>
          <p>Lit fomenta la creación de componentes pequeños y reutilizables. Es recomendable organizar el código en módulos, separar lógica y presentación, y reutilizar componentes en diferentes proyectos. La modularidad facilita el mantenimiento, la escalabilidad y la colaboración en equipos de desarrollo.</p>
        </section>
        <section id="propiedades-reactivas">
          <h3>Propiedades reactivas</h3>
          <p>Las propiedades reactivas en Lit se definen con decoradores o en el campo estático de propiedades. Cuando cambian, el componente se vuelve a renderizar automáticamente. Se pueden reflejar en atributos, tener conversores personalizados y usar opciones avanzadas para controlar el ciclo de vida y la sincronización entre atributos y propiedades.</p>
          <a href="https://lit.dev/docs/components/properties/" target="_blank">Leer más sobre propiedades reactivas</a>
        </section>
        <section id="ciclo-vida">
          <h3>Ciclo de vida</h3>
          <p>Lit implementa el ciclo de vida estándar de los custom elements y añade callbacks específicos para controlar el renderizado y la actualización. Estos métodos permiten ejecutar lógica en diferentes fases, como la inicialización, la conexión al DOM, la actualización de propiedades, el renderizado y la limpieza de recursos. El ciclo de vida es fundamental para gestionar el estado y la interacción con el entorno.</p>
          <a href="https://lit.dev/docs/components/lifecycle/" target="_blank">Leer más sobre el ciclo de vida en Lit</a>
        </section>
        <section id="eventos">
          <h3>Eventos</h3>
          <p>Los componentes Lit pueden escuchar y emitir eventos estándar y personalizados. Se pueden añadir listeners declarativos en la plantilla y emitir eventos para comunicar cambios o interacciones. Los eventos pueden ser burbujeantes y atravesar el shadow DOM, permitiendo la comunicación entre componentes y con el exterior de forma flexible y desacoplada.</p>
          <a href="https://lit.dev/docs/components/events/" target="_blank">Leer más sobre eventos en Lit</a>
        </section>
        <section id="estilos">
          <h3>Estilos</h3>
          <p>Los estilos en Lit se definen dentro del componente y están encapsulados por defecto gracias al Shadow DOM. Se pueden usar CSS estándar, variables CSS y pseudo selectores para personalizar el estilo del componente y sus slots. La encapsulación evita conflictos de estilos y facilita la reutilización de componentes en diferentes contextos.</p>
          <a href="https://lit.dev/docs/components/styles/" target="_blank">Leer más sobre estilos en Lit</a>
        </section>
        <section id="slots">
          <h3>Slots</h3>
          <p>Los slots permiten que los usuarios de un componente inserten contenido personalizado en lugares específicos del template. El slot por defecto se define sin nombre y los slots con nombre permiten mayor flexibilidad. Los slots son esenciales para crear componentes reutilizables y adaptables a diferentes necesidades de presentación.</p>
          <a href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_templates_and_slots" target="_blank">Leer más sobre slots en MDN</a>
        </section>
        <section id="buenas-practicas">
          <h3>Buenas prácticas</h3>
          <ul>
            <li>Divide la lógica en componentes pequeños y reutilizables.</li>
            <li>Evita la lógica compleja en el método de renderizado.</li>
            <li>Usa propiedades reactivas para el estado y la comunicación.</li>
            <li>Utiliza eventos personalizados para comunicar cambios.</li>
            <li>Encapsula estilos y evita dependencias globales.</li>
            <li>Documenta las propiedades y eventos públicos.</li>
            <li>Escribe tests para los componentes.</li>
          </ul>
        </section>
        <section id="soporte-ide-herramientas">
          <h3>Soporte de IDE y herramientas</h3>
          <p>Lit ofrece soporte para autocompletado, linting y otras herramientas en los principales editores e IDEs. No requiere compilación durante el desarrollo y es compatible con TypeScript para una mejor experiencia de desarrollo. Existen plugins y extensiones para los entornos de desarrollo más populares, facilitando la productividad y la calidad del código.</p>
        </section>
        <section id="lit-vs-stencil">
          <h2>Lit vs Stencil</h2>
          <p>Lit y Stencil son soluciones modernas para crear Web Components. Lit se centra en la simplicidad, el rendimiento y el tamaño reducido, mientras que Stencil añade características como generación automática de documentación, tipado avanzado y compatibilidad con frameworks. Lit es ideal para proyectos que buscan ligereza, flexibilidad y adopción progresiva, mientras que Stencil puede ser preferible en entornos donde se requiera integración avanzada con otros frameworks o herramientas.</p>
        </section>
      </main>
    `;
  }
}
