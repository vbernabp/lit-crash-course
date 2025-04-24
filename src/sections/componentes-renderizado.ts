import { html } from 'lit'
import '../components/lc-note';

export const componentesRenderizadoSection = html`
  <h4>2.3.2 Renderizado</h4>
  <p>Para definir lo que debe renderizar un componente Lit, se añade un método render que devuelve una plantilla. Las plantillas pueden incluir expresiones, que son marcadores de posición para contenido dinámico. Se escriben usando template literals de JavaScript y la función html de Lit.</p>
  <p>Las plantillas de Lit pueden contener expresiones JavaScript para establecer contenido de texto, atributos, propiedades y listeners de eventos. El método render puede incluir cualquier lógica de JavaScript necesaria para preparar los datos que se mostrarán.</p>
  <p>El método render normalmente retorna un objeto TemplateResult, pero también puede devolver cualquier valor que Lit pueda renderizar como hijo de un elemento HTML: valores primitivos, nodos DOM, arrays o iterables de estos tipos, o los valores especiales <strong>nothing</strong> y <strong>noChange</strong>.</p>
  <p>Un componente Lit se renderiza inicialmente cuando se añade al DOM. Después, cualquier cambio en las propiedades reactivas desencadena un ciclo de actualización y vuelve a renderizar el componente. Lit <strong>agrupa</strong> las actualizaciones para maximizar el rendimiento y solo actualiza las partes del DOM que han cambiado.</p>
  <p>Para aprovechar el modelo funcional de Lit, el método render debe evitar cambiar el estado del componente o producir efectos secundarios, usar solo las propiedades del componente como entrada y devolver siempre el mismo resultado para los mismos valores de propiedad.</p>
  <lc-note>
    <p>El componente lc-footer se puede utilizar para probar el método render.</p>
  </lc-note>
  <a href="https://lit.dev/docs/components/rendering/" target="_blank">Más información sobre renderizado</a>
`
