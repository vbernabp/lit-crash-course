import '../components/lc-code';
import { html } from 'lit'
export const directivasPlantillasSection = html`
  <h4>2.4.4 Directivas</h4>
  <p>Las directivas en Lit son funciones que permiten personalizar cómo se renderiza una expresión en la plantilla. Lit incluye varias directivas integradas para cubrir necesidades comunes como aplicar clases o estilos dinámicos, gestionar listas, condicionales, caché, valores especiales, referencias a nodos, renderizado asíncrono y más.</p>
  <p>Cada directiva se importa como un módulo independiente, por lo que solo se incluye en el bundle lo que realmente se usa. Algunas directivas destacadas son: <lc-code>classMap</lc-code>, <lc-code>styleMap</lc-code>, <lc-code>repeat</lc-code>, <lc-code>when</lc-code>, <lc-code>choose</lc-code>, <lc-code>cache</lc-code>, <lc-code>guard</lc-code>, <lc-code>live</lc-code>, <lc-code>unsafeHTML</lc-code>, <lc-code>unsafeSVG</lc-code>, <lc-code>ref</lc-code>, <lc-code>until</lc-code>, <lc-code>asyncAppend</lc-code>, <lc-code>asyncReplace</lc-code>, <lc-code>ifDefined</lc-code>, <lc-code>keyed</lc-code>, <lc-code>templateContent</lc-code> y <lc-code>map</lc-code>.</p>
  <p>Las directivas pueden usarse en diferentes posiciones de la plantilla según su propósito: en atributos, propiedades, eventos, hijos o elementos. También es posible crear directivas personalizadas para necesidades específicas.</p>
  <a href="https://lit.dev/docs/templates/directives/" target="_blank">Más información sobre directivas</a>
`
