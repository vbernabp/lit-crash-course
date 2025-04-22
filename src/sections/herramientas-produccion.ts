import { html } from 'lit'
export const herramientasProduccionSection = html`
  <h4>2.7.5 Producción</h4>
  <p>Para preparar una aplicación Lit para producción, se recomienda usar herramientas como Rollup o Webpack para agrupar los módulos, minificar el código JavaScript (por ejemplo, con Terser), y servir solo código moderno a navegadores modernos. Es importante aplicar compresión en el servidor y usar hash en los assets para facilitar la invalidación de caché.</p>
  <p>Las plantillas de Lit están en literales de template string, por lo que conviene usar plugins como rollup-plugin-minify-html-literals para minificar el HTML dentro de los templates. Se recomienda no hacer bundle ni minificar los componentes antes de publicarlos en npm, pero sí hacerlo al construir la aplicación final.</p>
  <p>La documentación oficial proporciona ejemplos de configuración de Rollup y una lista de plugins recomendados para optimizar el build de producción.</p>
  <a href="https://lit.dev/docs/tools/production/" target="_blank">Más información sobre producción</a>
`
