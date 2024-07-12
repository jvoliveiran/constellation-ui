/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    getByDataTestId(value: string): Chainable<Element> | Chainable<JQuery<HTMLElement>>;
    visitWithBaseURL(route: string, path?: string): Chainable<string>;
  }
}
