import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('lc-note')
export class LcNote extends LitElement {
  public static readonly shadowRootOptions = { ...LitElement.shadowRootOptions, mode: 'closed' as ShadowRootMode };
  @property({ type: String }) note = '';

  public static readonly styles = css`
    :host {
      display: block;
      margin: 2rem 0;
    }
    .note-panel {
      background: #f5f7fa;
      border-left: 4px solid #1976d2;
      border-radius: 8px;
      box-shadow: 0 2px 8px #0001;
      padding: 0.75rem 1rem;
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
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
    .content {
      font-size: 1rem;
      line-height: 1.6;
      color: #1976d2;
      font-weight: 600;
      flex: 1;
    }
    ::slotted(p:last-child),
    ::slotted(ul:last-child) {
      margin-bottom: 0;
    }
    ::slotted(p:first-child) {
      margin-top: 0;
    }
  `

  render() {
    return html`
      <div class="note-panel">
        <span class="icon">#</span>
        <div class="content"><slot>${this.note}</slot></div>
      </div>
    `
  }
}
