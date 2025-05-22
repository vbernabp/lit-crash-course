import { html } from 'lit';
import '../components/lc-question';

export const preguntasRespuestasSection = html`
  <h2>4. Preguntas y Respuestas</h2>
  <lc-question question="¿Los parámetros de los componentes web pueden recibir objetos o solamente strings?">
    <p>Solamente cadenas de texto, como los atributos del resto de componentes nativos.</p>
    <p>Para poder pasar objetos, es necesario usar el envoltorio para React y usar el componente web en React.</p>
  </lc-question>
  <lc-question question="¿Cómo se integra con frameworks (Angular, React, Vue, etc)? ¿Se integra directamente o hay que aplicar algún tipo de envoltorio?">
    <p>Se integran como si fuesen componentes nativos, excepto en React si se aplica el envoltorio para React que ofrece Lit.</p>
  </lc-question>
  <lc-question question="¿Que opciones tiene para configurar el Shadow DOM o si puede trabajar sin Shadow DOM?">
    <p>Se puede crear el componente sin Shadow DOM (ver lc-table y lc-main), pero se pierde la encapsulación que ofrece el Shadow DOM.</p>
  </lc-question>
  <lc-question question="En el caso de que se pueda trabajar sin ShadoDOM, ¿tiene algún mecanismo similar a css modules para asilar sus estilos de los estilos del resto de la aplicación?">
    <p>Existen varias opciones si se tiene el control de la página web y todos los componentes web carecen de Shadow DOM, como por ejemplo CSS Modules, PostCSS, clases usando BEM...</p>
    <p>Si no se cumple con esos requisitos, como por ejemplo querer publicar un componente web en npm sin Shadow DOM y que este sea consumido por una applicación web manteniendo los estilos encapsulados, entonces se puede requerir a otras técnicas como <strong>inyección de estilos</strong>, <strong>estilos directamente en el template</strong> o custom properties de CSS.</p>
  </lc-question>
  <lc-question question="¿Tiene algún tipo de carga Lazy? Es decir que hasta que no aparezca la etiqueta no se descargue el código del WC.">
    <p>Lazy loading no es una característica que ofrece Lit, aunque se puede emular con dynamic imports y los IntersectionObserver. Se puede ver un ejemplo en el componente lc-layout.</p>
  </lc-question>
  <lc-question question="¿Cómo trabaja Lit la capacidad de extender componentes?">
    <p>Se puede ver un ejemplo en el componente lc-estilos.</p>
  </lc-question>
`
