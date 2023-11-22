// ONLY RUNNING ON TERMINAL THROUGH 'NODE src/main.js'

import * as readline from "node:readline";
import process from "node:process";

import { Hero, MIN_EXP, MAX_EXP } from "./hero.js";

// Establishing a terminal reference into node.js for interacting.
const rl = readline.createInterface(process.stdin, process.stdout);

let labEntry = Hero;
let labOption;

rl.question("Which DIO's Lab do you wanna test? (L1 || L2)", (option) => {
    labOption = option;

    switch(labOption){
        case "L1":
        case "l1":
            // Demanding a terminal interaction from 'node:readline' so as to enable user input.
            rl.question("Type hero's name: ", (name) => {
                // Assign user typing entry into 'labEntry.heroName'
                labEntry.heroName = name;
                // Assign a random value to 'labEntry.currentExp' between MIN_EXP and MAX_EXP (from src/hero.js)
                labEntry.currentExp = Math.floor(Math.random() * (MAX_EXP - MIN_EXP)) + MIN_EXP;
    
                labEntry.displayRankByExp();
                rl.close();
            });
            break;
    
        case "L2":
        case "l2":
            let winCount;
            let defeatCount;

            rl.question("Insert hero's win count: ", (typedWinCount) =>{
                winCount = typedWinCount;
                
                rl.question("Insert hero's defeat count: ", (typedDefeatCount) => {
                    defeatCount = typedDefeatCount;

                    labEntry.displayRankByStreak(winCount, defeatCount);
                    rl.close();
                });
            });
            break;
        
        default:
            rl.write("ERROR: DIO's Lab ID not properly inserted! Please reload the terminal.")
            rl.close();
            break;
    }
});


