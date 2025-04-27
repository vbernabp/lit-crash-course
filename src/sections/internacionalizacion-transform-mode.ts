import { html } from 'lit'
import '../components/lc-code'
import '../components/lc-note'

export const internacionalizacionTransformModeSection = html`
  <h4>2.10.3 Modo de Transformación</h4>
  <p>En el modo de transformación, las cadenas son reemplazadas en tiempo de compilación mediante herramientas de localización, generando archivos estáticos para cada idioma. Sin embargo, el cambio de idioma requiere recargar la página.</p>
  <a href="https://lit.dev/docs/localization/transform-mode/" target="_blank">Más información sobre el modo de transformación</a>
  <lc-note>
    <p>El modo en tiempo de ejecución genera distintos archivos de texto por idioma, mientras que el modo en tiempo de transformación genera distintas aplicaciones por idioma.</p>
  </lc-note>
`
