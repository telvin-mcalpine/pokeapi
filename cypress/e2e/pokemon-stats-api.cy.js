describe('test stats endpoint', () => {
  it('successfully fetches all possible ids or names and validates successful calls for them at random', () => {
    // Send a GET request to the endpoint to get the total count of possible ids or names.
    cy.request('https://pokeapi.co/api/v2/pokeathlon-stat/')
      // Get the 'count' property from the response body using the `its()` method.
      .its('body.count')
      .then(count => {
        // Generate an array of random ids or names to test using the `sampleSize()` method from the Lodash library.
        const randomIdsOrNames = Cypress._.sampleSize(
          // Use the `Array.from()` method to create an array of numbers from 1 to `count`.
          Array.from({ length: count }, (_, i) => i + 1),
          10 // replace with desired number of random ids or names to test
        )
        // Iterate over each random id or name in the array.
        cy.wrap(randomIdsOrNames).each(idOrName => {
          // Log the id or name being tested to the Cypress test runner console.
          cy.log(`Testing id or name: ${idOrName}`)
          // Send a GET request to the endpoint for the current id or name.
          cy.request(`https://pokeapi.co/api/v2/pokeathlon-stat/${idOrName}/`)
            // Get the 'status' property from the response using the `its()` method.
            .its('status')
            // Assert that the status code is equal to 200 using the `should()` method.
            .should('eq', 200)
        })
      })
  })
})