import { html } from 'lit'
export const componentesPropiedadesReactivasSection = html`
  <h4>2.3.4 Propiedades Reactivas</h4>
  <p>Las propiedades reactivas en Lit permiten que los componentes respondan automáticamente a los cambios de datos. Cuando una propiedad reactiva cambia, el componente se vuelve a renderizar para reflejar el nuevo estado.</p>
  <p>Se pueden declarar propiedades reactivas utilizando decoradores o la propiedad estática <code>properties</code>. Estas propiedades pueden sincronizarse con atributos HTML, reflejar su valor en los atributos y definir su tipo para conversión automática.</p>
  <p>Las propiedades públicas deben usarse como API de entrada del componente. El componente no debe modificar sus propias propiedades públicas salvo en respuesta a la interacción del usuario, y debe notificar los cambios mediante eventos personalizados.</p>
  <p>Para propiedades internas que no deben ser accedidas desde fuera del componente, se puede usar la opción <code>state</code> o el decorador correspondiente.</p>
  <iframe
    height="400"
    style="width: 100%;"
    scrolling="no"
    title="Lit - Propiedades"
    src="https://codepen.io/victorbernabeperez/embed/gbbrxKN?default-tab=js%2Cresult&editable=true"
    frameborder="no"
    loading="lazy"
    allowtransparency="true"
  >
    See the Pen <a href="https://codepen.io/victorbernabeperez/pen/gbbrxKN">
    Lit - Propiedades</a> by Victor Bernabe Perez (<a href="https://codepen.io/victorbernabeperez">@victorbernabeperez</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
  <p><a href="https://lit.dev/docs/components/properties/" target="_blank" rel="noopener">Más información en la documentación oficial de Lit sobre propiedades reactivas</a></p>
`;
