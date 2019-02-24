//WORK IN PROGRESS

function Battle(game, Enemies, dungeon, PlayerCharacter) {
    this.game = game;
    this.PlayerCharacter = PlayerCharacter;
    //this.Enemies = Enemies.constructor === Array ? [...Enemies] : [Enemies];
    this.Enemy = Enemies;
    this.PlayerTurn = true;
    this.dungeon = dungeon;
    this.isBattleOver = false;
    this.cooldown = 1.5;
    this.timeOfLastMove = 0;
}

Battle.prototype.notOnCooldown = function () {
    if (this.game.timer.gameTime - this.timeOfLastMove >= this.cooldown) {
        console.log(this.game.timer.gameTime)
        console.log(this.timeOfLastMove);

        return true;
    } else {
        return false;
    }
}

Battle.prototype.playerMove = function(card) {
    if (this.PlayerTurn && !this.isBattleOver && this.notOnCooldown()) {
        this.PlayerCharacter.playCard();
        this.timeOfLastMove = this.game.timer.gameTime;

        if (card.fn.type === 'damage') {
            this.Enemy.takeDamage(card.fn.value);
            if(!this.Enemy.isAlive()) {
                this.isBattleOver = true;
                this.dungeon.BattleOngoing = false;
                this.dungeon.rewardScene = true;
            }
        } else if (card.fn.type === 'heal') {
            if (this.PlayerCharacter.health + card.fn.value < 100) {
                this.PlayerCharacter.heal(card.fn.value)
            } else {
                this.PlayerCharacter.heal(100 - this.PlayerCharacter.health)
            }
        }
        // this.PlayerTurn === false;
    }
   // console.log("Enemy Health: " + this.Enemies[0].health, "Player Health: " + this.PlayerCharacter.health);
   // console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);

}


Battle.prototype.enemyMoves = function() {
   // while (this.notOnCooldown() === false) {
     //   console.log("weae")
   // }
    if (!this.PlayerTurn && !this.isBattleOver) {
        if( this.Enemy.isAlive()) {
            this.timeOfLastMove = this.game.timer.gameTime;

            var attack = this.Enemy.attackPlayer();
            if (attack.type === 'damage') {

                this.PlayerCharacter.takeDamage(attack.value);
                if (!this.PlayerCharacter.isAlive()) {
                    this.isBattleOver = true;
                    this.dungeon.GameOver()
                }
            }
            // deal with buffs for enemies or blocks here

        }
    }

   this.PlayerTurn = true;
//console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);
}

Battle.prototype.endPlayerTurn = function() {
    this.PlayerTurn = false;
}

Battle.prototype.getPlayerTurn = function() {
    if (this.cooldown)
    return this.PlayerTurn;
}


