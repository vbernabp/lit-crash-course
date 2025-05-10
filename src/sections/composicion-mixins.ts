import { html } from 'lit'
export const composicionMixinsSection = html`
  <h4>2.5.3 Mixins</h4>
  <p>Los mixins de clase son un patrón estándar de JavaScript para compartir código entre clases mediante la herencia. A diferencia de los controladores reactivos, que implementan una composición "has-a", los mixins implementan una composición "is-a", haciendo que la clase que los usa sea una instancia del comportamiento compartido.</p>
  <p>Un mixin es una función que recibe una clase base y devuelve una subclase extendida con nuevos métodos, propiedades o sobreescrituras de callbacks del ciclo de vida. Los mixins pueden añadir API pública, propiedades reactivas, estilos o lógica adicional, y pueden usarse tanto en JavaScript como en TypeScript.</p>
  <p>En TypeScript, es importante tipar correctamente el superClass y la subclase resultante, y aplicar los decoradores en una declaración de clase, no en una expresión. Si el mixin añade nueva API pública o protegida, se recomienda definir una interfaz para el mixin y castear el tipo de retorno.</p>
  <p>Un mixin puede sobreescribir métodos del ciclo de vida estándar y de actualización reactiva, y debe llamar siempre a super para mantener la funcionalidad de la clase base.</p>
  <a href="https://lit.dev/docs/composition/mixins/" target="_blank" rel="noopener noreferrer">Más información sobre mixins</a>
`
