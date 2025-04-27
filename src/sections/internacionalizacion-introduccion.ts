import { html } from 'lit'
import '../components/lc-code'

export const internacionalizacionIntroduccionSection = html`
  <h4>2.10.1 Introducción</h4>
  <p>La internacionalización en Lit se basa en la definición de mensajes traducibles y catálogos de traducción, además del uso de la API de <lc-code>@lit/localize</lc-code> para realizar cambios de idioma de manera dinámica.</p>
  <p>Pasos para añadir internacionalización:</p>
  <ol>
    <li>Envolver una cadena o plantilla en la función <lc-code>msg</lc-code>.</li>
    <li>Crear un archivo de configuración <lc-code>lit-localize.json</lc-code>.</li>
    <li>Ejecutar <lc-code>lit-localize extract</lc-code> para generar un archivo XLIFF.</li>
    <li>Editar el archivo XLIFF generado para agregar una etiqueta <lc-code>&lt;target&gt;</lc-code> de traducción.</li>
    <li>Ejecutar <lc-code>lit-localize build</lc-code> para generar una versión localizada de las cadenas y plantillas.</li>
    <li>Añadir la lógica para cambiar entre idiomas.</li>
  </ol>
  <a href="https://lit.dev/docs/localization/overview/" target="_blank">Más información sobre la introducción a la internacionalización</a>
`
