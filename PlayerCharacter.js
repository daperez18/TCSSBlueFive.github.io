
 
function PlayerCharacter(game, spritesheet, enemy, cardDataBase) {
    //this.animation = new Animation(spritesheet, 200, 300, 1, .1, 14, true, 1);
    this.IdleAnimation = new Animation(spritesheet, 110, 230, 1, 1, 1, true, 1 );
    //this.AttackAnimation = to be added
    this.idle = true;
    this.x = 250;
    this.y = 300;
    const AttCard = new Card(game,cardDataBase.cards[0], this);

    this.DeckList = [AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard];
    this.health = 100;
    this.attack = 30;

    this.speed = 0;
    this.game = game;
    this.battle = game.battle;
    this.ctx = game.ctx;
}

PlayerCharacter.prototype.attackCard = function() {
    this.battle.enemy.health -= 10;
}

PlayerCharacter.prototype.update = function () {
    //needs to be added
}
PlayerCharacter.prototype.draw = function () {
    if (this.idle) {
        this.IdleAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 0);
    }
}
