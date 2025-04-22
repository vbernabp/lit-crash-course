import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('lc-question')
export class LcQuestion extends LitElement {
  public static readonly shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'closed' as ShadowRootMode };
  @property({ type: String }) question = '';
  @property({ type: String }) answer = '';

  public static readonly styles = css`
    :host {
      display: block;
      margin: 2rem 0;
    }
    details {
      background: #f5f7fa;
      border-left: 4px solid #1976d2;
      border-radius: 8px;
      box-shadow: 0 2px 8px #0001;
      padding: 0.75rem 1rem;
    }
    summary {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      outline: none;
      font-weight: 600;
      font-size: 1rem;
      color: #1976d2;
    }
    summary:focus {
      outline: 2px solid black;
      outline-offset: 2px;
    }
    .icon {
      flex-shrink: 0;
      width: 1.7rem;
      height: 1.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1976d2;
      color: #fff;
      border-radius: 50%;
      font-size: 1.1rem;
      font-weight: bold;
    }
    .answer {
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.6;
      color: #222;
    }
    ::slotted(p:last-child),
    ::slotted(ul:last-child) {
      margin-bottom: 0;
    }
  `

  // On purpose with answer as both property and slot for demonstration
  render() {
    return html`
      <details>
        <summary><span class="icon">?</span>${this.question}</summary>
        <div class="answer"><slot>${this.answer}</slot></div>
      </details>
    `
  }
}
