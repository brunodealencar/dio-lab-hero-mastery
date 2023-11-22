const MIN_EXP = 100;
const MAX_EXP = 12000;

const Hero = {
    heroName: "",
    currentExp: 0,
    currentRankedStreak: 0,

    /**
     * Function to set in each rank | title the 'Hero' instance is related to, based on its 'currentExp' property.
     * @param {int} exp Hero.currentExp value.
     * @returns string
     */
    calcRankByExp(exp){
        /**
         * Array that contains the maximum experience needed for each rank. 
         * See more about it on 'lab-rules/Lab_01-message-template.txt'.
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
         * See more about it on 'lab-rules/Lab_01-message-template.txt'.
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
     * Function to set in each rank | title the 'Hero' instance is related to, based on its 
     * 'currentRankedStreak' property (winCount - defeatCount).
     * @param {int} winCount 
     * @param {int} defeatCount 
     * @returns string
     */
    calcRankByStreak(winCount, defeatCount){
        /**
         * Array that contains the maximum 'ranked streak' needed for each rank. 
         * See more about it on 'lab-rules/Lab_02-message-template.txt'.
         */
        let _rankLimit = [
            10,   // FERRO
            20,   // BRONZE
            50,   // PRATA
            80,   // OURO
            90,   // DIAMANTE
            100   // LENDÁRIO >> +1 >> IMORTAL
        ];

        /**
         * Array that contains each rank name/title.
         * See more about it on 'lab-rules/Lab_02-message-template.txt'.
         */
        let _rankTitle = [
            "FERRO",
            "BRONZE",
            "PRATA",
            "OURO",
            "DIAMANTE",
            "LENDÁRIO",
            "IMORTAL"
        ];

        this.currentRankedStreak = winCount - defeatCount;

        let rank;
        let i = 0;

        while(rank == null && i < _rankLimit.length){
            rank = (this.currentRankedStreak <= _rankLimit[i]) ? _rankTitle[i] : null;
            i++; 
        }

        if (rank == null) rank = _rankTitle[_rankTitle.length-1]

        return rank;
    },

    /**
     * Function to diplay a simple message which contains 'Hero.heroName' and 'Hero.calcRankByExp()' return.
     */
    displayRankByExp(){
        let rank = this.calcRankByExp(this.currentExp);

        console.log(`O Herói de nome ${this.heroName} está no nível de ${rank} (${this.currentExp})`);
    },

    /**
     * Function to display a simple message which contains 'Hero.currentRankedStreak' 
     * value (winCount - defeatCount) and 'Hero.calcRankByStreak()' return.
     * @param {int} winCount 
     * @param {int} defeatCount 
     */
    displayRankByStreak(winCount, defeatCount){
        let rank = this.calcRankByStreak(winCount, defeatCount);

        console.log(`O Herói tem de saldo de ${this.currentRankedStreak} está no nível de ${rank}`)
    }
};

export {Hero, MIN_EXP, MAX_EXP};