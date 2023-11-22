const MIN_EXP = 100;
const MAX_EXP = 12000;

const Hero = {
    heroName: "",
    currentExp: 0, 

    /**
     * Function to set in each rank | title the 'Hero' instance is related to, based on its 'currentExp' property.
     * @param {int} exp Hero.currentExp value.
     * @returns string
     */
    calcRankByExp(exp){
        /**
         * Array that contains the maximum experience needed for each rank. 
         * See more about it on 'lab-rules/message-template.txt'.
         */
        let _rankLimit = [
            1000,   // FERRO
            2000,   // BRONZE
            6000,   // PRATA
            7000,   // OURO
            8000,   // PLATINA
            9000,   // ASCENDENTE
            10000,  // IMORTAL >> +1 >> RADIANTE
        ];
        
        /**
         * Array that contains each rank name/title.
         * See more about it on 'lab-rules/message-template.txt'.
         */
        let _rankTitle = [
            "FERRO",
            "BRONZE",
            "PRATA",
            "OURO",
            "PLATINA",
            "ASCENDENTE",
            "IMORTAL",
            "RADIANTE"
        ];

        let rank;
        let i = 0;

        // Loop for checking on what 'rank' the 'Hero' is classified based on its 'currentExp'.
        while(rank == null && i < _rankLimit.length){
            rank = (exp <= _rankLimit[i]) ? _rankTitle[i] : null;
            i++;
        }
        
        // Checking if the previous loop had ended without a value assigned to 'rank' variable.
        if (rank == null) rank = _rankTitle[_rankTitle.length-1];

        return rank;
    },

    /**
     * Function to diplay a simple message which contains 'Hero.heroName' and 'Hero.calcRank()' return.
     */
    displayRankByExp(){
        console.log(`O Herói de nome ${this.heroName} está no nível de ${this.calcRankByExp(this.currentExp)} (${this.currentExp})`);
    }
};

export {Hero, MIN_EXP, MAX_EXP};