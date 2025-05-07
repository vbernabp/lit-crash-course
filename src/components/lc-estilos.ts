import { css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LcEstilosSuper } from './lc-estilos-super'

@customElement('lc-estilos')
export class LcEstilos extends LcEstilosSuper {
  static readonly styles = [
    LcEstilosSuper.styles,
    css`
      ::slotted(*) {
        color: red;
      }
    `
  ];
}
