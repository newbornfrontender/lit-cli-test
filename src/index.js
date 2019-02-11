import { LitElement, html, css, property, customElement } from '../node_modules/lit-element/lit-element.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';

  static get styles() {
    return css`
      p {
        color: red;

        & span {
          color: green;
        }
      }
    `
  }

  render() {
    return html`<p>Hello, <span>${this.name}</span>!</p>`;
  }
}
