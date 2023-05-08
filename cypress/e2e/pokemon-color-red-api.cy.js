describe('test color endpoint', () => {
    it('should return accurate data for pokemon color red', () => {
        // Send a GET request to the endpoint
        cy.request('https://pokeapi.co/api/v2/pokemon-color/red')
            .then((response) => {
                // Log the response status code
                // cy.log(`Response status code: ${response.status}`);

                // Verify that the response status code is 200 OK
                expect(response.status).to.eq(200);

                // Verify that the response body contains the expected name property with value "red"
                expect(response.body).to.have.property('name', 'red');

                // Verify that the response body contains an array of Pokemon species
                expect(response.body.pokemon_species).to.have.length.above(0);

                // Log the number of Pokemon species in the response body
                // cy.log(`Number of Pokemon species: ${response.body.pokemon_species.length}`);

                // Loop through each Pokemon species in the response body and verify that they have a name and URL property
                const pokemonSpecies = response.body.pokemon_species;
                pokemonSpecies.forEach((species) => {
                    expect(species).to.have.property('name');
                    expect(species).to.have.property('url');
                });
            });
    });
});
