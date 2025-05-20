import {Directive, directive} from 'lit/directive.js';

class LowerCaseDirective extends Directive {
  render(value: string) {
    return value.toLowerCase();
  }
}

export const toLowerCase = directive(LowerCaseDirective);
