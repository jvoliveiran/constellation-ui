describe('Constellation Dashboard', () => {
  it('goes to overview page', () => {
    cy.visitWithBaseURL('dashboard');
    
    cy.contains('Overview');
  });
});
