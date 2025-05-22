import { html } from 'lit'
export const frameworksReactSection = html`
  <h4>2.9.1 React</h4>
  <p>El paquete <lc-code>@lit/react</lc-code> facilita la integración de componentes Lit en aplicaciones React. Aunque React puede renderizar custom elements, existen limitaciones al pasar propiedades complejas y al escuchar eventos personalizados. <lc-code>@lit/react</lc-code> soluciona estos problemas proporcionando wrappers y utilidades específicas.</p>
  <p>La función <b><lc-code>createComponent</lc-code></b> permite crear un componente React a partir de un custom element Lit, gestionando correctamente el paso de propiedades y la suscripción a eventos. Además, <b><lc-code>useController</lc-code></b> permite utilizar controladores reactivos de Lit como hooks en React, facilitando la reutilización de lógica y estado entre ambos entornos.</p>
  <p>Estas utilidades permiten que los componentes Lit se comporten de forma idiomática en React, haciendo más sencilla la interoperabilidad y el desarrollo conjunto.</p>
  <div>
    <a href="https://lit-react.netlify.app/" target="_blank" rel="noopener noreferrer">Ejemplo de aplicación de React usando componente web hecho con Lit</a>
  </div>
  <div>
    <a href="https://lit.dev/docs/frameworks/react/" target="_blank" rel="noopener noreferrer">Más información sobre integración con React</a>
  </div>
`
