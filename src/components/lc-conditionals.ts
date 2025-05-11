import { LitElement, html, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { cache } from 'lit/directives/cache.js'

@customElement('lc-conditionals')
export class LcConditionals extends LitElement {
  @state() loggedIn = false
  @state() userName = 'Pepe'
  @state() showWelcome = true

  toggleLogin() {
    this.loggedIn = !this.loggedIn
  }
  toggleWelcome() {
    this.showWelcome = !this.showWelcome
  }
  getContent() {
    if (this.loggedIn) {
      return html`<p>Contenido privado para ${this.userName}</p>`
    }
    return html`<p>Acceso restringido</p>`
  }

  render() {
    let welcomeMessage
    if (this.showWelcome) {
      welcomeMessage = html`<p>¡Hola de nuevo!</p>`
    } else {
      welcomeMessage = nothing
    }
    return html`
      <h5>Operador ternario en plantilla</h5>
      <button @click=${this.toggleLogin}>${this.loggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}</button>
      <div>
        ${this.loggedIn
          ? html`<p>Bienvenido, ${this.userName}!</p>`
          : html`<p>Por favor, inicia sesión.</p>`}
      </div>
      <h5>Condicional con if</h5>
      <button @click=${this.toggleWelcome}>Alternar saludo</button>
      <div>
        ${welcomeMessage}
      </div>
      <h5>Condicional con función auxiliar</h5>
      <div>
        ${this.getContent()}
      </div>
      <h5>Directiva cache</h5>
      <div>
        ${cache(this.loggedIn
          ? html`<p>Cache activada: Bienvenido, ${this.userName}!</p>`
          : html`<p>Cache activada: Por favor, inicia sesión.</p>`)}
      </div>
    `
  }
}
