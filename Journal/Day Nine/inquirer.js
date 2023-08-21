const inquirer = require("inquirer");

const printMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const json = await response.json();
  let moves = json.moves.map(({ move }) => move.name);
  moves = moves.slice(0, 5);
  console.log(moves);
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    name: "pokemon",
    type: "input",
    message: "enter name of a pokemon to see its five moves: ",
  },
]).then((res) => {
  printMoves(res.pokemon);
});

