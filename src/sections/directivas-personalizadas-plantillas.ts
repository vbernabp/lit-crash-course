import '../components/lc-code';
import { html } from 'lit'
export const directivasPersonalizadasPlantillasSection = html`
  <h4>2.4.5 Directivas Personalizadas</h4>
  <p>Las directivas personalizadas en Lit permiten extender y personalizar cómo se renderiza una expresión en la plantilla. Se pueden crear como funciones simples que devuelven un valor a renderizar, o como clases que extienden de <lc-code>Directive</lc-code> para acceder al DOM, mantener estado entre renders, actualizar el DOM de forma asíncrona o limpiar recursos cuando la directiva se desconecta.</p>
  <p>Las directivas de clase permiten lógica avanzada, como acceder a partes específicas del DOM, persistir estado, o reaccionar a la conexión y desconexión del componente. Para crearlas, se implementa una clase que extiende <lc-code>Directive</lc-code> y se pasa a la función <lc-code>directive</lc-code> para obtener la función que se usará en la plantilla.</p>
  <p>Las directivas pueden limitarse a ciertos tipos de expresiones (atributos, hijos, propiedades, etc.) y pueden devolver <lc-code>noChange</lc-code> para indicar que no hay cambios que renderizar. También existen directivas asíncronas que extienden <lc-code>AsyncDirective</lc-code> para actualizar el DOM fuera del ciclo de renderizado normal.</p>
  <a href="https://lit.dev/docs/templates/custom-directives/" target="_blank">Más información sobre directivas personalizadas</a>
`
