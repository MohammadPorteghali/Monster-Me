new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameISRuning: false
    }, 
    methods: {
        startGame: function(){
            this.gameISRuning= true;
            this.playerHealth= 100;
            this.monsterHealth= 100; 
        },
        attack: function(){
            this.monsterHealth -= this.calculateDamage(3 , 10);
            
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(3 , 10);

            this.checkWin();
        },
        specialAttack: function(){
            this.monsterHealth -= this.calculateDamage(10 , 15);
            
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(1 , 5);

            this.checkWin();
        },
        heal: function(){
            this.playerHealth += 10;
        },
        giveUp: function(){
            this.gameISRuning= false;
            this.playerHealth= 100;
            this.monsterHealth= 100 
        },
        calculateDamage: function(min , max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if (this.monsterHealth <= 0){
                if(confirm('You Won! New Game ?')){
                    this.startGame();
                } else { 
                this.gameISRuning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0){
                if(confirm('You lost! New Game ?')){
                    this.startGame();
                } else { 
                    this.gameISRuning = false;
                    }
                return true;
            }
            return false;
        } 
    }   
});