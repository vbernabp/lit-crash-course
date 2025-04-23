import { html } from 'lit'
import '../components/lc-note';

export const queEsLitSection = html`
  <h3>2.1 ¿Qué es Lit?</h3>
  <p>Lit es una librería sencilla para crear componentes web. Su núcleo es una clase base que elimina el código repetitivo y proporciona estado reactivo, estilos encapsulados y un sistema de plantillas declarativo, pequeño y eficiente.</p>
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
  <lc-note>
    <p>El componente lc-footer es un ejemplo sencillo de Web Component hecho con Lit.</p>
  </lc-note>
  <lc-question question="¿Cómo funcionan los métodos html y css?">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates" target="_blank">Tagged Templates</a>
  </lc-question>
  <a href="https://lit.dev/docs/" target="_blank">Más información sobre Lit</a>
`
