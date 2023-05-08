describe('test form endpoint', () => {
  it('should return a 200 status code for a random pokemon form', () => {
    // Make a request to the endpoint URL and get the response body as an object
    cy.request('https://pokeapi.co/api/v2/pokemon')
      .its('body')
      .then((body) => {
        // Extract the IDs from the response body and store them in an array
        const ids = body.results.map((pokemon) => pokemon.url.split('/').slice(-2, -1)[0])

        // Test a random ID from the array
        const randomId = ids[Math.floor(Math.random() * ids.length)]
        cy.log(`Selected Pokemon ID: ${randomId}`) // Add a log statement here
        cy.request(`https://pokeapi.co/api/v2/pokemon-form/${randomId}`)
          .its('status')
          .should('equal', 200)
      })
  })
})
