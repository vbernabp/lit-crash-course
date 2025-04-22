import { html } from 'lit'
export const listasPlantillasSection = html`
  <h4>2.4.3 Listas</h4>
  <p>Para renderizar listas en Lit se pueden usar las construcciones estándar de JavaScript, como map o bucles, para crear plantillas repetidas. Cuando una expresión en la plantilla devuelve un array o iterable, Lit renderiza todos los elementos de ese array.</p>
  <p>El método más común es usar map para transformar los datos en una lista de plantillas. También se pueden construir arrays de plantillas usando bucles y pasarlos a la plantilla principal.</p>
  <p>Para listas grandes o que cambian de orden, la directiva repeat permite actualizar el DOM de forma más eficiente, reordenando los nodos existentes en vez de recrearlos. repeat requiere una función clave única para cada elemento.</p>
  <p>Se recomienda usar map o bucles para la mayoría de los casos, y recurrir a repeat cuando el rendimiento sea crítico o los nodos tengan estado propio.</p>
  <a href="https://lit.dev/docs/templates/lists/" target="_blank">Más información sobre listas</a>
`
