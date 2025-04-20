import { html } from 'lit'
export const directivasPlantillasSection = html`
  <h4>2.4.4 Directivas</h4>
  <p>Las directivas en Lit son funciones que permiten personalizar cómo se renderiza una expresión en la plantilla. Lit incluye varias directivas integradas para cubrir necesidades comunes como aplicar clases o estilos dinámicos, gestionar listas, condicionales, caché, valores especiales, referencias a nodos, renderizado asíncrono y más.</p>
  <p>Cada directiva se importa como un módulo independiente, por lo que solo se incluye en el bundle lo que realmente se usa. Algunas directivas destacadas son: classMap, styleMap, repeat, when, choose, cache, guard, live, unsafeHTML, unsafeSVG, ref, until, asyncAppend, asyncReplace, ifDefined, keyed, templateContent y map.</p>
  <p>Las directivas pueden usarse en diferentes posiciones de la plantilla según su propósito: en atributos, propiedades, eventos, hijos o elementos. También es posible crear directivas personalizadas para necesidades específicas.</p>
  <a href="https://lit.dev/docs/templates/directives/" target="_blank">2.4.4 Leer más sobre directivas en Lit</a>
`
