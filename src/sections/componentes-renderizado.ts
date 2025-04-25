import { html } from 'lit'
import '../components/lc-code'
import '../components/lc-note';

export const componentesRenderizadoSection = html`
  <h4>2.3.2 Renderizado</h4>
  <p>Para definir lo que debe renderizar un componente Lit, se añade un método <lc-code>render</lc-code> que devuelve una plantilla. Las plantillas pueden incluir expresiones, que son marcadores de posición para contenido dinámico. Se escriben usando template literals de JavaScript y la función <lc-code>html</lc-code> de Lit.</p>
  <p>Las plantillas de Lit pueden contener expresiones JavaScript para establecer contenido de texto, atributos, propiedades y listeners de eventos. El método <lc-code>render</lc-code> puede incluir cualquier lógica de JavaScript necesaria para preparar los datos que se mostrarán.</p>
  <p>El método <lc-code>render</lc-code> normalmente retorna un objeto <lc-code>TemplateResult</lc-code>, pero también puede devolver cualquier valor que Lit pueda renderizar como hijo de un elemento HTML: valores primitivos, nodos DOM, arrays o iterables de estos tipos, o los valores especiales <lc-code>nothing</lc-code> y <lc-code>noChange</lc-code>.</p>
  <p>Un componente Lit se renderiza inicialmente cuando se añade al DOM. Después, cualquier cambio en las propiedades reactivas desencadena un ciclo de actualización y vuelve a renderizar el componente. Lit <strong>agrupa</strong> las actualizaciones para maximizar el rendimiento y solo actualiza las partes del DOM que han cambiado.</p>
  <p>Para aprovechar el modelo funcional de Lit, el método <lc-code>render</lc-code> debe evitar cambiar el estado del componente o producir efectos secundarios, usar solo las propiedades del componente como entrada y devolver siempre el mismo resultado para los mismos valores de propiedad.</p>
  <lc-note>
    <p>El componente lc-footer se puede utilizar para probar el método <lc-code>render</lc-code>.</p>
  </lc-note>
  <a href="https://lit.dev/docs/components/rendering/" target="_blank">Más información sobre renderizado</a>
`
