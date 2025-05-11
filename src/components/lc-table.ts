import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lc-table')
export class LcTable extends LitElement {
  public static readonly styles = css`
    :host {
      display: block;
      overflow-x: auto;
    }
    table {
      width: 100%;
      min-width: 600px;
      border-collapse: collapse;
      margin: 1.5rem 0;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 0.5rem;
    }
    th {
      background: #f5f5f5;
    }
    caption {
      caption-side: bottom;
      text-align: left;
      font-size: 0.95em;
      color: #666;
      padding-top: 0.5rem;
    }
  `;

  @property({ type: Array }) columns: string[] = [];
  @property({ type: Array }) rows: unknown[][] = [];
  @property({ type: String }) caption: string = '';

  render() {
    return html`
      <table>
        ${this.caption !== '' ? html`<caption>${this.caption}</caption>` : ''}
        <thead>
          <tr>
            ${this.columns.map((col: string) => html`<th>${col}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map((row: unknown[]) => html`
            <tr>
              ${row.map((cell: unknown) => html`<td>${cell}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
