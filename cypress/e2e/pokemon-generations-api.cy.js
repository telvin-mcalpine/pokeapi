describe('test generation endpoint', () => {
  it('Retrieves a random generation and checks its name and ids', () => {
    // Make a GET request to retrieve all generations
    cy.request('https://pokeapi.co/api/v2/generation')
      .then(response => {
        expect(response.status).to.equal(200);
        // Log the response to the console
        console.log(response.body);
        // Select a random generation from the list
        const randomIndex = Math.floor(Math.random() * response.body.results.length);
        const randomGeneration = response.body.results[randomIndex];
        // Make a GET request to retrieve the details of the random generation
        cy.request(randomGeneration.url)
          .then(response => {
            expect(response.status).to.equal(200);
            // Log the response to the console
            console.log(response.body);
            // Check that the generation name is a string
            expect(response.body.name).to.be.a('string');
            // Check that the generation id and all pokemon species ids are numbers
            expect(response.body.id).to.be.a('number');
            response.body.pokemon_species.forEach(pokemonSpecies => {
              expect(pokemonSpecies.url).to.match(/\/api\/v2\/pokemon-species\/\d+\//);
            });
          });
      });
  });
});
