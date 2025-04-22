import { html } from 'lit'
export const composicionComponentesSection = html`
  <h4>2.5.2 Composición de Componentes</h4>
  <p>La forma más común de gestionar la complejidad y dividir el código en Lit es la composición de componentes: construir un componente grande y complejo a partir de otros más pequeños y simples. Esto permite aislar la complejidad en componentes específicos y luego componerlos para crear el diseño global.</p>
  <p>Un buen componente suele tener su propio estado, plantilla, un API bien definido y se utiliza en más de un lugar. Los controles reutilizables como botones, inputs o menús, así como piezas de UI más complejas, son buenos candidatos para ser componentes.</p>
  <p>La comunicación entre componentes sigue el modelo de la plataforma web: las propiedades se pasan hacia abajo (del componente padre al hijo) y los eventos se envían hacia arriba (del hijo al padre). Así, los datos fluyen de padres a hijos mediante propiedades, y los cambios o acciones se notifican hacia arriba mediante eventos.</p>
  <p>Para comunicar datos entre componentes que no son padre e hijo directo, se puede usar el patrón mediador, donde un componente intermedio gestiona los eventos y actualiza el estado de los componentes implicados.</p>
  <p>Además, los componentes pueden aceptar nodos hijos (light DOM) que se renderizan mediante slots, permitiendo una mayor flexibilidad y personalización.</p>
  <a href="https://lit.dev/docs/composition/component-composition/" target="_blank">Más información sobre composición de componentes</a>
`
