import { html, render } from 'lit'
import { $, expect } from '@wdio/globals'

import '../components/lc-code'

describe('lc-code component testing', () => {
  it('should render slotted code content', async () => {
    render(
      html`<lc-code id="root">console.log('hello')</lc-code>`,
      document.body
    )

    const codeEl = await $('lc-code').$('code')
    await expect(codeEl).toHaveText("console.log('hello')")
  })
})
