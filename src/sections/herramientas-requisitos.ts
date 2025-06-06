import '../components/lc-code';
import { html } from 'lit'
export const herramientasRequisitosSection = html`
  <h4>2.7.1 Requisitos</h4>
  <p>Lit se publica como ES2021 y utiliza importaciones con <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps" target="_blank" rel="noopener noreferrer">bare module specifiers</a>, además de APIs modernas como <lc-code>template</lc-code>, custom elements y shadow DOM. Estas características están soportadas por los navegadores modernos y las herramientas populares de desarrollo.</p>
  <p>Para usar Lit en navegadores modernos, solo es necesario transformar los bare module specifiers a URLs compatibles. Herramientas como Webpack y Rollup lo gestionan automáticamente. Para navegadores antiguos, se requieren compilación adicional y polyfills.</p>
  <p>Lit 3 <strong>no es compatible</strong> con navegadores legacy como Internet Explorer 11 o Edge clásico. Si necesitas soporte para estos navegadores, se recomienda usar Lit 2 con los polyfills y configuraciones adecuadas.</p>
  <a href="https://lit.dev/docs/tools/requirements/" target="_blank" rel="noopener noreferrer">Más información sobre requisitos</a>
`
