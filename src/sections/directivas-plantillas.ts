import { html } from 'lit'
import '../components/lc-directives';

export const directivasPlantillasSection = html`
  <h4>2.4.4 Directivas</h4>
  <p>Las directivas en Lit son funciones que permiten personalizar cómo se renderiza una expresión en la plantilla. Lit incluye varias directivas integradas para cubrir necesidades comunes como aplicar clases o estilos dinámicos, gestionar listas, condicionales, caché, valores especiales, referencias a nodos, renderizado asíncrono y más.</p>
  <p>Cada directiva se importa como un módulo independiente, por lo que solo se incluye en el bundle lo que realmente se usa.</p>
  <p>Las directivas pueden usarse en diferentes posiciones de la plantilla según su propósito: en atributos, propiedades, eventos, hijos o elementos. También es posible crear directivas personalizadas para necesidades específicas.</p>
  <lc-table .columns=${['Directiva', 'Descripción']} .rows=${[
    ['classMap', 'Aplica clases dinámicamente a un elemento.'],
    ['styleMap', 'Aplica estilos en línea dinámicamente a un elemento.'],
    ['repeat', 'Renderiza listas de elementos de manera eficiente.'],
    ['ifDefined', 'Solo renderiza un atributo si el valor está definido.'],
    ['guard', 'Evita el trabajo de renderizado innecesario cuando los datos no han cambiado.'],
    ['cache', 'Mantiene el DOM de una parte de la plantilla entre renderizados.'],
    ['live', 'Actualiza un valor de propiedad solo si es diferente al valor actual.'],
    ['ref', 'Obtiene una referencia a un nodo renderizado.'],
    ['until', 'Renderiza contenido de forma asíncrona mostrando un valor temporal hasta que se resuelva una promesa.'],
    ['unsafeHTML', 'Inserta HTML sin procesar en la plantilla.'],
    ['unsafeSVG', 'Inserta SVG sin procesar en la plantilla.']
  ]} caption="Directivas integradas de Lit"></lc-table>
  <lc-directives></lc-directives>
  <a href="https://lit.dev/docs/templates/directives/" target="_blank" rel="noopener noreferrer">Más información sobre directivas</a>
`;
