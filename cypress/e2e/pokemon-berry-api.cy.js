describe('test /berry endpoint', () => {
  it('checks the response of a random /berry/{id} endpoint', () => {
    cy.request('https://pokeapi.co/api/v2/berry')
      .its('body.count')
      .then(count => {
        // Get a random ID within the count range
        const randomId = Math.floor(Math.random() * count) + 1;
        // Add log statement to display random ID
        // cy.log(`Random Berry ID: ${randomId}`); 
        cy.request(`https://pokeapi.co/api/v2/berry/${randomId}`)
          .then(response => {
            // Check if the response status is 200 OK
            expect(response.status).to.eq(200);

            // Check if the response body has the expected properties
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('name');
            expect(response.body).to.have.property('growth_time');
          });
      });
  });
});

