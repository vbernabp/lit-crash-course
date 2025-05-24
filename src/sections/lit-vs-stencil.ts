import { html } from 'lit'
import '../components/lc-table';
export const litVsStencilSection = html`
  <h2>3. Lit vs Stencil</h2>
  <p>Lit y Stencil son dos soluciones modernas para crear Web Components, pero tienen enfoques y objetivos diferentes. A continuación se muestra una tabla comparativa y una explicación de cuándo elegir cada uno:</p>
  <lc-table
    .columns=${['Característica', 'Lit', 'Stencil']}
    .rows=${[
      ['Naturaleza', 'Librería en tiempo de ejecución (dependencia)', 'Compilador de Web Components'],
      ['Filosofía', 'Simplicidad y enfoque en los estándares web', 'Tooling avanzado, generación de design systems, integración multiplataforma'],
      ['Curva de aprendizaje', 'Baja', 'Media'],
      ['Integración con frameworks', 'Envoltorio para React', 'Envoltorio para Angular, React, Vue y Ember.'],
      ['Tooling', 'Básico, centrado en el desarrollo de componentes', 'CLI avanzada, generación de documentación, testing, lazy loading, prerendering'],
      ['SSR (Server Side Rendering)', 'Sí', 'Sí'],
      ['Uso recomendado', 'Componentes ligeros, integración progresiva, sistemas de diseño simples', 'Librerías de componentes para grandes organizaciones, design systems complejos, integración multiplataforma'],
    ]}
    caption="Comparativa de características entre Lit y Stencil"
  ></lc-table>
  <h3>¿Cuándo elegir Lit?</h3>
  <p>Elige Lit cuando busques <strong>simplicidad</strong>, se trate de un proyecto pequeño o sistemas de diseño que no requieran tooling avanzado.</p>
  <h3>¿Cuándo elegir Stencil?</h3>
  <p>Elige Stencil cuando necesites <strong>tooling avanzado</strong>, generación automática de documentación, testing y lazy loading. Es recomendable para crear librerías de componentes para ser usadas en <strong>múltiples frameworks</strong> y para grandes organizaciones o design systems complejos.</p>
  <a href="https://lit.dev/docs/composition/mixins/" target="_blank" rel="noopener noreferrer">Más información sobre Lit vs Stencil</a>
`
