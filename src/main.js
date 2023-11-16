// ONLY RUNNING ON TERMINAL THROUGH 'NODE src/main.js'

import * as readline from "node:readline";
import process from "node:process";

import { Hero, MIN_EXP, MAX_EXP } from "./hero.js";

// Establishing a terminal reference into node.js for interacting.
const rl = readline.createInterface(process.stdin, process.stdout);

let labEntry = Hero;

// Demanding a terminal interaction from 'node:readline' so as to enable user input.
rl.question("Type hero's name: ", (name) => {
    // Assign user typing entry into 'labEntry.heroName'
    labEntry.heroName = name;
    // Assign a random value to 'labEntry.currentExp' between MIN_EXP and MAX_EXP (from src/hero.js)
    labEntry.currentExp = Math.floor(Math.random() * (MAX_EXP - MIN_EXP)) + MIN_EXP;

    labEntry.displayCurrentRank();
    rl.close();
})