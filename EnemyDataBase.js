var AM = new AssetManager();

function EnemyDataBase(game, spritesheet) {
    this.game = game;

    this.monsters =
    [{
        health: 100,
        name: 'slime',
        attacks: {
            type: 'damage',
            value: 5
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                                                                    //health of monster needs to match
                            AM.getAsset("./img/GreenHealthBar.png"), 100, 130, 13),

        animation: new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5, 1,0),
        attackAnimation: new Animation(spritesheet, 256, 256, 1, .075, 18, false, 0.5, 2,0),
        damagedAnimation: new Animation(spritesheet, 256, 256, 1, .3, 3, false, .5, 3,0),
        deathAnimation: new Animation(spritesheet, 253, 256, 1, .075, 3, true, .5, 5 ,0)
    },                 
    {
        health: 120,
        name: 'succubus',
        attacks: {
            type: 'damage',
            value: 70
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 120, 130, 13),

        animation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.10, 7, true, 1, 1,0),
        attackAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.15, 6, false, 1, 2,0),
        damagedAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.15, 4, false, 1, 0,0),
        deathAnimation: new Animation(AM.getAsset("./img/succubus_basic.png"), 200, 190, 1, 0.15, 7, false, 1, 0,0)
    },
    {
        health: 80,
        name: 'chicken',
        attacks: {
            type: 'damage',
            value: 10
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 80, 130, 13),
        
        animation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.05, 9, true, 1.5, 4, 0),
        attackAnimation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.1, 9, false, 1.5, 2, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.05, 4, false, 1.5, 5, 0),
        deathAnimation: new Animation(AM.getAsset("./img/chicken.png"), 64, 64, 1, 0.05, 3, true, 1.5, 5, 6)
    },
    {
        health: 200,
        name: 'doomcluck',
        attacks: {
            type: 'damage',
            value: 20
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 200, 130, 13),

        animation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.05, 9, true, 2.5, 4, 0),
        attackAnimation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.1, 9, false, 2.5, 1, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.05, 4, false, 2.5, 5, 0),
        deathAnimation: new Animation(AM.getAsset("./img/doomcluck.png"), 64, 64, 1, 0.05, 3, true, 2.5, 5, 6)
    },
    {
        health: 150,
        name: 'earth elemental',
        attacks: {
            type: 'damage',
            value: 30
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 150, 130, 13),
        
        animation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 9, true, 1, 1, 0), // sheet kinda weird
        attackAnimation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 6, false, 1, 2, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 6, false, 1, 3, 0),
        deathAnimation: new Animation(AM.getAsset("./img/earthelemental.png"), 111.1111111111111, 111.1666666666667, 1, 0.1, 3, true, 1, 5, 6)
    },
    {
        health: 220,
        name: 'taurus',
        attacks: {
            type: 'damage',
            value: 10
        },
        HPBar: new HealthBar(game,AM.getAsset("./img/RedHealthBar.png"),
                            AM.getAsset("./img/GreenHealthBar.png"), 220, 130, 13),

        animation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 3, true, 2, 0, 0),
        attackAnimation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 6, false, 2, 1, 0),
        damagedAnimation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 4, false, 2, 4, 0),
        deathAnimation: new Animation(AM.getAsset("./img/taurus.png"), 128, 128, 1, 0.15, 3, true, 2, 5, 6)
    }]
};