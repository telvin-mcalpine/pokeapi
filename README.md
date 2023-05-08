PokeAPI Cypress Tests
This repository contains Cypress tests for the PokeAPI.

Installation
To get started with the tests, you'll need to have Node.js and Git installed on your system.

Once Node.js and Git are installed, you can clone this repository by running the following command in your terminal:

git clone https://github.com/telvin-mcalpine/pokeapi.git
This will create a local copy of the repository on your system.

Next, navigate into the repository directory and install the required dependencies by running the following command:

npm install
This will install Cypress and any other dependencies needed to run the tests.

npm run cy:open
This will open the Cypress Test Runner, where you can select and run individual tests.

# pokeapi endpoint for red pokemon

Test Case: API Testing for https://pokeapi.co/api/v2/pokemon-color/red

Why this Endpoint?

The endpoint https://pokeapi.co/api/v2/pokemon-color/red is a good choice for API testing because it provides information about Pokemon of a specific color and returns a well-structured JSON response that includes data such as the color's name, the IDs and names of Pokemon that have that color, and the URL to access more detailed information about each Pokemon.

Steps to Test Manually with Postman:

- Open Postman and create a new request.
- Set the request method to "GET".
- Enter the URL https://pokeapi.co/api/v2/pokemon-color/red in the request URL field.
- Click on the "Send" button to send the request.
- Verify that the response status code is 200 OK.
- Verify that the response contains the expected JSON data format.
- Verify that the response contains accurate and expected data for all the Pokemon species belonging to the color "red".

# pokeapi endpoint for berries in pokemon

Test Case: API Testing for https://pokeapi.co/api/v2/berry/{id}

Why this Endpoint?

The endpoint https://pokeapi.co/api/v2/berry/{id} is a good choice for API testing because it provides information about a specific berry and returns a well-structured JSON response that includes data such as the berry's name, growth time, and maximum yield.

Steps to Test Manually with Postman:

- Open Postman and create a new request.
- Set the request method to "GET".
- Enter the URL https://pokeapi.co/api/v2/berry/{id} in the request URL field.
- Replace "{id}" with a valid berry ID (e.g. 1, 2, 3, etc.).
- Click on the "Send" button to send the request.
- Verify that the response status code is 200 OK.
- Verify that the response contains the expected JSON data format.
- Verify that the response contains accurate and expected data for the berry species corresponding to the provided ID.

# pokeapi endpoint for stats in pokemon

Test Case: API Testing for https://pokeapi.co/api/v2/pokeathlon-stat/{id or name}/

Why this Endpoint?

The endpoint https://pokeapi.co/api/v2/pokeathlon-stat/{id or name}/ is a good choice for API testing because it provides information about the Pokéathlon statistics of a specific Pokémon or a Pokéathlon stat ID.

Steps to Test Manually with Postman:

- Open Postman and create a new request.
- Set the request method to "GET".
- Enter the URL https://pokeapi.co/api/v2/pokeathlon-stat/ in the request URL field.
- Click on the "Send" button to send the request.
- Verify that the response status code is 200 OK.
- Extract all the IDs of the Pokéathlon stats from the response using a JSON path expression.
- For each ID, create a new request and append the ID to the URL. For example, for the ID 1, the URL will be https://pokeapi.co/api/v2/pokeathlon-stat/1/.
- Click on the "Send" button to send each request.
- Verify that the response status code is 200 OK for each request.
- Verify that the response contains the expected JSON data format.
- Verify that the response contains accurate and expected data for the P okéathlon stat with the corresponding ID.

# pokeapi endpoint for generation in pokemon

Test Case: API Testing for https://pokeapi.co/api/v2/generation/{id or name}/

Why this endpoint?

The endpoint https://pokeapi.co/api/v2/generation/{id or name}/ returns data about a particular Pokemon generation

Steps to Test Manually with Postman:

Test case 1: Get all IDs from the API

- Open Postman and create a new request.
- Set the request method to GET.
- Set the request URL to https://pokeapi.co/api/v2/generation.
- Click on the "Send" button to send the request.
- Check that the response status code is 200 OK.
- Check that the response body contains a list of all the available generations with their respective IDs.
- Save all the IDs from the response body into a variable or a file.

Test case 2: Randomly check a generation using an ID

- Open Postman and create a new request.
- Set the request method to GET.
- Set the request URL to https://pokeapi.co/api/v2/generation/{id} where {id} is a randomly selected ID from the list obtained in Test case 1.
- Click on the "Send" button to send the request.
- Check that the response status code is 200 OK.
- Check that the response body contains information about the generation with the selected ID.

# pokeapi endpoint for forms in pokemon

Test Case: API Testing for https://pokeapi.co/api/v2/pokemon-form/{id or name}/

Why this endpoint?

The https://pokeapi.co/api/v2/pokemon-form/{id or name}/ endpoint returns information about a specific form of a Pokemon. When you make a GET request to this endpoint with a valid Pokemon ID or name, you'll receive a JSON response that includes data such as the Pokemon's name, ID, sprite image, and various other details about the form.

Steps to Test Manually with Postman:

- Set the endpoint URL to https://pokeapi.co/api/v2/pokemon
- Set the HTTP method to GET
- Click the "Send" button to make the request
- Check the response status code to ensure it's 200 OK
- Check the response body to ensure it's an array of Pokemon objects with name, url, and other properties
- For each Pokemon in the response, extract its name and add it to a list
- For each Pokemon in the list, do another GET request to its forms endpoint by replacing {id or name} in the URL with the Pokemon's name
- Check the response status code to ensure it's 200 OK
- Check the response body to ensure it's an array of form objects with name, url, and other properties
