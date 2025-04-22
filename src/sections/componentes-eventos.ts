import { html } from 'lit'
export const componentesEventosSection = html`
  <h4>2.3.8 Eventos</h4>
  <p>Los eventos son la forma estándar en la que los elementos comunican cambios, normalmente como resultado de la interacción del usuario. Además de los eventos estándar, los componentes Lit pueden emitir eventos personalizados para comunicar cambios o acciones específicas.</p>
  <p>Lit permite escuchar eventos tanto de forma imperativa usando addEventListener como de forma declarativa en la plantilla mediante la sintaxis @evento. Los listeners declarativos se añaden automáticamente al renderizar la plantilla y están ligados al contexto del componente.</p>
  <p>Se pueden personalizar las opciones de los listeners usando el decorador @eventOptions. También es posible escuchar eventos en elementos hijos, en el propio componente o en el shadow root, y aprovechar la delegación de eventos para optimizar el rendimiento.</p>
  <p>Para emitir eventos personalizados, se utiliza dispatchEvent con instancias de CustomEvent. Es importante configurar correctamente las opciones de burbujeo y composición para que los eventos puedan atravesar el shadow DOM y ser escuchados desde el exterior.</p>
  <p>Lit facilita la comunicación entre componentes y la integración con otras partes de la aplicación mediante el uso de eventos estándar y personalizados.</p>
  <a href="https://lit.dev/docs/components/events/" target="_blank">Más información sobre eventos</a>
`
