import { html } from 'lit'
export const litVsStencilSection = html`
  <h2>3. Lit vs Stencil</h2>
  <p>Lit y Stencil son dos soluciones modernas para crear Web Components, pero tienen enfoques y objetivos diferentes. A continuación se muestra una tabla comparativa y una explicación de cuándo elegir cada uno:</p>
  <div style="overflow-x:auto;">
    <table style="width:100%;min-width:600px;border-collapse:collapse;margin:1.5rem 0;">
      <thead>
        <tr>
          <th style="border:1px solid #ccc;padding:0.5rem;background:#f5f5f5;">Característica</th>
          <th style="border:1px solid #ccc;padding:0.5rem;background:#f5f5f5;">Lit</th>
          <th style="border:1px solid #ccc;padding:0.5rem;background:#f5f5f5;">Stencil</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Filosofía</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Simplicidad, ligereza, enfoque en los estándares web</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Tooling avanzado, generación de design systems, integración multiplataforma</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Tamaño del bundle</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Muy pequeño (~5KB)</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Mayor, depende de las features usadas</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Curva de aprendizaje</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Baja</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Media</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Reactividad</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Propiedades reactivas simples</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Sistema de reactividad propio, inspirado en React</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Integración con frameworks</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Manual, wrappers opcionales</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Automática, genera bindings para Angular, React, Vue, etc.</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Tooling</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Básico, centrado en el desarrollo de componentes</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">CLI avanzada, generación de documentación, testing, lazy loading, prerendering</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">SSR (Server Side Rendering)</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Soporte con librerías oficiales</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Soporte integrado</td>
        </tr>
        <tr>
          <td style="border:1px solid #ccc;padding:0.5rem;">Uso recomendado</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Componentes ligeros, integración progresiva, sistemas de diseño simples</td>
          <td style="border:1px solid #ccc;padding:0.5rem;">Librerías de componentes para grandes organizaciones, design systems complejos, integración multiplataforma</td>
        </tr>
      </tbody>
    </table>
  </div>
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
