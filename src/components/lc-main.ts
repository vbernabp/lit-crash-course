import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { introduccionWebComponents } from '../sections/introduccion-web-components';
import { customElementsSection } from '../sections/custom-elements';
import { shadowDomSection } from '../sections/shadow-dom';
import { htmlTemplateSection } from '../sections/html-template';
import { litSection } from '../sections/lit';
import { queEsLitSection } from '../sections/que-es-lit';
import { primerosPasosSection } from '../sections/primeros-pasos';
import { componentesSection } from '../sections/componentes';
import { componentesDefinicionSection } from '../sections/componentes-definicion';
import { componentesRenderizadoSection } from '../sections/componentes-renderizado';
import { componentesEstilosSection } from '../sections/componentes-estilos';
import { componentesCicloVidaSection } from '../sections/componentes-ciclo-vida';
import { componentesShadowDomSection } from '../sections/componentes-shadow-dom';
import { componentesEventosSection } from '../sections/componentes-eventos';
import { componentesDecoradoresSection } from '../sections/componentes-decoradores';
import { componentesPropiedadesReactivasSection } from '../sections/componentes-propiedades';
import { plantillasSection } from '../sections/plantillas';
import { expresionesPlantillasSection } from '../sections/expresiones-plantillas';
import { condicionalesPlantillasSection } from '../sections/condicionales-plantillas';
import { listasPlantillasSection } from '../sections/listas-plantillas';
import { directivasPlantillasSection } from '../sections/directivas-plantillas';
import { directivasPersonalizadasPlantillasSection } from '../sections/directivas-personalizadas-plantillas';
import { composicionSection } from '../sections/composicion';
import { composicionIntroduccionSection } from '../sections/composicion-introduccion';
import { composicionComponentesSection } from '../sections/composicion-componentes';
import { composicionMixinsSection } from '../sections/composicion-mixins';
import { composicionControladoresSection } from '../sections/composicion-controladores';
import { gestionEstadoSection } from '../sections/gestion-estado';
import { contextoEstadoSection } from '../sections/contexto-estado';
import { tareasAsincronasEstadoSection } from '../sections/tareas-asincronas-estado';
import { senalesEstadoSection } from '../sections/senales-estado';
import { herramientasFlujosSection } from '../sections/herramientas-flujos';
import { herramientasRequisitosSection } from '../sections/herramientas-requisitos';
import { herramientasDesarrolloSection } from '../sections/herramientas-desarrollo';
import { herramientasPruebasSection } from '../sections/herramientas-pruebas';
import { herramientasPublicacionSection } from '../sections/herramientas-publicacion';
import { herramientasProduccionSection } from '../sections/herramientas-produccion';
import { herramientasPlantillasInicioSection } from '../sections/herramientas-plantillas-inicio';
import { ssrSection } from '../sections/ssr';
import { ssrIntroduccionSection } from '../sections/ssr-introduccion';
import { ssrUsoServidorSection } from '../sections/ssr-uso-servidor';
import { ssrUsoClienteSection } from '../sections/ssr-uso-cliente';
import { ssrAutoriaSection } from '../sections/ssr-autoria';
import { ssrDomEmulacionSection } from '../sections/ssr-dom-emulacion';
import { litVsStencilSection } from '../sections/lit-vs-stencil';
import { preguntasRespuestasSection } from '../sections/preguntas-respuestas';
import './lc-section';
import './lc-code'

@customElement('lc-main')
export class LcMain extends LitElement {
  public static readonly styles = css`
    main {
      padding: 2rem;
      margin-top: 2rem;
    }
    main section {
      margin-bottom: 2.5rem;
    }
    main h2, main h3 {
      margin-top: 2rem;
    }
  `;

