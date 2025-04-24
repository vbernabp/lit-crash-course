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
  `;

  @property({ type: Array }) columns: string[] = [];
  @property({ type: Array }) rows: string[][] = [];

  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map((col: string) => html`<th>${col}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map((row: string[]) => html`
            <tr>
              ${row.map((cell: string) => html`<td>${cell}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
