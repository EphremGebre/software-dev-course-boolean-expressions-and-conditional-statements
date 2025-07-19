/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Initial items - simplified starting conditions
let hasTorch = false;
let hasMap = false;

console.log("You awaken in a strange, silent forest. Your only goal is to **escape**.");
console.log("You see two paths: a faint, shimmering 'light' ahead, and a foreboding 'darkness' to your right.");

const initialChoice = readline.question("Which way do you go? ('light' or 'darkness'): ");

if (initialChoice === "light") {
    console.log("\nYou move towards the light. You stumble upon an abandoned 'camp'.");
    console.log("Searching the camp, you find a **torch** and a worn **map**.");
    hasTorch = true;
    hasMap = true;
    console.log("You now have a **torch** and a **map**!");

    console.log("\nEquipped, you see a path leading to a 'rickety bridge' over a gorge.");
    const finalLightChoice = readline.question("Do you try to cross the 'rickety bridge'?: ");

    if (finalLightChoice === "rickety bridge" && hasTorch && hasMap) {
        console.log("Using your **torch** to see the unstable planks and your **map** to find the safest route, you carefully cross the bridge.");
        console.log("On the other side, the forest clears, revealing a road leading to civilization! You have **escaped**! You win!");
    } else if (finalLightChoice === "rickety bridge" && hasTorch) {
        console.log("You attempt to cross, your **torch** illuminating the bridge, but without a map, you pick the wrong path.");
        console.log("The bridge collapses beneath you. Game Over.");
    } else {
        console.log("Without light or guidance, the bridge is too dangerous. You're trapped. Game Over.");
    }

} else if (initialChoice === "darkness") {
    console.log("\nYou step into the oppressive darkness. The air grows colder and a eerie 'cave' entrance looms.");
    console.log("Near the cave, you spot a strange, glowing 'orb'.");

    const darkPathChoice = readline.question("Do you 'enter' the cave or investigate the 'glowing orb'?: ");

    if (darkPathChoice === "glowing orb") {
        console.log("You touch the glowing orb. It hums and then projects a shimmering portal!");
        console.log("You step through the portal and are instantly transported out of the forest and into a sunny meadow! You have **escaped**! You win!");
    } else if (darkPathChoice === "enter" && hasTorch) { // Note: hasTorch is only available if chosen 'light' first
        console.log("You bravely enter the cave, your **torch** providing some light. You find a hidden passage.");
        console.log("Following the passage, you emerge into a different part of the forest, and after a short walk, you find a clear exit! You have **escaped**! You win!");
    } else if (darkPathChoice === "enter" && !hasTorch) {
        console.log("You enter the cave. It's pitch black, and you quickly become disoriented. You trip and fall. Game Over.");
    } else {
        console.log("You hesitate too long. The darkness consumes you. Game Over.");
    }

} else {
    console.log("Your indecision leaves you vulnerable. Game Over.");
}

console.log("\n--- End of Adventure ---");