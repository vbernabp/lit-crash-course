import { html } from 'lit'
export const herramientasDesarrolloSection = html`
  <h4>2.7.2 Desarrollo</h4>
  <p>Durante el desarrollo con Lit, se recomienda usar un servidor de desarrollo para previsualizar el código sin necesidad de un paso de build, TypeScript para tipado, un linter para detectar errores, un formateador de código y plugins de IDE específicos para Lit.</p>
  <p>Lit publica builds de desarrollo y producción. El build de desarrollo incluye advertencias y comprobaciones adicionales, mientras que el de producción está optimizado y minificado. Es importante asegurarse de usar el build adecuado según el entorno.</p>
  <p>Se recomienda usar herramientas como Web Dev Server, Rollup, Vite o Webpack para gestionar los módulos y las builds. Para TypeScript, basta con habilitar un nivel moderno de JavaScript y los tipos DOM, y opcionalmente los decoradores experimentales.</p>
  <p>Para mejorar la experiencia, existen plugins de IDE como lit-plugin y ts-lit-plugin, y reglas de ESLint específicas para Lit. El formateo de código puede hacerse con Prettier, Beautifier o Clang.</p>
  <a href="https://lit.dev/docs/tools/development/" target="_blank">2.7.2 Leer más sobre desarrollo en Lit</a>
`
