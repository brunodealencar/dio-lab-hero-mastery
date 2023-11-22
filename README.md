# dio-lab-hero-mastery
Learning repository created for applying an exercise into DIO's Lab structure from 'Potência Tech iFood' bootcamp. 

> DIO stands for '[Digital Innovation One](https://web.dio.me/)', an educational web platform related to IT | Tech environment.

---

### ❓ What is this repository about?

Here, you'll find a project that's been developed for emphasizing the **programming logic** structure, using **JavaScript** for that.

Basically, it consists on creating a simple interaction through terminal/console in order to displaying a custom message, which is based on user's entry.

> **User's interaction** towards the terminal performs according to **"node:readline"** module on 'src/main.js'. For more info. about this module, check [Node.JS Doc](https://nodejs.org/api/readline.html#readline).

The first entry — represented by *labOption* variable — determines which DIO's Lab exercise will be executed, according to the following switch-case:

```
switch(labOption){
    case "L1":
    case "l1":
        /*
         *  1st DIO Lab exercise
         *  
         *  INTENDED:   display a hero's name and rank-title for a supposed ranked gaming system.
         *  
         *              The rank-title is calculated by an XP entry — random generated (Math.random()).
         */
         break;

    case "L2":
    case "l2":
        /*
         *  2nd DIO Lab exercise
         *
         *  INTENDED:   display a hero's rank-title and streak for a supposed ranked gaming system.
         *
         *              The rank-title is calculated by a win streak entry (wins - defeats) — user interaction.
         */
         break;

    default:
        /*
         *  Abort code execution.
         */
         break;
}
```

---

If the first exercise is called ("L1" entry on terminal), the simple JavaScript Object — *Hero* — must be instantiated, passing the following property values:

```
Hero = {
    heroName: /* passed through terminal <node:readline> */,
    currentExp: /* from Math.random() */
}
``` 

Then, this object must call 'displayRankByExp()' method so as to show the custom message.

> For checking the **rank-titles** related to 'currentExp' value, access **"/lab-rules/Lab_01-message-template.txt"** in this repository!

If the second exercise is called ("L2" entry on console), the same JavaScript Object must be instantiated, but passing the following values as parameters to:
```
Hero.displayRankByStreak(
    winCount, /* passed through terminal */
    defeatCount /* passed through terminal as well */
)
```

Then, it must call the previous method to display the custom message.

---
### 👨‍💻 Tech elements involved on the project

![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=000)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)