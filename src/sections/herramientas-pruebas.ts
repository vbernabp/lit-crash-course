import { html } from 'lit'
export const herramientasPruebasSection = html`
  <h4>2.7.3 Pruebas de Software</h4>
  <p>Lit es compatible con la mayoría de frameworks de testing modernos como Jest, Karma, Mocha, Jasmine, WebdriverIO y Web Test Runner. Se recomienda realizar las pruebas en un entorno de navegador para reflejar el comportamiento real de los componentes.</p>
  <p>El entorno de pruebas debe soportar JavaScript moderno y módulos ES. Para navegadores antiguos, es necesario cargar polyfills adicionales. Web Test Runner y <strong>WebdriverIO</strong> son opciones recomendadas para pruebas de componentes Lit, ya que soportan custom elements y shadow DOM.</p>
  <p>Es importante limpiar los componentes del DOM tras cada prueba y asegurarse de que el entorno de pruebas está correctamente configurado para los módulos y polyfills necesarios.</p>
  <a href="https://lit.dev/docs/tools/testing/" target="_blank" rel="noopener noreferrer">Más información sobre pruebas de software</a>
`