  render() {
    return html`
      <main>
        <lc-section id="introduccion-web-components">
          ${introduccionWebComponents}
        </lc-section>
        <lc-section id="custom-elements">
          ${customElementsSection}
        </lc-section>
        <lc-section id="shadow-dom">
          ${shadowDomSection}
        </lc-section>
        <lc-section id="html-template">
          ${htmlTemplateSection}
        </lc-section>
        <lc-section id="lit">
          ${litSection}
        </lc-section>
        <lc-section id="que-es-lit">
          ${queEsLitSection}
        </lc-section>
        <lc-section id="primeros-pasos">
          ${primerosPasosSection}
        </lc-section>
        <lc-section id="componentes">
          ${componentesSection}
        </lc-section>
        <lc-section id="componentes-definicion">
          ${componentesDefinicionSection}
        </lc-section>
        <lc-section id="componentes-renderizado">
          ${componentesRenderizadoSection}
        </lc-section>
        <lc-section id="componentes-propiedades-reactivas">
          ${componentesPropiedadesReactivasSection}
        </lc-section>
        <lc-section id="componentes-estilos">
          ${componentesEstilosSection}
        </lc-section>
        <lc-section id="componentes-ciclo-vida">
          ${componentesCicloVidaSection}
        </lc-section>
        <lc-section id="componentes-shadow-dom">
          ${componentesShadowDomSection}
        </lc-section>
        <lc-section id="componentes-eventos">
          ${componentesEventosSection}
        </lc-section>
        <lc-section id="componentes-decoradores">
          ${componentesDecoradoresSection}
        </lc-section>
        <lc-section id="plantillas">
          ${plantillasSection}
        </lc-section>
        <lc-section id="expresiones-plantillas">
          ${expresionesPlantillasSection}
        </lc-section>
        <lc-section id="condicionales-plantillas">
          ${condicionalesPlantillasSection}
        </lc-section>
        <lc-section id="listas-plantillas">
          ${listasPlantillasSection}
        </lc-section>
        <lc-section id="directivas-plantillas">
          ${directivasPlantillasSection}
        </lc-section>
        <lc-section id="directivas-personalizadas-plantillas">
          ${directivasPersonalizadasPlantillasSection}
        </lc-section>
        <lc-section id="composicion">
          ${composicionSection}
        </lc-section>
        <lc-section id="composicion-introduccion">
          ${composicionIntroduccionSection}
        </lc-section>
        <lc-section id="composicion-componentes">
          ${composicionComponentesSection}
        </lc-section>
        <lc-section id="composicion-mixins">
          ${composicionMixinsSection}
        </lc-section>
        <lc-section id="composicion-controladores">
          ${composicionControladoresSection}
        </lc-section>
        <lc-section id="gestion-estado">
          ${gestionEstadoSection}
        </lc-section>
        <lc-section id="contexto-estado">
          ${contextoEstadoSection}
        </lc-section>
        <lc-section id="tareas-asincronas-estado">
          ${tareasAsincronasEstadoSection}
        </lc-section>
        <lc-section id="senales-estado">
          ${senalesEstadoSection}
        </lc-section>
        <lc-section id="herramientas-flujos">
          ${herramientasFlujosSection}
        </lc-section>
        <lc-section id="herramientas-requisitos">
          ${herramientasRequisitosSection}
        </lc-section>
        <lc-section id="herramientas-desarrollo">
          ${herramientasDesarrolloSection}
        </lc-section>
        <lc-section id="herramientas-pruebas">
          ${herramientasPruebasSection}
        </lc-section>
        <lc-section id="herramientas-publicacion">
          ${herramientasPublicacionSection}
        </lc-section>
        <lc-section id="herramientas-produccion">
          ${herramientasProduccionSection}
        </lc-section>
        <lc-section id="herramientas-plantillas-inicio">
          ${herramientasPlantillasInicioSection}
        </lc-section>
        <lc-section id="ssr">
          ${ssrSection}
        </lc-section>
        <lc-section id="ssr-introduccion">
          ${ssrIntroduccionSection}
        </lc-section>
        <lc-section id="ssr-uso-servidor">
          ${ssrUsoServidorSection}
        </lc-section>
        <lc-section id="ssr-uso-cliente">
          ${ssrUsoClienteSection}
        </lc-section>
        <lc-section id="ssr-autoria">
          ${ssrAutoriaSection}
        </lc-section>
        <lc-section id="ssr-dom-emulacion">
          ${ssrDomEmulacionSection}
        </lc-section>
        <lc-section id="lit-vs-stencil">
          ${litVsStencilSection}
        </lc-section>
        <lc-section id="preguntas-respuestas">
          ${preguntasRespuestasSection}
        </lc-section>
      </main>
    `;
  }
}
