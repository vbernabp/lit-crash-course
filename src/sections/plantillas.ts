import { html } from 'lit'
import '../components/lc-table';
export const plantillasSection = html`
  <h3>2.4 Plantillas</h3>
  <lc-table
    .columns=${['Elemento', 'Descripción']}
    .rows=${[
      ['Expresiones', 'Permiten incluir valores dinámicos en el HTML, como variables, propiedades o resultados de funciones.'],
      ['Condicionales', 'Renderizan contenido de forma condicional usando lógica de JavaScript.'],
      ['Listas', 'Permiten renderizar listas de elementos a partir de arrays u objetos.'],
      ['Directivas integradas', 'Funciones especiales que amplían la funcionalidad de las plantillas, como repeat, ifDefined, etc.'],
      ['Directivas personalizadas', 'Permiten crear lógica de renderizado personalizada para casos específicos.'],
      ['Otras plantillas', 'Se pueden incluir otras plantillas dentro de una plantilla principal.']
    ]}
    caption="Elementos que pueden contener las plantillas en Lit"
  ></lc-table>
`
