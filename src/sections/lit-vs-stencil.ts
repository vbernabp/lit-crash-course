import { html } from 'lit'
import '../components/lc-table';
export const litVsStencilSection = html`
  <h2>3. Lit vs Stencil</h2>
  <p>Lit y Stencil son dos soluciones modernas para crear Web Components, pero tienen enfoques y objetivos diferentes. A continuación se muestra una tabla comparativa y una explicación de cuándo elegir cada uno:</p>
  <lc-table
    .columns=${['Característica', 'Lit', 'Stencil']}
    .rows=${[
      ['Filosofía', 'Simplicidad, ligereza, enfoque en los estándares web', 'Tooling avanzado, generación de design systems, integración multiplataforma'],
      ['Tamaño del bundle', 'Muy pequeño (~5KB)', 'Mayor, depende de las features usadas'],
      ['Curva de aprendizaje', 'Baja', 'Media'],
      ['Reactividad', 'Propiedades reactivas simples', 'Sistema de reactividad propio, inspirado en React'],
      ['Integración con frameworks', 'Manual, wrappers opcionales', 'Automática, genera bindings para Angular, React, Vue, etc.'],
      ['Tooling', 'Básico, centrado en el desarrollo de componentes', 'CLI avanzada, generación de documentación, testing, lazy loading, prerendering'],
      ['SSR (Server Side Rendering)', 'Soporte con librerías oficiales', 'Soporte integrado'],
      ['Uso recomendado', 'Componentes ligeros, integración progresiva, sistemas de diseño simples', 'Librerías de componentes para grandes organizaciones, design systems complejos, integración multiplataforma'],
    ]}
  ></lc-table>
  <h3>¿Cuándo elegir Lit?</h3>
  <ul>
    <li>Cuando buscas simplicidad, bundles pequeños y máxima compatibilidad con los estándares web.</li>
    <li>Si quieres integrar componentes en cualquier stack o migrar progresivamente una aplicación.</li>
    <li>Ideal para proyectos pequeños, medianos o sistemas de diseño que no requieran tooling avanzado.</li>
  </ul>
  <h3>¿Cuándo elegir Stencil?</h3>
  <ul>
    <li>Cuando necesitas tooling avanzado, generación automática de documentación, testing y lazy loading.</li>
    <li>Si tu objetivo es crear librerías de componentes para ser usadas en múltiples frameworks (Angular, React, Vue, etc.).</li>
    <li>Recomendado para grandes organizaciones o design systems complejos.</li>
  </ul>
  <a href="https://lit.dev/docs/composition/mixins/" target="_blank">Más información sobre Lit vs Stencil</a>
`
