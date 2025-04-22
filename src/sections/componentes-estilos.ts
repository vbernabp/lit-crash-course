import { html } from 'lit'
export const componentesEstilosSection = html`
  <h4>2.3.5 Estilos</h4>
  <p>Las plantillas de los componentes Lit se renderizan en el shadow root, por lo que los estilos definidos en el componente solo afectan a los elementos dentro de ese shadow root. El encapsulamiento de estilos que proporciona el Shadow DOM evita que los estilos del componente afecten a otros elementos de la página y viceversa.</p>
  <p>Los estilos se definen normalmente en el campo estático styles usando la función css. Esto proporciona el mejor rendimiento y asegura que los estilos estén correctamente encapsulados. Se pueden definir estilos como un único template literal o como un array para heredar o compartir estilos entre componentes.</p>
  <p>También es posible definir estilos dentro de la plantilla usando un elemento &lt;style&gt;, aunque esto solo se recomienda para casos donde se necesiten estilos personalizados por instancia.</p>
  <p>Para personalizar estilos de forma dinámica, se pueden usar variables CSS (custom properties) y los selectores :host y :host(). Además, Lit ofrece directivas como classMap y styleMap para aplicar clases y estilos dinámicos en la plantilla.</p>
  <p>El uso de CSS custom properties facilita la creación de componentes tematizables y la personalización de estilos desde fuera del componente.</p>
  <a href="https://lit.dev/docs/components/styles/" target="_blank">Más información sobre estilos</a>
`
