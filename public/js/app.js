const name = prompt(`What is your character's name?`);
const characterRole = prompt (`What is your character's class? (Warrior, Ranger, Rogue)`, `Warrior`);
const output = document.getElementById('output');

output.innerHTML = `
Name: ${name}
Role: ${characterRole}

`
console.log(window);
console.log(this);

console.log(name, characterRole);