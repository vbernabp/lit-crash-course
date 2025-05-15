import { html } from 'lit'
import '../components/lc-note';
import 'lc-button-js';
export const herramientasPublicacionSection = html`
  <h4>2.7.4 Publicación</h4>
  <p>Para publicar un componente Lit en npm, configura correctamente el package.json (type, main, module) y proporciona un README. Publica el código como módulos ES2021, sin bundle ni minificación, y usa extensiones de archivo en los imports para compatibilidad futura con import maps.</p>
  <p>Compila el código TypeScript o Babel a ES2021 si usas características no estándar. Publica los archivos de tipado (.d.ts) y añade la entrada correspondiente en package.json. No incluyas polyfills en los módulos publicados; estos deben ser responsabilidad de la aplicación.</p>
  <p>Registra siempre el custom element en el mismo módulo donde se declara la clase, y exporta la clase para permitir la extensión y el uso en registries con scope en el futuro. Consulta la Gold Standard Checklist para mejores prácticas adicionales.</p>
  <div>
    <lc-button-js .label=${"Botón JS"} @click=${() => console.log('click')}></lc-button-js>
  </div>
  <lc-note>
    <p>
      Los eventos nativos son compuestos (salen del Shadow DOM) por defecto.
    </p>
  </lc-note>
  <a href="https://lit.dev/docs/tools/publishing/" target="_blank" rel="noopener noreferrer">Más información sobre publicación</a>
`
