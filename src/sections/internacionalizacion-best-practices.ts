import { html } from 'lit'
import '../components/lc-code'
import '../components/lc-localization'

export const internacionalizacionBestPracticesSection = html`
  <h4>2.10.5 Buenas prácticas</h4>
  <ul>
    <li>Asegurar la reevaluación de los textos metiendo la función msg en el método render.</li>
    <li>Evitar introducir marcado html innecesario en la función msg.</li>
  </ul>
  <lc-localization></lc-localization>
  <a href="https://lit.dev/docs/localization/best-practices/" target="_blank">Más información sobre buenas prácticas</a>
`
