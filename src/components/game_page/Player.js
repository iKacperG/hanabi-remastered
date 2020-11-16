export class Player{
    constructor(name,isYou,order) {

        this.hand = [];
        this.name = name;
        this.isYou = isYou;
        this.order = order;
    }
}

class PlayerBuilder{
    constructor() {
    this.build = (name,isYou,order) => {
        players.push(new Player(name,isYou,order))
    }
    }
}

const playerBuilder = new PlayerBuilder()

export let players = []

playerBuilder.build('First',true,1)
playerBuilder.build('Second',false,2)
playerBuilder.build('Third',false,3)
playerBuilder.build('Fourth',false,4)
